import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Check, Circle, ChevronRight } from "lucide-react";
import { cases } from "@/data/cases";
import { categories } from "@/data/categories";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return cases.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const c = cases.find((c) => c.id === id);
  if (!c) return {};
  return {
    title: c.title,
    description: c.description,
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { id } = await params;
  const c = cases.find((c) => c.id === id);
  if (!c) notFound();

  const caseCategories = c.categories
    .map((slug) => categories.find((cat) => cat.slug === slug))
    .filter(Boolean);

  const relatedCases = cases
    .filter(
      (other) =>
        other.id !== c.id &&
        other.categories.some((cat) => c.categories.includes(cat))
    )
    .slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-emerald-600">トップ</Link>
        <span>/</span>
        <Link href="/cases" className="hover:text-emerald-600">案件一覧</Link>
        <span>/</span>
        <span className="text-gray-800">{c.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="relative h-56 overflow-hidden">
              <Image
                src={c.imageUrl}
                alt={c.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {c.badge && (
                <span className="absolute top-4 left-4 bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full z-10">
                  {c.badge}
                </span>
              )}
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {caseCategories.map((cat) => {
                  if (!cat) return null;
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      className="flex items-center gap-1.5 text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full font-medium hover:bg-emerald-100"
                    >
                      <Icon size={12} />
                      {cat.name}
                    </Link>
                  );
                })}
              </div>
              <h1 className="text-xl md:text-2xl font-black text-gray-900 mb-1">{c.title}</h1>
              <p className="text-sm text-gray-500 mb-3">{c.companyName}</p>
              <p className="text-base font-semibold text-emerald-700 mb-4">{c.catchCopy}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{c.description}</p>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-black text-gray-900 mb-4">このビジネスの特徴</h2>
            <ul className="space-y-3">
              {c.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-black text-gray-900 mb-4">開業概要</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "開業資金目安", value: `${c.investmentMin}万円〜${c.investmentMax}万円` },
                { label: "想定収入", value: c.earnings },
                { label: "ロイヤリティ", value: c.royalty },
                { label: "契約期間", value: c.contractPeriod },
                { label: "開業期間", value: c.startupPeriod },
                { label: "対応エリア", value: c.prefecture?.join("・") ?? "全国" },
              ].map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-3">
                  <dt className="text-xs text-gray-500 mb-0.5">{item.label}</dt>
                  <dd className="text-sm font-semibold text-gray-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Support */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-black text-gray-900 mb-4">本部サポート内容</h2>
            <ul className="space-y-2">
              {c.supportDetails.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <Circle size={8} className="text-blue-500 mt-1.5 flex-shrink-0 fill-blue-500" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-black text-gray-900 mb-4">開業条件</h2>
            <ul className="space-y-2">
              {c.requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* CTA */}
          <div className="bg-emerald-700 text-white rounded-2xl p-6 sticky top-20">
            <h3 className="font-black text-lg mb-1">この案件に興味がある</h3>
            <p className="text-emerald-200 text-xs mb-4">無料で資料を請求できます。しつこい営業はありません。</p>
            <Link
              href={`/request?case=${c.id}`}
              className="block w-full bg-white text-emerald-700 font-bold text-center py-3 rounded-xl hover:bg-emerald-50 transition-colors mb-2"
            >
              無料で資料請求する
            </Link>
            <Link
              href="/request"
              className="block w-full border border-emerald-500 text-emerald-200 font-medium text-center py-2 rounded-xl hover:bg-emerald-600 transition-colors text-sm"
            >
              まとめて資料請求する
            </Link>
            <ul className="mt-4 space-y-2 text-xs text-emerald-300">
              {[
                "個人情報は選択した企業にのみ提供",
                "資料請求は完全無料",
                "説明会は任意参加",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2">
                  <Check size={12} />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <h3 className="font-black text-sm text-gray-900 mb-3">概要</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">開業資金</span>
                <span className="font-bold">{c.investmentMin}万円〜</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">開業期間</span>
                <span className="font-bold">{c.startupPeriod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">ロイヤリティ</span>
                <span className="font-bold">{c.royalty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">契約期間</span>
                <span className="font-bold">{c.contractPeriod}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-black text-gray-900 mb-6">関連する案件</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedCases.map((rc) => (
              <Link
                key={rc.id}
                href={`/cases/${rc.id}`}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-sm transition-all"
              >
                <p className="font-bold text-sm text-gray-900 mb-1">{rc.title}</p>
                <p className="text-xs text-gray-500 mb-2">{rc.companyName}</p>
                <p className="text-xs text-emerald-600 font-semibold">{rc.investmentMin}万円〜</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

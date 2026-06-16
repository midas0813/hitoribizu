import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CaseCard from "@/components/CaseCard";
import { cases } from "@/data/cases";
import { categories } from "@/data/categories";
import { CategorySlug } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.name}の案件一覧`,
    description: `${cat.description}。${cat.name}で始められるフランチャイズ・独立開業案件を比較できます。`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const filteredCases = cases.filter((c) =>
    c.categories.includes(cat.slug as CategorySlug)
  );

  const HeaderIcon = cat.icon;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-emerald-600">トップ</Link>
        <span>/</span>
        <Link href="/cases" className="hover:text-emerald-600">案件一覧</Link>
        <span>/</span>
        <span className="text-gray-800">{cat.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
            <HeaderIcon size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black mb-1">{cat.name}</h1>
            <p className="text-emerald-200 text-sm">{cat.description}</p>
          </div>
        </div>
        <p className="mt-4 text-emerald-100 text-sm">
          {filteredCases.length}件の案件が見つかりました
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/cases"
          className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-gray-300 text-gray-700 hover:border-emerald-400 hover:text-emerald-700 transition-colors"
        >
          すべて
        </Link>
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                c.slug === cat.slug
                  ? "bg-emerald-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:border-emerald-400 hover:text-emerald-700"
              }`}
            >
              <Icon size={14} />
              {c.name}
            </Link>
          );
        })}
      </div>

      {filteredCases.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCases.map((c) => (
            <CaseCard key={c.id} case_={c} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
          <p className="text-gray-500 text-lg mb-4">このカテゴリの案件は現在準備中です</p>
          <Link href="/cases" className="text-emerald-600 font-semibold hover:underline">
            すべての案件を見る
          </Link>
        </div>
      )}

      {/* CTA */}
      <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-black text-gray-900 mb-2">気になる案件が見つかりましたか？</h2>
        <p className="text-gray-600 text-sm mb-4">
          複数の案件をまとめて資料請求できます。完全無料。
        </p>
        <Link
          href="/request"
          className="inline-block bg-emerald-600 text-white font-bold px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors"
        >
          無料で資料請求する
        </Link>
      </div>
    </div>
  );
}

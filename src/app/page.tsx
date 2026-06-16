import Link from "next/link";
import Image from "next/image";
import CaseCard from "@/components/CaseCard";
import { cases } from "@/data/cases";
import { categories } from "@/data/categories";

export default function HomePage() {
  const popularCases = cases.filter((c) => c.isPopular).slice(0, 3);
  const newCases = cases.filter((c) => c.isNew).slice(0, 3);
  const allCases = cases.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-emerald-200 text-sm font-medium mb-3 tracking-wide uppercase">
                一人開業・副業・小資本フランチャイズ比較
              </p>
              <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
                ひとりで始める、<br />
                自分の仕事を<br />見つけよう
              </h1>
              <p className="text-emerald-100 text-base leading-relaxed mb-8">
                一人開業・副業・低資金・無店舗など、
                小さく始めてしっかり稼げるフランチャイズ案件を
                無料で比較・資料請求できます。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/cases"
                  className="bg-white text-emerald-700 font-bold px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors text-sm md:text-base text-center"
                >
                  案件をすべて見る
                </Link>
                <Link
                  href="/request"
                  className="bg-emerald-500 text-white font-bold px-8 py-3 rounded-full border-2 border-emerald-400 hover:bg-emerald-400 transition-colors text-sm md:text-base text-center"
                >
                  無料で資料請求する
                </Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero.jpg"
                  alt="独立開業・一人ビジネスのイメージ"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1200px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-emerald-900/20" />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-xl shadow-xl px-5 py-3">
                <p className="text-xs text-gray-500">掲載案件数</p>
                <p className="text-2xl font-black text-emerald-700">{cases.length}件+</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-white text-gray-900 rounded-xl shadow-xl px-5 py-3">
                <p className="text-xs text-gray-500">開業最短</p>
                <p className="text-2xl font-black text-emerald-700">1週間</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="grid grid-cols-3 divide-x divide-gray-200 text-center">
            {[
              { value: `${cases.length}件+`, label: "掲載案件数" },
              { value: "無料", label: "資料請求・相談" },
              { value: "最短1週間", label: "開業可能案件あり" },
            ].map((stat) => (
              <div key={stat.label} className="px-4 py-2">
                <p className="text-xl md:text-2xl font-black text-emerald-700">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
          カテゴリから探す
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="relative group overflow-hidden rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all"
              >
                <div className="relative h-24">
                  <Image
                    src={cat.imageUrl}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-emerald-900/50 group-hover:bg-emerald-900/40 transition-colors" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                  <Icon size={22} className="text-white" />
                  <span className="text-xs font-bold text-white text-center leading-tight px-1">
                    {cat.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular Cases */}
      {popularCases.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-black text-gray-900">人気の案件</h2>
            <Link href="/cases" className="text-sm text-emerald-600 hover:underline font-medium">
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularCases.map((c) => (
              <CaseCard key={c.id} case_={c} />
            ))}
          </div>
        </section>
      )}

      {/* New Cases */}
      {newCases.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-black text-gray-900">新着案件</h2>
            <Link href="/cases" className="text-sm text-emerald-600 hover:underline font-medium">
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {newCases.map((c) => (
              <CaseCard key={c.id} case_={c} />
            ))}
          </div>
        </section>
      )}

      {/* All cases preview */}
      <section className="bg-white border-y border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-black text-gray-900">すべての案件</h2>
            <Link href="/cases" className="text-sm text-emerald-600 hover:underline font-medium">
              もっと見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allCases.map((c) => (
              <CaseCard key={c.id} case_={c} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/cases"
              className="inline-block bg-emerald-600 text-white font-bold px-10 py-3 rounded-full hover:bg-emerald-700 transition-colors"
            >
              全{cases.length}件の案件を見る
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-xl md:text-2xl font-black text-gray-900 text-center mb-10">
          ヒトリビズの使い方
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "案件を探す", desc: "カテゴリや資金額から自分に合う案件を絞り込む" },
            { step: "02", title: "資料請求", desc: "気になる案件を選んで無料で資料を請求する" },
            { step: "03", title: "説明会に参加", desc: "FC本部の説明会でビジネスの詳細を確認する" },
            { step: "04", title: "開業へ", desc: "契約・研修を経て自分のビジネスをスタート" },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner with background image */}
      <section className="relative overflow-hidden bg-emerald-700 text-white py-16">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-banner.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">
            まず資料請求から始めよう
          </h2>
          <p className="text-emerald-200 mb-6 text-sm md:text-base">
            完全無料。しつこい営業はありません。
            複数の案件をまとめて請求できます。
          </p>
          <Link
            href="/request"
            className="inline-block bg-white text-emerald-700 font-black px-10 py-4 rounded-full text-base hover:bg-emerald-50 transition-colors"
          >
            無料で資料請求する
          </Link>
        </div>
      </section>
    </>
  );
}

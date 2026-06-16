import { Metadata } from "next";
import CaseCard from "@/components/CaseCard";
import { cases } from "@/data/cases";
import { categories } from "@/data/categories";
import Link from "next/link";

export const metadata: Metadata = {
  title: "案件一覧",
  description: "一人開業・副業・低資金で始められるフランチャイズ案件をすべて掲載。カテゴリ別に絞り込みできます。",
};

export default function CasesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">案件一覧</h1>
        <p className="text-gray-600 text-sm">全{cases.length}件の案件を掲載中</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/cases"
          className="px-4 py-2 rounded-full text-sm font-semibold bg-emerald-600 text-white"
        >
          すべて
        </Link>
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-white border border-gray-300 text-gray-700 hover:border-emerald-400 hover:text-emerald-700 transition-colors"
            >
              <Icon size={14} />
              {cat.name}
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cases.map((c) => (
          <CaseCard key={c.id} case_={c} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-black text-gray-900 mb-2">気になる案件が見つかりましたか？</h2>
        <p className="text-gray-600 text-sm mb-4">
          複数の案件をまとめて資料請求できます。完全無料、しつこい営業はありません。
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

import Link from "next/link";
import { Home, Briefcase, PiggyBank, Rocket } from "lucide-react";
import { Case } from "@/types";
import { categories } from "@/data/categories";

interface Props {
  case_: Case;
}

function CaseThumbnailIcon({ c }: { c: Case }) {
  if (c.categories.includes("mu-tenpo")) return <Home size={56} strokeWidth={1} />;
  if (c.categories.includes("fukugyo")) return <Briefcase size={56} strokeWidth={1} />;
  if (c.categories.includes("tei-shikkin")) return <PiggyBank size={56} strokeWidth={1} />;
  return <Rocket size={56} strokeWidth={1} />;
}

export default function CaseCard({ case_: c }: Props) {
  const categoryNames = c.categories
    .map((slug) => categories.find((cat) => cat.slug === slug)?.name)
    .filter(Boolean);

  return (
    <Link href={`/cases/${c.id}`} className="group block bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="relative h-40 bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center text-emerald-300">
        <CaseThumbnailIcon c={c} />
        {c.badge && (
          <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            {c.badge}
          </span>
        )}
        {c.isNew && !c.badge && (
          <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            新着
          </span>
        )}
        <span className="absolute bottom-3 right-3 bg-white/90 text-emerald-700 text-xs font-semibold px-2 py-1 rounded-full">
          開業{c.startupPeriod}
        </span>
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-1 mb-2">
          {categoryNames.map((name) => (
            <span key={name} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
              {name}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-emerald-700 transition-colors mb-1">
          {c.title}
        </h3>
        <p className="text-xs text-gray-500 mb-2">{c.companyName}</p>

        <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-3">
          {c.catchCopy}
        </p>

        <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">開業資金</p>
            <p className="text-sm font-bold text-gray-900">
              {c.investmentMin}万円〜
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">想定収入</p>
            <p className="text-xs font-semibold text-emerald-700">{c.earnings.split("（")[0]}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

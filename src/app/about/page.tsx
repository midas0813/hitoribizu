import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "ヒトリビズとは",
  description: "ヒトリビズは一人開業・副業・小資本に特化したフランチャイズ比較ポータルサイトです。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">ヒトリビズとは</h1>

      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-8 mb-8">
        <p className="text-xl font-black mb-2">「ひとりで始める、自分の仕事」を探せる場所</p>
        <p className="text-emerald-100 leading-relaxed text-sm">
          ヒトリビズは、一人開業・副業・小資本・無店舗で始められる
          フランチャイズ・独立開業案件に特化した比較ポータルサイトです。
        </p>
      </div>

      <div className="space-y-8">
        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-black text-gray-900 mb-4">サービスの特徴</h2>
          <ul className="space-y-3">
            {[
              { title: "小規模・一人開業に特化", desc: "大型FCや初期費用が高い案件を除外し、個人・小資本でも現実的に開業できる案件を厳選しています。" },
              { title: "副業からのスタートOK", desc: "本業を続けながら副業として始められる案件を多数掲載。無理なく収入を多様化できます。" },
              { title: "無料で資料請求できる", desc: "掲載案件への資料請求は完全無料。費用が発生するのは実際に加盟契約をした場合のみです。" },
              { title: "個人情報は選択先のみへ提供", desc: "ご入力いただいた個人情報は、資料請求時に選択されたFC本部にのみ提供されます。" },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-black text-gray-900 mb-4">利用の流れ</h2>
          <ol className="space-y-4">
            {[
              { step: 1, title: "案件を探す", desc: "カテゴリや資金額から自分に合う案件を探します。" },
              { step: 2, title: "資料請求", desc: "気になった案件を選んで、フォームから無料で資料請求します。" },
              { step: 3, title: "FC本部より連絡", desc: "資料請求後、FC本部からメールまたは電話で資料やご案内が届きます。" },
              { step: 4, title: "説明会に参加（任意）", desc: "ビジネスの詳細を確認する説明会へ参加します（強制ではありません）。" },
              { step: 5, title: "契約・開業", desc: "内容に納得できたら契約・研修を経て開業します。" },
            ].map((item) => (
              <li key={item.step} className="flex items-start gap-4">
                <span className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-black text-gray-900 mb-3">掲載企業について</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            ヒトリビズに掲載されている案件は、フランチャイズ本部（掲載企業）からの広告掲載に基づいています。
            掲載企業から当サイトへの広告掲載費または成果報酬をいただくことがあります。
            これにより、利用者の皆様は無料でサービスをご利用いただけます。
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/cases"
          className="inline-block bg-emerald-600 text-white font-bold px-10 py-3 rounded-full hover:bg-emerald-700 transition-colors"
        >
          案件を探してみる
        </Link>
      </div>
    </div>
  );
}

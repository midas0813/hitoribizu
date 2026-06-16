import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-black text-gray-900 mb-2">プライバシーポリシー</h1>
      <p className="text-sm text-gray-500 mb-8">最終更新日：2026年6月16日　バージョン：1.0</p>

      <div className="space-y-6">
        {[
          {
            title: "1. 収集する個人情報",
            content: [
              "氏名・フリガナ",
              "メールアドレス",
              "電話番号",
              "都道府県",
              "職業・自己資金・開業希望時期",
              "資料請求対象のFC案件",
              "同意日時・同意バージョン",
              "アクセス情報（IPアドレス、Cookieを含む）",
            ],
            isList: true,
          },
          {
            title: "2. 個人情報の利用目的",
            content: [
              "資料請求先のFC本部への情報提供",
              "FC本部による説明会案内・商談対応",
              "当サイトからの確認・案内メールの送信",
              "サービス改善のための統計分析（個人を特定しない形）",
            ],
            isList: true,
          },
          {
            title: "3. 第三者提供",
            content: "資料請求時に選択されたフランチャイズ本部（掲載企業）へ、氏名・連絡先・希望条件等を提供します。提供先企業名は資料請求フォーム上で明示されます。それ以外の第三者への提供は、法令に基づく場合を除き行いません。",
            isList: false,
          },
          {
            title: "4. アクセス情報・Cookieについて",
            content: "当サイトではGoogle Analytics等の分析ツールを利用しており、アクセス情報を収集することがあります。また、広告経由でのアクセスを管理するため、URLパラメータ（click_idなど）をセッション情報として保持する場合があります。これらの情報は個人を特定するものではありません。",
            isList: false,
          },
          {
            title: "5. 個人情報の安全管理",
            content: "収集した個人情報は適切なセキュリティ対策のもとで管理し、不正アクセス・漏洩・改ざん等の防止に努めます。FC本部への情報提供は、安全な方法（暗号化通信等）で行います。",
            isList: false,
          },
          {
            title: "6. 保存期間",
            content: "個人情報は、利用目的が達成された後または法令上の保存義務期間が終了した後、速やかに削除または匿名化します。",
            isList: false,
          },
          {
            title: "7. 開示・訂正・削除の請求",
            content: "本人から個人情報の開示・訂正・削除を求める場合は、サイト内のお問い合わせフォームよりご連絡ください。本人確認のうえ、合理的な範囲で対応いたします。",
            isList: false,
          },
          {
            title: "8. 未成年者の取扱い",
            content: "当サービスは20歳以上の方を対象としています。未成年の方は保護者の同意を得たうえでご利用ください。",
            isList: false,
          },
          {
            title: "9. ポリシーの変更",
            content: "本ポリシーは、法令変更やサービス変更に伴い更新することがあります。重要な変更は当サイト上でお知らせします。",
            isList: false,
          },
        ].map((section) => (
          <section key={section.title} className="bg-white border border-gray-200 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-2">{section.title}</h2>
            {section.isList ? (
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {(section.content as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-700 leading-relaxed">{section.content as string}</p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-black text-gray-900 mb-2">利用規約</h1>
      <p className="text-sm text-gray-500 mb-8">最終更新日：2026年6月16日　バージョン：1.0</p>

      <div className="prose prose-sm max-w-none space-y-8">
        {[
          {
            title: "第1条（本規約の適用）",
            content: "本規約は、ヒトリビズ（以下「当サイト」）が提供するサービスの利用に関して適用されます。利用者は本規約に同意のうえ、サービスをご利用ください。",
          },
          {
            title: "第2条（サービスの内容）",
            content: "当サイトは、フランチャイズ・独立開業案件の情報を掲載し、利用者がFC本部へ資料請求・問い合わせを行えるポータルサービスです。当サイトはFC本部と利用者の仲介を行うものであり、加盟契約の当事者にはなりません。",
          },
          {
            title: "第3条（個人情報の取扱い）",
            content: "利用者が資料請求時に入力した個人情報は、選択されたFC本部へ提供されます。詳細はプライバシーポリシーをご確認ください。",
          },
          {
            title: "第4条（説明会への参加）",
            content: "資料請求後のFC本部説明会への参加は任意です。説明会への参加を強制する行為は当サイトの方針に反します。ただし、ポイントサイト等からの広告案件においては、説明会への参加が成果条件として設定される場合があります。",
          },
          {
            title: "第5条（掲載情報の正確性）",
            content: "掲載情報はFC本部から提供された情報を元に作成しておりますが、最新情報・正確性を保証するものではありません。投資判断や開業に際しては、必ずFC本部に直接ご確認ください。",
          },
          {
            title: "第6条（禁止事項）",
            content: "以下の行為を禁止します。①虚偽情報による資料請求、②他人の情報を使用した申込み、③システムへの不正アクセス・妨害、④当サイトの情報の無断転載・複製。",
          },
          {
            title: "第7条（免責事項）",
            content: "当サイトは、掲載案件の内容、FC本部との契約・トラブル、開業後の業績について一切の責任を負いません。利用者自身の判断と責任においてご利用ください。",
          },
          {
            title: "第8条（規約の変更）",
            content: "当サイトは、必要に応じて本規約を変更することがあります。変更後の規約はサイト上に掲載された時点で効力を生じます。",
          },
          {
            title: "第9条（準拠法・管轄裁判所）",
            content: "本規約は日本法に準拠し、紛争については東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
          },
        ].map((section) => (
          <section key={section.title} className="bg-white border border-gray-200 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-2">{section.title}</h2>
            <p className="text-sm text-gray-700 leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

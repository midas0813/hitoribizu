import { Metadata } from "next";
import { Suspense } from "react";
import RequestForm from "./RequestForm";

export const metadata: Metadata = {
  title: "無料資料請求",
  description: "フランチャイズ案件の資料を無料でまとめて請求できます。",
};

export default function RequestPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">無料資料請求</h1>
        <p className="text-gray-600 text-sm">
          下記フォームにご入力ください。選択した案件のFC本部から資料をお送りします。
        </p>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6 text-sm text-emerald-800">
        <p className="font-semibold mb-1">ご入力前にご確認ください</p>
        <ul className="space-y-1 text-xs">
          <li>・ご入力いただいた情報は、選択されたフランチャイズ本部へ提供されます</li>
          <li>・資料請求後、FC本部より電話またはメールでご連絡がある場合があります</li>
          <li>・説明会への参加は任意です</li>
        </ul>
      </div>

      <Suspense fallback={<div className="text-center py-10 text-gray-500">読み込み中...</div>}>
        <RequestForm />
      </Suspense>
    </div>
  );
}

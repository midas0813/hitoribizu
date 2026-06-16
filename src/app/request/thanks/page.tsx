import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "資料請求完了",
};

export default function ThanksPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <CheckCircle2 size={64} className="text-emerald-500 mx-auto mb-6" />
      <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
        資料請求が完了しました
      </h1>
      <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
        ご請求ありがとうございます。
        ご選択いただいたフランチャイズ本部より、
        資料またはご連絡が届きます（通常1〜3営業日以内）。
      </p>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-left mb-8 text-sm">
        <h2 className="font-black text-gray-900 mb-3">次のステップ</h2>
        <ol className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">1.</span>
            FC本部からのメール・電話をお待ちください
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">2.</span>
            資料を確認し、気になる点はFC本部へ直接ご質問ください
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">3.</span>
            説明会への参加はあくまで任意です。無理に参加する必要はありません
          </li>
        </ol>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="bg-emerald-600 text-white font-bold px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors"
        >
          トップへ戻る
        </Link>
        <Link
          href="/cases"
          className="border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
        >
          他の案件も見る
        </Link>
      </div>
    </div>
  );
}

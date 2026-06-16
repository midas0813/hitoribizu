import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-white text-xl font-black">
              ヒトリビズ
            </Link>
            <p className="mt-2 text-sm leading-relaxed">
              一人開業・副業・小資本に特化した
              フランチャイズ・案件比較ポータル
            </p>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-3">案件を探す</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/hitori-kaigyo" className="hover:text-white transition-colors">一人開業</Link></li>
              <li><Link href="/category/fukugyo" className="hover:text-white transition-colors">副業</Link></li>
              <li><Link href="/category/dokuritsu" className="hover:text-white transition-colors">独立開業</Link></li>
              <li><Link href="/category/tei-shikkin" className="hover:text-white transition-colors">低資金</Link></li>
              <li><Link href="/category/mu-tenpo" className="hover:text-white transition-colors">無店舗</Link></li>
              <li><Link href="/cases" className="hover:text-white transition-colors">すべての案件</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-3">サービス</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">ヒトリビズとは</Link></li>
              <li><Link href="/request" className="hover:text-white transition-colors">無料資料請求</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-3">法的情報</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-white transition-colors">利用規約</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © 2026 ヒトリビズ. All rights reserved.
          </p>
          <p className="text-xs text-center md:text-right leading-relaxed">
            本サイトは掲載企業の広告を掲載しており、資料請求等を通じて掲載企業へ情報を提供する場合があります。
            <Link href="/privacy" className="underline hover:text-white ml-1">詳しくはプライバシーポリシー</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

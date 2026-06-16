import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import TrackingScript from "@/components/TrackingScript";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ヒトリビズ｜一人開業・副業フランチャイズ比較サイト",
    template: "%s｜ヒトリビズ",
  },
  description:
    "一人開業・副業・小資本で始められるフランチャイズ・独立開業案件を比較できるポータルサイト。低資金・無店舗から始められる案件を多数掲載。無料で資料請求できます。",
  keywords: "一人開業, 副業, フランチャイズ, 独立開業, 低資金開業, 無店舗開業",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ヒトリビズ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} bg-gray-50 text-gray-900 antialiased`}>
        <Suspense fallback={null}>
          <TrackingScript />
        </Suspense>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

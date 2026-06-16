"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black text-emerald-600 tracking-tight">
              ヒトリビズ
            </span>
            <span className="hidden sm:block text-xs text-gray-500 leading-tight">
              一人開業・副業<br />フランチャイズ比較
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/cases" className="text-gray-700 hover:text-emerald-600 transition-colors">
              案件を探す
            </Link>
            <Link href="/category/hitori-kaigyo" className="text-gray-700 hover:text-emerald-600 transition-colors">
              一人開業
            </Link>
            <Link href="/category/fukugyo" className="text-gray-700 hover:text-emerald-600 transition-colors">
              副業
            </Link>
            <Link href="/category/tei-shikkin" className="text-gray-700 hover:text-emerald-600 transition-colors">
              低資金
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">
              サービスについて
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/request"
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors"
            >
              無料資料請求
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600"
            aria-label="メニュー"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            {[
              { href: "/cases", label: "案件を探す" },
              { href: "/category/hitori-kaigyo", label: "一人開業" },
              { href: "/category/fukugyo", label: "副業" },
              { href: "/category/tei-shikkin", label: "低資金" },
              { href: "/category/mu-tenpo", label: "無店舗" },
              { href: "/about", label: "サービスについて" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 px-3">
              <Link
                href="/request"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
              >
                無料資料請求
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";
 
const GITHUB_URL = "#";
const HANDLE_NAME = "your-handle";
 
export const metadata: Metadata = {
  title: "Portfolio Showcase",
  description: "React/Next.js を使用したポートフォリオのまとめサイトです。",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-stone-50 py-16 space-y-8 min-h-screen">
        {/* header */}
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
          <div className="container max-w-6xl mx-auto py-4 flex">
            <Link className="text-xl font-bold text-stone-800" href="/">
              ✨ Portfolio Showcase
            </Link>
          </div>
        </header>
 
        {/* Page Content */}
        {children}
 
        {/* Footer */}
        <footer className="text-center">
          <p className="text-gray-700">
            Created by{" "}
            <Link className="text-emerald-600" href={GITHUB_URL}>
              @{HANDLE_NAME}
            </Link>{" "}
            &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </body>
    </html>
  );
}
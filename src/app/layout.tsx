import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Practice",
  description: "Next.js Practice",
  openGraph: {
    title: "Next.js Practice",
    description: "Next.js Practice",
    url: "https://nextjs-practice.vercel.app",
    siteName: "Next.js Practice",
    images: [
      {
        url: "https://nextjs-practice.vercel.app/ogp.png",
        width: 1200,
        height: 630,
        alt: "Next.js Practice",
      },
    ],
    locale: "jp",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={cn(noto.className, "min-h-dvh flex flex-col")}>
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

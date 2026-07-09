import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lê Khiêm | Chuyên gia Giao diện & Dịch vụ số",
  description: "Trang thông tin cá nhân và portfolio giới thiệu dịch vụ của Lê Khiêm.",
};

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FloatingWidget from "@/components/FloatingWidget/FloatingWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${outfit.variable}`} style={{'--font-sans': 'var(--font-inter)'} as React.CSSProperties}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWidget />
      </body>
    </html>
  );
}

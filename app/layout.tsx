import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/AppLayout";

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
  icons: {
    icon: [
      { url: '/logo.png?v=2', type: 'image/png' },
      { url: '/favicon.ico?v=2' },
    ],
    shortcut: '/logo.png?v=2',
    apple: '/logo.png?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${outfit.variable}`} style={{'--font-sans': 'var(--font-inter)'} as React.CSSProperties}>
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}

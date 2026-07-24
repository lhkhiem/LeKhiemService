"use client";

import { usePathname } from 'next/navigation';
import { ContentProvider } from '@/context/ContentContext';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FloatingWidget from "@/components/FloatingWidget/FloatingWidget";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  return (
    <ContentProvider>
      {!isAdmin && <Header />}
      <main>{children}</main>
      {!isAdmin && <Footer />}
      {!isAdmin && <FloatingWidget />}
    </ContentProvider>
  );
}

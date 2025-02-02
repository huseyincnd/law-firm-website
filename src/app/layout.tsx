import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YILMAZ & YILMAZ | Profesyonel Hukuk Bürosu",
  description: "Deneyimli avukat kadromuz ile hukuki haklarınızı korumak ve en iyi sonucu elde etmek için yanınızdayız.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-[110px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PreLoader from "./components/PreLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SESUAIKAN METADATA UNTUK SEO ZILABS
export const metadata: Metadata = {
  title: "Zilabs | Build • Launch • Grow",
  description: "Partner teknologi terpercaya untuk digitalisasi UMKM dan pengembangan sistem custom. Fokus pada Laravel, React, dan solusi digital high-end.",
  keywords: ["Agensi Digital", "Web Development Indonesia", "Zilabs Academy", "Laravel Developer", "Jasa Website Tangerang"],
  authors: [{ name: "Muhzinur Rizki" }],
  openGraph: {
    title: "Zilabs Technology Agency",
    description: "Solusi Digital Futuristik & Edukasi Teknologi",
    url: "https://zilabs.id", // Ganti dengan domain asli nanti
    siteName: "Zilabs",
    images: [
      {
        url: "/og-image.png", // Pastikan taruh file gambar di folder public
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id" // Ganti ke id untuk SEO Indonesia
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-deep-black text-white antialiased selection:bg-violet-purple/30 selection:text-white">
        <PreLoader />
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}

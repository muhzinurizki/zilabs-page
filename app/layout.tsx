import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zilabs — Build • Launch • Grow",
  description:
    "Zilabs adalah Technology Agency yang membantu bisnis membangun, meluncurkan, dan mengembangkan sistem digital berbasis Laravel & React.",
  keywords: [
    "jasa website",
    "agency web indonesia",
    "laravel developer",
    "react developer",
    "pembuatan website bisnis",
    "digital agency indonesia"
  ],
  authors: [{ name: "Zilabs Studio Team" }],

  openGraph: {
    title: "Zilabs — Build • Launch • Grow",
    description:
      "Bangun sistem digital profesional bersama Zilabs. Fokus pada performa, scalability, dan growth.",
    url: "https://zilabs.id",
    siteName: "Zilabs",
    images: [
      {
        url: "/og-image.png", // nanti bikin ini
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zilabs — Technology Agency",
    description: "Build • Launch • Grow bersama Zilabs.",
    images: ["/og-image.png"],
  },

  metadataBase: new URL("https://zilabs.id"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#FAFAFA] text-dark-navy antialiased selection:bg-neon-purple/10 selection:text-neon-purple">

        {/* GLOBAL AMBIENT BACKGROUND */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-neon-purple/10 blur-[160px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-electric-blue/10 blur-[140px] rounded-full" />
        </div>

        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>

      </body>
    </html>
  );
}

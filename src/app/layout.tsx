import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import IntelligentChatbot from "../components/IntelligentChatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Xhenvolt Uganda | Leading Technology Solutions Provider",
  description:
    "Transform your business with Xhenvolt Uganda's cutting-edge technology solutions. We deliver custom software, mobile apps, POS systems, and enterprise solutions that drive innovation and growth across Africa.",
  keywords: "technology solutions Uganda, custom software development, mobile apps, POS systems, enterprise solutions, digital transformation Africa",
  authors: [{ name: "Xhenvolt Uganda" }],
  creator: "Xhenvolt Uganda",
  openGraph: {
    title: "Xhenvolt Uganda | Leading Technology Solutions Provider",
    description: "Transform your business with cutting-edge technology solutions",
    type: "website",
    locale: "en_US",
    siteName: "Xhenvolt Uganda",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xhenvolt Uganda | Leading Technology Solutions Provider",
    description: "Transform your business with cutting-edge technology solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2545805112727180" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2545805112727180"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300`}>
        <div className="min-h-screen relative overflow-x-hidden">
          {/* Animated background elements */}
          <div className="fixed inset-0 opacity-20 dark:opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="relative z-10">
            {children}
          </div>
          <IntelligentChatbot />
        </div>
      </body>
    </html>
  );
}

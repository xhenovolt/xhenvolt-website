import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Chatbot from "../components/Chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Al Hanan Education Centre | Premium Muslim School in Uganda",
  description:
    "Al Hanan Education Centre offers premium Islamic education combining Qur'anic memorization (Hifdh) with rigorous academics in Iganga, Uganda. Founded 2019 by Ummul Qura Foundation, registered with Ministry of Education.",
  keywords: "Islamic school Uganda, Qur'an memorization, Hifdh school, primary education, Muslim school Iganga, Al Hanan Education Centre",
  authors: [{ name: "Al Hanan Education Centre" }],
  creator: "Al Hanan Education Centre",
  metadataBase: new URL("https://alhanan.ug"),
  canonical: "https://alhanan.ug",
  openGraph: {
    title: "Al Hanan Education Centre | Premium Muslim School",
    description: "Shaping minds, nurturing faith, building the future",
    type: "website",
    locale: "en_US",
    siteName: "Al Hanan Education Centre",
    url: "https://alhanan.ug",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Hanan Education Centre | Premium Muslim School",
    description: "Shaping minds, nurturing faith, building the future",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": "-1",
      "max-video-preview": "-1",
    },
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
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="relative z-10">
            {children}
          </div>
          <Chatbot />
        </div>
      </body>
    </html>
  );
}

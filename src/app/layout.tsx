import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactList from "@/components/ui/ContactList";
import { Locale, NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";
import { isLocale } from "@/lib/utils";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://portfolio-laslark1991.vercel.app/";
const SITE_NAME = "盧亨来(노형래) Portfolio";
const SITE_TITLE = "盧亨来 | フロントエンドエンジニア Portfolio";
const SITE_DESCRIPTION =
  "Next.js・React・TypeScriptを中心に開発するフロントエンドエンジニア盧亨来(노형래)のポートフォリオです。UI/UXデザイン、リファクタリング、フルスタックへの領域拡張に関心があります。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s | 盧亨来" },
  description: SITE_DESCRIPTION,
  keywords: [
    "盧亨来",
    "노형래",
    "フロントエンドエンジニア",
    "프론트엔드 개발자",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "盧亨来(노형래)" }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ja_JP",
    alternateLocale: ["ko_KR", "en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const store = await cookies()
  const cookieLocale = store.get('locale')?.value
  const locale: Locale = cookieLocale && isLocale(cookieLocale) ? cookieLocale : 'ko'

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NextIntlClientProvider>
          <main className=" bg-indigo-950 text-white">{children}</main>
        </NextIntlClientProvider>
        <ContactList />
      </body>
    </html>
  );
}

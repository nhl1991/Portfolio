import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_KR, Noto_Sans_JP, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Locale, NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";
import { isLocale } from "@/lib/utils";


const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const notoKR = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
});

const notoJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500"],
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
        className={`${jakarta.variable} ${notoKR.variable} ${notoJP.variable} ${plexMono.variable} antialiased bg-background text-foreground`}
      >
        <NextIntlClientProvider>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

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

export const metadata: Metadata = {
  title: { default: 'Portfolio', template: '%s | laslark1991' },
  description: "Portfolio",

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

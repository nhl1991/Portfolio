import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactList from "@/components/ui/ContactList";
import { notFound } from 'next/navigation';
import i18nConfig from "../../../i18nConfig";
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

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
   params: { locale: string }
}>) {
  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <main className="w-screen min-h-screen flex items-center justify-center flex-col bg-indigo-950 text-white">{children}</main>
        <ContactList />
      </body>
    </html>
  );
}

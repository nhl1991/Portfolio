import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactList from "@/components/ui/ContactList";
import { NextIntlClientProvider } from "next-intl";
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


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NextIntlClientProvider>
          <main className="w-screen min-h-screen flex items-center justify-center flex-col bg-indigo-950 text-white">{children}</main>
        </NextIntlClientProvider>
        <ContactList />
      </body>
    </html>
  );
}

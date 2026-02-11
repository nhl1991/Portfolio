import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactList from "@/components/Outro/ui/ContactList";
import Link from "next/link";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
      >
        <main className="w-screen min-h-screen ">{children}</main>
        <ContactList />
        <footer className="">
          <Link href={'https://github.com/nhl1991?tab=repositories'}>More information</Link>
        </footer>
      </body>
    </html>
  );
}

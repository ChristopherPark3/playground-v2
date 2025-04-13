import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AllProviders from "@/components/Providers/AllProviders";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Playground v2",
  description: "For the people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AllProviders>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen`}
        >
          <main className="flex-1">{children}</main>
        </body>
      </html>
    </AllProviders>
  );
}

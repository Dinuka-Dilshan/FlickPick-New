import AppBar from "@/components/app-bar";
import Footer from "@/components/footer/footer";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const appFont = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlickPick",
  description: "Pick your next movie or TV show to watch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${appFont.variable} antialiased`}>
        <NextTopLoader color="#9333ea" showSpinner={false} />
        <AppBar />
        <main className="container mx-auto px-4"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}

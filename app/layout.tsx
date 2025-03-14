import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/footer";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Denteex | Collabrate for Million Smiles",
  description: "Grow your business with Denteex, a collabrate for million smiles.",
  openGraph: {
    images: [
      {
        url: '/_next/image?url=%2Flogo%2Fdenteex-logo.png&w=2048&q=75',
        width: 1200,
        height: 630,
        alt: 'Bird Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={font.className}>
      <Header/>
        {children}
        <Footer/>
        <Analytics />

      </body>
    </html>
  );
}

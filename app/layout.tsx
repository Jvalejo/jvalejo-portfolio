import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeison Valejo // VP of Product Design",
  description: "Executive leadership at the intersection of Strategy, AI, and Empathic Design. Architecting the future for the next generation.",
  keywords: ["Product Design", "VP Design", "Strategy", "AI", "Empathic Design", "Leadership", "UX", "Design Strategy"],
  authors: [{ name: "Jeison Valejo" }],
  creator: "Jeison Valejo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jvalejo-portfolio.vercel.app",
    title: "Jeison Valejo // VP of Product Design",
    description: "Executive leadership at the intersection of Strategy, AI, and Empathic Design. Architecting the future for the next generation.",
    siteName: "Jeison Valejo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeison Valejo // VP of Product Design",
    description: "Executive leadership at the intersection of Strategy, AI, and Empathic Design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
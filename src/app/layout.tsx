import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tahseen | AI & Software Engineer",
  description: "Portfolio of Tahseen Rasheed Chowdhury - Software Engineer focused on scalable backend systems, AI applications, and product engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans min-h-screen bg-(--background) text-(--foreground) selection:bg-(--foreground) selection:text-(--background)">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

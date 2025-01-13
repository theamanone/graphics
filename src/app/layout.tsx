import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import siteConfig from "@/config/site.config";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="description" content="Your description here" />
        <meta name="keywords" content="MehtaGraphics, logo, design" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Your description here" />
        <meta property="og:url" content="https://mehtagraphics.netlify.app" />
        <meta property="og:image:alt" content="Your image alt text" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        geist.variable
      )}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

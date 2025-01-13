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

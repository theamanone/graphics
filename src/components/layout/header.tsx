import Link from "next/link";
import { cn } from "@/lib/utils";
import siteConfig from "@/config/site.config";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-600">
              {siteConfig.name}
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium text-gray-700",
                    "hover:text-blue-600 hover:bg-blue-50/50 transition-colors",
                    "focus:outline-none focus:text-blue-600 focus:bg-blue-50/50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className={cn(
                "inline-flex items-center px-4 py-2 border border-transparent",
                "text-sm font-medium rounded-md text-white bg-blue-600",
                "hover:bg-blue-700 transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              )}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

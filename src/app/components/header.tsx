import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between items-center h-16">
        <div>
          <Button asChild variant="secondary" className="font-bold">
            <Link href={"/"}>Next.js Practice</Link>
          </Button>
        </div>
        <ul className="flex gap-3">
          {[
            { label: "About", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <li key={item.label}>
              <Button asChild variant="ghost" size="sm">
                <Link href={item.href}>{item.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;

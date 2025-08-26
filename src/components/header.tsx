import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  CC
                </span>
              </div>
              <span className="font-bold text-xl">Code & Content Studio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/services/website-building"
              className="text-foreground hover:text-primary transition-colors"
            >
              Website Building
            </Link>
            <Link
              to="/services/blog-writing"
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog Writing
            </Link>
            <Link
              to="/services/promotional-content"
              className="text-foreground hover:text-primary transition-colors"
            >
              Promotional Content
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Button asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/services/website-building"
              className="block text-foreground hover:text-primary transition-colors"
            >
              Website Building
            </Link>
            <Link
              to="/services/blog-writing"
              className="block text-foreground hover:text-primary transition-colors"
            >
              Blog Writing
            </Link>
            <Link
              to="/services/promotional-content"
              className="block text-foreground hover:text-primary transition-colors"
            >
              Promotional Content
            </Link>
            <Link
              to="/contact"
              className="block text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

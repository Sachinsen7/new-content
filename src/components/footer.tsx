import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  CC
                </span>
              </div>
              <span className="font-bold text-lg">Code & Content Studio</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transforming ideas into digital excellence through expert web
              development and compelling content creation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services/website-building"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Website Building
                </Link>
              </li>
              <li>
                <Link
                  to="/services/blog-writing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog Writing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/promotional-content"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Promotional Content
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@codecontentstudio.com</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Code & Content Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

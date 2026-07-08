import { useCallback, useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { profile } from "../../data/profile";
import Container from "../Container";
import MobileMenu from "./MobileMenu";
import NavigationItem from "./NavigationItem";
import { navLinks } from "./navLinks";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, []);

  const handleNavigate = useCallback((href: string) => {
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <header
        data-scrolled={isScrolled}
        className="fixed top-0 right-0 left-0 z-50 transition-all duration-300 data-[scrolled=true]:bg-background/80 data-[scrolled=true]:backdrop-blur-md"
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate("#inicio");
              }}
              className="text-lg font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {profile.name}
            </a>

            <nav
              role="navigation"
              aria-label="Navegación principal"
              className="hidden items-center gap-1 md:flex"
            >
              {navLinks.map((link) => (
                <NavigationItem
                  key={link.href}
                  label={link.label}
                  href={link.href}
                  isActive={activeSection === link.href.slice(1)}
                  onClick={() => handleNavigate(link.href)}
                />
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menú de navegación"
              className="rounded-lg p-2 text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
            >
              <Menu size={24} aria-hidden={true} />
            </button>
          </div>
        </Container>
      </header>

      <div className="h-16" />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        links={navLinks}
        activeSection={activeSection}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={handleNavigate}
      />
    </>
  );
}

export default Navbar;

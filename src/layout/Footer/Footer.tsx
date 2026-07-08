import { memo } from "react";
import { ExternalLink } from "lucide-react";

import type { Social } from "../../data/social";
import { socialLinks } from "../../data/social";
import { profile } from "../../data/profile";
import Container from "../Container";

const Footer = memo(function Footer() {
  const quickLinks: Social[] = socialLinks.filter(
    (link) => link.platform === "GitHub" || link.platform === "LinkedIn",
  );

  return (
    <footer aria-label="Pie de página" className="border-t border-slate-800">
      <Container>
        <div className="flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {profile.name}. Todos los derechos
            reservados.
          </p>

          {quickLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {link.label}
                  <ExternalLink size={12} aria-hidden={true} />
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
});

export default Footer;

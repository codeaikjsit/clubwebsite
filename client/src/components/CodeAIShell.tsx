/* Blue Violet Signal: shared frame for every route; keep navigation, logo, particles, and footer consistent across the multi-page site. */
import { useEffect, useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { codeaiImages, siteContent } from "@/lib/codeai-content";
import { InstagramCustomIcon, LinkedInCustomIcon } from "./CustomSocialIcons";

const particlePositions = [
  [6, 16],
  [18, 38],
  [32, 11],
  [47, 27],
  [63, 12],
  [79, 33],
  [93, 19],
  [12, 74],
  [28, 60],
  [44, 83],
  [60, 67],
  [76, 86],
  [89, 70],
  [97, 53],
  [4, 48],
  [53, 47],
  [70, 51],
  [36, 46],
];

function SignalParticles() {
  return (
    <div className="particle-field" aria-hidden="true">
      {particlePositions.map(([left, top], index) => (
        <span
          key={`${left}-${top}`}
          className={`particle particle-${index % 4}`}
          style={{ left: `${left}%`, top: `${top}%` }}
        />
      ))}
      <div className="particle-cross cross-one" />
      <div className="particle-cross cross-two" />
      <div className="ambient-orb" />
    </div>
  );
}

export default function CodeAIShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    const onPointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div className="dark-shell">
      <SignalParticles />
      <div className="grid-overlay" aria-hidden="true" />
      <header
        className={`dark-header ${scrolled ? "dark-header-scrolled" : ""}`}
      >
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            className="dark-brand flex items-center"
            href="/"
            aria-label="CodeAI home"
            onClick={() => setOpen(false)}
          >
            <img
              src={codeaiImages.mark}
              alt="CodeAI"
              className="dark-brand-logo h-7 md:h-8 w-auto object-contain"
            />
          </Link>
          <a
            href="https://kjsit.somaiya.edu.in/"
            target="_blank"
            rel="noreferrer"
            aria-label="K J Somaiya Institute of Technology"
            className="flex items-center transition-opacity hover:opacity-85"
          >
            <img
              src={codeaiImages.somaiyaLogo}
              alt="K J Somaiya Institute of Technology"
              className="h-10 md:h-12 w-auto object-contain shrink-0"
            />
          </a>
        </div>
        <nav
          className={`dark-nav ${open ? "dark-nav-open" : ""}`}
          aria-label="Primary navigation"
        >
          {siteContent.nav.map(item => (
            <Link
              key={item.href}
              className={location === item.href ? "nav-current" : ""}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              <span>{item.number}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="header-join"
          href={siteContent.cta.formUrl}
          target="_blank"
          rel="noreferrer"
        >
          JOIN US <span>↗</span>
        </a>
        <button
          className="mobile-menu-button dark-menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(value => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>
      <main>{children}</main>
      <footer className="dark-footer">
        <div className="footer-main-dark">
          <Link className="dark-brand" href="/" aria-label="CodeAI home">
            <img
              src={codeaiImages.mark}
              alt="CodeAI"
              className="dark-brand-logo h-8 w-auto object-contain"
            />
          </Link>
          <p>
            {siteContent.brand.institute}
            <br />
            {siteContent.brand.location}
          </p>
          <div className="footer-links-dark flex items-center gap-4">
            <a
              href={siteContent.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="CodeAI GitHub"
              className="text-[#a7b5b0] hover:text-[#c8ff49] transition-colors p-1"
            >
              <Github size={20} />
            </a>
            <a
              href={siteContent.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="CodeAI LinkedIn"
              className="text-[#a7b5b0] hover:text-[#c8ff49] transition-colors p-1"
            >
              <LinkedInCustomIcon size={20} />
            </a>
            <a
              href={siteContent.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="CodeAI Instagram"
              className="text-[#a7b5b0] hover:text-[#c8ff49] transition-colors p-1"
            >
              <InstagramCustomIcon size={20} />
            </a>
          </div>
        </div>
        <div className="footer-bottom-dark">
          <span>© 2026 CodeAI student club</span>
          <span>
            {siteContent.brand.department} · KJSIT{" "}
            <b className="footer-pulse">●</b>
          </span>
        </div>
      </footer>
    </div>
  );
}

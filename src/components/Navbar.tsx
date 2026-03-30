import { useState, useEffect } from "react";

// Final site version with updated contact info and localization
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#accueil", label: "Accueil" },
    { href: "#menu", label: "Menu" },
    { href: "#galerie", label: "Galerie" },
    { href: "#avis", label: "Avis" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-shadow duration-300 ${scrolled ? "shadow-md py-2" : "py-4"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#accueil" className="font-display font-bold text-primary text-xl md:text-2xl flex items-center gap-2">
          Chez Hoovi Bouffe
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-body font-medium text-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: '#f60615' }}>
            Service traiteur
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden text-foreground text-2xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="font-body font-medium text-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white px-5 py-3 rounded-lg font-semibold text-center" style={{ backgroundColor: '#f60615' }}>
              Service traiteur
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

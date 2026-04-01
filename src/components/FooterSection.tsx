const FooterSection = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-primary text-2xl mb-3">Chez Hoovi Bouffe</h3>
            <p className="text-footer-foreground/70 text-sm">
              Deux continents, une passion : la gastronomie.
            </p>
          </div>

          <div>
            <h4 className="font-body font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Accueil", "Menu", "Galerie", "Avis", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-footer-foreground/70 hover:text-primary transition-colors text-sm">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-lg mb-4">Horaires</h4>
            <p className="text-footer-foreground/70 text-sm">Lun-Sam : 11h - 23h</p>
            <p className="text-footer-foreground/70 text-sm">Dim : 12h - 21h</p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-footer-foreground/70 hover:text-primary transition-colors text-lg">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="text-footer-foreground/70 hover:text-primary transition-colors text-lg">
                <i className="fab fa-tiktok" />
              </a>
              <a href="#" className="text-footer-foreground/70 hover:text-primary transition-colors text-lg">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-footer-foreground/10 mt-10 pt-6 text-center">
          <p className="text-footer-foreground/50 text-sm">
            © 2026 Chez Hoovi Bouffe. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

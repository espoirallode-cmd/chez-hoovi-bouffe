const LocationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-body font-bold text-3xl md:text-4xl text-center mb-2">
          <i className="fas fa-map-marker-alt text-accent mr-3" />Nous <span className="text-primary">Trouver</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">Cotonou/Womey</p>

        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Localisation Chez Hoovi Bouffe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126881.87116360702!2d2.2990762026044065!3d6.386455549372744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103cab0051da1811%3A0x963b8c088f131ba5!2sWomey!5e0!3m2!1sfr!2sbj!4v1774790429530!5m2!1sfr!2sbj"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

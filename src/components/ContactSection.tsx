import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nom: "", prenom: "", telephone: "", date: "", heure: "", personnes: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.nom.trim()) e.nom = "Ce champ est obligatoire";
    if (!formData.prenom.trim()) e.prenom = "Ce champ est obligatoire";
    if (!formData.telephone.trim()) e.telephone = "Ce champ est obligatoire";
    if (!formData.date) e.date = "Ce champ est obligatoire";
    if (!formData.heure) e.heure = "Ce champ est obligatoire";
    if (!formData.personnes.trim()) e.personnes = "Ce champ est obligatoire";
    if (!formData.message.trim()) e.message = "Ce champ est obligatoire";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const WHATSAPP_NUMBER = "2290197900821";
      const message = `🍽️ *Demande de devis — Service Traiteur*
*Chez Hoovi Bouffe*
──────────────────────
👤 Nom : ${formData.nom}
👤 Prénom : ${formData.prenom}
📱 Téléphone : ${formData.telephone}
📅 Date souhaitée : ${formData.date}
🕐 Heure : ${formData.heure}
👥 Nombre de personnes : ${formData.personnes}
──────────────────────
📋 Commande / Détails :
${formData.message}
──────────────────────
⏳ En attente de votre devis.`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all";

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-body font-bold text-3xl md:text-4xl text-center mb-2">
          Réservation & <span className="text-accent">Contact</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">Réservez votre table ou contactez-nous</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input placeholder="Nom" className={inputClass} value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })} />
                {errors.nom && <p className="text-[#f60615] text-xs mt-1">{errors.nom}</p>}
              </div>
              <div>
                <input placeholder="Prénom" className={inputClass} value={formData.prenom} onChange={(e) => setFormData({ ...formData, prenom: e.target.value })} />
                {errors.prenom && <p className="text-[#f60615] text-xs mt-1">{errors.prenom}</p>}
              </div>
            </div>
            
            <div>
              <input placeholder="Téléphone" type="tel" className={inputClass} value={formData.telephone} onChange={(e) => setFormData({ ...formData, telephone: e.target.value })} />
              {errors.telephone && <p className="text-[#f60615] text-xs mt-1">{errors.telephone}</p>}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <input type="date" className={inputClass} value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                {errors.date && <p className="text-[#f60615] text-xs mt-1">{errors.date}</p>}
              </div>
              <div>
                <input type="time" className={inputClass} value={formData.heure} onChange={(e) => setFormData({ ...formData, heure: e.target.value })} />
                {errors.heure && <p className="text-[#f60615] text-xs mt-1">{errors.heure}</p>}
              </div>
              <div>
                <input type="number" min="1" placeholder="Nb de personnes" className={inputClass} value={formData.personnes} onChange={(e) => setFormData({ ...formData, personnes: e.target.value })} />
                {errors.personnes && <p className="text-[#f60615] text-xs mt-1">{errors.personnes}</p>}
              </div>
            </div>
            
            <div>
              <textarea 
                placeholder="Décrivez votre commande traiteur..." 
                className={inputClass} 
                style={{ resize: 'none', overflowY: 'auto', height: '120px' }}
                value={formData.message} 
                onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
              />
              {errors.message && <p className="text-[#f60615] text-xs mt-1">{errors.message}</p>}
            </div>

            <button 
              type="submit" 
              className="w-full text-white py-3.5 px-6 rounded-lg font-bold text-[13px] md:text-lg hover:opacity-95 transition-all shadow-lg shadow-red-500/20 whitespace-nowrap" 
              style={{ backgroundColor: '#f60615' }}
            >
              Demander un devis de service traiteur
            </button>
          </form>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <i className="fas fa-phone text-primary" />
              </div>
              <div>
                <h4 className="font-body font-semibold">Téléphone</h4>
                <p className="text-muted-foreground">+229 01 97 90 08 21</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <i className="fas fa-envelope text-primary" />
              </div>
              <div>
                <h4 className="font-body font-semibold">Email</h4>
                <p className="text-muted-foreground">contact@hoovibouffe.fr</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <i className="fas fa-map-marker-alt text-primary" />
              </div>
              <div>
                <h4 className="font-body font-semibold">Adresse</h4>
                <p className="text-muted-foreground">Cotonou/Womey</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <i className="fas fa-clock text-primary" />
              </div>
              <div>
                <h4 className="font-body font-semibold">Horaires</h4>
                <p className="text-muted-foreground">Lun-Sam : 11h - 23h</p>
                <p className="text-muted-foreground">Dim : 12h - 21h</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition shadow-md">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition shadow-md">
                <i className="fab fa-tiktok" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition shadow-md">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

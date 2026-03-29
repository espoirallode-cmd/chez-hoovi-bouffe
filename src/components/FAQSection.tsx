import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    q: "Quels sont vos moyens de paiement ?",
    r: "Nous acceptons les paiements via MTN Mobile Money et MOOV Money. Après avoir passé votre commande sur WhatsApp, notre équipe vous communiquera le numéro de dépôt pour finaliser votre paiement."
  },
  {
    q: "Livrez-vous à domicile ?",
    r: "Oui, nous assurons la livraison à domicile et les frais sont à la charge du client. Lors de votre commande, précisez simplement votre lieu de livraison et nous vous contacterons pour confirmer les détails."
  },
  {
    q: "Comment passer une commande ?",
    r: "C'est très simple ! Choisissez votre plat dans notre menu, cliquez sur 'Commander', remplissez le formulaire avec vos informations et envoyez votre commande directement sur notre WhatsApp. Notre équipe vous répondra rapidement."
  },
  {
    q: "Quels sont vos horaires d'ouverture ?",
    r: "Nous sommes ouverts du Lundi au Samedi de 11h à 23h et le Dimanche de 12h à 21h. Vous pouvez commander en ligne à tout moment via notre site."
  }
];

const FAQItem = ({ q, r, isOpen, onClick }: { q: string, r: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div 
      className="bg-white rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] px-6 py-5 mb-3 transition-all duration-300"
    >
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h3 className="font-body text-[15px] font-medium text-black pr-4">{q}</h3>
        <button 
          className={`w-9 h-9 min-w-[36px] rounded-full flex items-center justify-center text-2xl transition-all duration-300 border-none cursor-pointer ${
            isOpen ? "bg-white text-[#f60615]" : "bg-[#249824] text-white"
          }`}
        >
          {isOpen ? "×" : "+"}
        </button>
      </div>

      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-3 mt-3 border-t border-[#f0f0f0]">
          <p className="font-body text-[14px] text-[#666666] leading-[1.7]">
            {r}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) {
          e.target.classList.add("visible");
        }
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".animate-in-view").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-[700px]">
        <h2 className="animate-in-view font-body font-bold text-3xl md:text-3xl lg:text-[32px] text-center mb-2">
          Questions <span className="text-[#f60615]">Fréquentes</span>
        </h2>
        <p className="animate-in-view text-center text-[#888888] font-body text-sm mb-12">Tout ce que vous devez savoir</p>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="animate-in-view" style={{ transitionDelay: `${i * 0.1}s` }}>
              <FAQItem 
                q={faq.q} 
                r={faq.r} 
                isOpen={activeIndex === i} 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

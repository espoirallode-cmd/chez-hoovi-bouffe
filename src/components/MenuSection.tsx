import { useState, useEffect, useRef } from "react";

import menuCoqAuVin from "@/assets/menu-coq-au-vin.jpg";
import menuCarbonara from "@/assets/menu-carbonara.jpg";
import menuSalmon from "@/assets/menu-salmon.jpg";
import menuBourguignon from "@/assets/menu-bourguignon.jpg";
import menuDuck from "@/assets/menu-duck.jpg";
import menuRatatouille from "@/assets/menu-ratatouille.jpg";
import menuJollof from "@/assets/menu-jollof.jpg";
import menuThieboudienne from "@/assets/menu-thieboudienne.jpg";
import menuMafe from "@/assets/menu-mafe.jpg";
import menuYassa from "@/assets/menu-yassa.jpg";
import menuNdole from "@/assets/menu-ndole.jpg";
import menuAttieke from "@/assets/menu-attieke.jpg";
import menuGarba from "@/assets/menu-garba.png";
import menuPouletDG from "@/assets/menu-poulet-dg.png";
import menuTarteTatin from "@/assets/menu-tarte-tatin.png";
import menuPateRouge from "@/assets/menu-pate-rouge.jpg";
import menuRizGras from "@/assets/menu-riz-gras.jpg";
import menuPironRouge from "@/assets/menu-piron-rouge.jpg";
import menuAvocatLaitues from "@/assets/menu-avocat-laitues.jpg";
import menuCoquillettes from "@/assets/menu-coquillettes-v2.jpg";
import menuSaladeComposee from "@/assets/menu-salade-composee.jpg";
import menuBomiworPoulet from "@/assets/menu-bomiwor-poulet.jpg";
import menuMonyoPoisson from "@/assets/menu-monyo-poisson.jpg";
import menuAsrokun from "@/assets/menu-asrokun.jpg";
import menuGombo from "@/assets/menu-gombo.jpg";
import menuSauceLegume from "@/assets/menu-sauce-legume.jpg";
import menuCrincrin from "@/assets/menu-crincrin.jpg";
import menuCassoulet from "@/assets/menu-cassoulet.jpg";
import menuFritesAlloco from "@/assets/menu-frites-alloco.jpg";
import menuMoutonPiron from "@/assets/menu-mouton-piron.jpg";
import OrderModal from "./OrderModal";

type Category = "all" | "european" | "african";

const dishes: { name: string; desc: string; price: number | string; cat: Category; img: string }[] = [
  { name: "Pâte rouge + croupion", desc: "Pâte de maïs à la tomate servie avec croupion de dinde frit, piment et oignons", price: 3.0534, cat: "african", img: menuPateRouge },
  { name: "Riz gras", desc: "Riz savoureux cuit dans une sauce tomate avec viande et légumes", price: 3.8168, cat: "african", img: menuRizGras },
  { name: "Piron rouge + croupion aileron", desc: "Gari à la tomate servi avec dinde croustillante, piment vert et crudités", price: 3.0534, cat: "african", img: menuPironRouge },
  { name: "Avocat au laitues", desc: "Mélange frais d'avocat, laitue, oignons et thon dans son emballage", price: 3.8168, cat: "african", img: menuAvocatLaitues },
  { name: "Coquillettes", desc: "Pâtes coquillettes gourmandes servies avec œufs, légumes frais et thon", price: "2 500 / 3 000", cat: "african", img: menuCoquillettes },
  { name: "Salade composée", desc: "Bol croquant de légumes frais, thon, œufs durs et vinaigrette maison", price: "1 500 / 2 000", cat: "african", img: menuSaladeComposee },
  { name: "Bomiwor poulet", desc: "Mets traditionnel riche et onctueux accompagné de poulet braisé et piment", price: 7.9389, cat: "african", img: menuBomiworPoulet },
  { name: "Monyo + Poisson fumé + pâte de maïs", desc: "Poisson fumé avec sa sauce monyo et boule de pâte de maïs traditionnelle", price: "2 500 / 3 000", cat: "african", img: menuMonyoPoisson },
  { name: "Asrokun + pâte noir/pâte blanche", desc: "Sauce Asrokun savoureuse servie avec votre choix de pâte noire ou blanche", price: "3 000 / 5 000 / 7 000", cat: "african", img: menuAsrokun },
  { name: "Sauce gombo", desc: "Sauce gombo onctueuse préparée avec des crevettes fraîches et de la viande", price: "2 500 / 3 000", cat: "african", img: menuGombo },
  { name: "Sauce au légume", desc: "Sauce aux légumes de saison façon traditionnelle, riche en saveurs et nutriments", price: "3 000 / 5 000 / 7 000", cat: "african", img: menuSauceLegume },
  { name: "Sauce crincrin", desc: "Sauce crincrin gluante traditionnelle, savoureuse et riche en herbes locales", price: "2 500 / 3 000", cat: "african", img: menuCrincrin },
  { name: "Cassoulet", desc: "Ragoût traditionnel français de haricots blancs longuement mijoté avec des viandes savoureuses", price: "2 500 / 3 200", cat: "european", img: menuCassoulet },
  { name: "Frittes + alloco + viande", desc: "Assiette gourmande combinant frites croustillantes, bananes plantains frites (alloco) et viande savoureuse", price: "2 500 / 3 000", cat: "african", img: menuFritesAlloco },
  { name: "Viande de mouton + Piron/Riz/Akassa", desc: "Délicieuse viande de mouton assaisonnée servie avec votre accompagnement préféré (Piron, Riz ou Akassa)", price: "1 500 / 2 000", cat: "african", img: menuMoutonPiron },
];

const tabs: { label: string; value: Category }[] = [
  { label: "Tous", value: "all" },
  { label: "Cuisine Européenne", value: "european" },
  { label: "Cuisine Africaine", value: "african" },
];

const MenuSection = () => {
  const [filter, setFilter] = useState<Category>("all");
  const [selectedDish, setSelectedDish] = useState<typeof dishes[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-in-view").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filter]);

  const handleOrderClick = (dish: typeof dishes[0]) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const filtered = filter === "all" ? dishes : dishes.filter((d) => d.cat === filter);

  return (
    <section id="menu" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="font-body font-bold text-3xl md:text-4xl text-center mb-2">
          Notre <span className="text-accent">Menu</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">Découvrez nos plats préparés avec passion</p>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.value}
              onClick={() => setFilter(t.value)}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                filter === t.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((d, i) => (
            <div key={d.name} className="animate-in-view menu-card-hover bg-card rounded-xl overflow-hidden shadow-md" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="overflow-hidden h-52">
                <img src={d.img} alt={d.name} className="menu-img w-full h-full object-cover" loading="lazy" width={640} height={512} />
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 bg-primary/10 text-primary">
                  {d.cat === "european" ? "Européen" : "Africain"}
                </span>
                <h3 className="font-body font-bold text-[13px] md:text-lg text-foreground truncate">{d.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{d.desc}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <p className="text-accent font-bold text-[11px] md:text-lg whitespace-nowrap mr-2">
                    {typeof d.price === 'string' 
                      ? d.price 
                      : Math.round(d.price * 655).toLocaleString('fr-FR').replace(/\s/g, ' ')} FCFA
                  </p>
                  <button 
                    onClick={() => handleOrderClick(d)}
                    className="bg-[#f60615] text-white border-none rounded-[20px] px-[18px] py-[8px] font-[Montserrat] text-[13px] font-semibold cursor-pointer hover:bg-[#c0000f] transition-colors duration-300"
                  >
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        dish={selectedDish} 
      />
    </section>
  );
};

export default MenuSection;

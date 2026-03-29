import { useEffect, useRef } from "react";

const testimonials = [
  { 
    name: "Sèlomè Ahounou", 
    role: "Gastronome passionnée", 
    text: "Les saveurs africaines de Chez Hoovi Bouffe me rappellent la maison. Un vrai régal à chaque visite !",
    stars: 0
  },
  { 
    name: "Bio Gounou", 
    role: "Entrepreneur local", 
    text: "Le meilleur endroit pour manger européen et africain dans la même assiette. Service rapide et personnel très accueillant.",
    stars: 1,
    isFeatured: true
  },
  { 
    name: "Mèdétadji Dansou", 
    role: "Guide touristique", 
    text: "Découverte incroyable ! Les plats européens revisités avec une touche africaine sont absolument délicieux.",
    stars: 0
  },
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) e.target.classList.add("visible"); 
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-in-view").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="avis" className="py-24 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="font-body font-bold text-3xl md:text-4xl text-center mb-2">
          Avis <span className="text-accent">Clients</span>
        </h2>
        <p className="text-center text-muted-foreground mb-24">Ce que nos clients disent de nous</p>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-20 lg:gap-16 max-w-6xl mx-auto px-4">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="animate-in-view relative w-full lg:w-1/3"
              style={{ transitionDelay: `${(i + 1) * 0.1}s`, position: 'relative' }}
            >
              {/* Single Back Shape (Green for 1/3, Red for 2) */}
              <div 
                className={`absolute w-[102%] h-[102%] top-[-1%] left-[-1%] rounded-[32px] opacity-100 shadow-lg transform ${i === 1 ? 'rotate-[-3deg]' : 'rotate-[3deg]'}`}
                style={{ backgroundColor: i === 1 ? "#f60615" : "#249824", zIndex: 0 }}
              />

              {/* Main Card */}
              <div className="bg-white rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] p-10 pt-16 pb-12 relative z-10 w-full h-full flex flex-col items-center text-center">
                {/* Content */}
                <h3 className="font-body font-bold text-[24px] text-black mb-1">{t.name}</h3>
                <p className="font-body italic text-[16px] mb-8 font-medium" style={{ color: "#249824" }}>{t.role}</p>
                
                <p className="font-body text-[15px] leading-[1.8] text-gray-500 max-w-[240px]">
                  "{t.text}"
                </p>

                {/* Stars for 1st and 3rd card */}
                {(i === 0 || i === 2) && (
                  <div className="flex justify-center gap-1 mt-6">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <i key={j} className="fas fa-star text-[16px]" style={{ color: "#f60615" }} />
                    ))}
                  </div>
                )}

                {/* Star at bottom-center (Middle Card only) */}
                {i === 1 && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                    <i className="fas fa-star text-[20px]" style={{ color: "#f60615" }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { useState, useEffect, useCallback } from "react";
import gallery1 from "@/assets/gallery-new-1.jpg";
import gallery2 from "@/assets/gallery-new-2.jpg";
import gallery3 from "@/assets/gallery-new-3.jpg";
import gallery4 from "@/assets/gallery-new-4.jpg";
import gallery5 from "@/assets/gallery-new-5.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const GallerySection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="galerie" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-body font-bold text-3xl md:text-4xl text-center mb-2">
          <i className="fas fa-images text-primary mr-3" />Notre <span className="text-accent">Galerie</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">Un aperçu de notre univers</p>

        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden">
          <div className="aspect-video relative">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Galerie ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
                width={800}
                height={600}
              />
            ))}
          </div>

          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-foreground/50 text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:bg-foreground/70 transition">
            <i className="fas fa-chevron-left" />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-foreground/50 text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:bg-foreground/70 transition">
            <i className="fas fa-chevron-right" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary scale-125" : "bg-primary-foreground/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

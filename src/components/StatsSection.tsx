import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: "fa-utensils", end: 50, prefix: "+", suffix: "", label: "Plats au menu" },
  { icon: "fa-users", end: 1000, prefix: "+", suffix: "", label: "Clients satisfaits" },
  { icon: "fa-calendar", end: 5, prefix: "+", suffix: "", label: "Ans d'expérience" },
  { icon: "fa-globe", end: 2, prefix: "", suffix: "", label: "Continents en 1 assiette" },
];

const Counter = ({ end, prefix, suffix, started }: { end: number; prefix: string; suffix: string; started: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.max(1, Math.floor(end / 60));
    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      setCount(current);
    }, 30);
    return () => clearInterval(interval);
  }, [started, end]);

  return <span>{prefix}{count}{suffix}</span>;
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-16 border-y border-border relative z-20 -mt-[220px] md:-mt-[60px]">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <i className={`fas ${s.icon} text-3xl md:text-4xl text-primary mb-3`} />
            <div className="font-display text-3xl md:text-4xl text-foreground">
              <Counter end={s.end} prefix={s.prefix} suffix={s.suffix} started={started} />
            </div>
            <p className="font-body text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

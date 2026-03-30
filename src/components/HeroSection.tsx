import chefImg from "@/assets/RETOUCHE_CHEZ_HOOVI.png";
import dish1 from "@/assets/dish1.jpg";
import dish2 from "@/assets/dish2.jpg";
import dish3 from "@/assets/dish3.jpg";
import dish4 from "@/assets/dish4.jpg";
import dish5 from "@/assets/dish5.jpg";
import fleurVert from "@/assets/FLEUR_VERT.png";
import oignonImg from "@/assets/Oignon.png";
import p1Img from "@/assets/P1.png";

const dishAssets = [dish1, dish2, dish3, dish4, dish5];

const HeroSection = () => {
  return (
    <section 
      id="accueil" 
      className="relative min-h-[450px] md:min-h-[calc(100vh-100px)] flex items-center pt-24 md:pt-0 overflow-hidden px-[12px] py-[10px] md:px-0 md:py-0"
      style={{
        background: '#ffffff'
      }}
    >
      <div className="container mx-auto px-1 md:px-8 z-10 w-full">
        <div className="flex flex-row items-start md:items-center justify-between gap-[8px] md:gap-12 w-full">
          
          {/* Decorative Onion */}
          <img 
            src={oignonImg} 
            alt="Oignon décoratif" 
            className="absolute pointer-events-none w-[70px] h-[70px] md:w-[180px] md:h-[180px] blur-[1px] md:blur-[3px] brightness(1.1) right-[-10px] md:right-[2%] top-[40%] transform -translate-y-1/2"
            style={{
              mixBlendMode: 'multiply',
              zIndex: 5
            }}
          />
          
          {/* Colonne gauche (55% sur mobile) */}
          <div className="w-[55%] md:w-[50%] text-left pt-0 pb-2 md:pt-32 md:pb-24 flex flex-col justify-start px-2 md:px-0 -mt-5 md:mt-0">
            <h1 className="font-display text-[18px] md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-0 md:mb-3 leading-tight">
              Découvrez les mets <br className="md:hidden" />
              <span className="whitespace-nowrap">Africains & Européens</span> <br className="md:hidden" />
              <span className="text-[#f60615] whitespace-nowrap">de chez Hoovi Bouffe</span>
            </h1>
            <p className="font-body text-[11px] md:text-xl text-[#4a4a4a] mb-0 md:mb-4 max-w-2xl mx-0 whitespace-nowrap">
              Chez Hoovi Bouffe c'est le meilleur goût!
            </p>
            
            <div className="flex flex-row items-center gap-[6px] md:gap-[24px] justify-start mt-[2px] md:mt-0 flex-nowrap">
              <div className="flex flex-row gap-[6px] md:gap-4 flex-nowrap">
                <a 
                  href="#menu" 
                  className="text-white px-[8px] py-[5px] md:px-8 md:py-3.5 rounded-[6px] md:rounded-lg font-bold text-[9px] md:text-lg hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg shadow-red-900/20"
                  style={{ backgroundColor: '#f60615' }}
                >
                   Voir nos menus
                </a>
                <a 
                  href="#contact" 
                  className="bg-white text-[#f60615] border-2 border-[#f60615] px-[8px] py-[5px] md:px-8 md:py-3.5 rounded-[6px] md:rounded-lg font-bold text-[9px] md:text-lg hover:bg-[#f60615] hover:text-white transition-all whitespace-nowrap shadow-lg shadow-black/20"
                >
                  Service traiteur
                </a>
              </div>
              <img 
                src={p1Img} 
                alt="Poulet rôti" 
                className="block w-[45px] h-[45px] md:w-[150px] md:h-[150px] object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>

            {/* Row of 3 circles (mobile) / 5 circles (desktop) */}
            <div className="flex flex-row justify-start gap-[6px] md:gap-[12px] mt-[2px] md:mt-[16px] flex-nowrap hero-circles">
              {dishAssets.map((asset, index) => (
                <div 
                  key={index}
                  className={`w-[45px] h-[45px] md:w-[100px] md:h-[100px] hover:scale-110 transition-transform duration-300 rounded-full overflow-hidden flex-shrink-0 m-[3px] md:m-[6px] ring-[2px] ring-[#249824] ring-offset-[2px] ring-offset-white md:ring-[4px] md:ring-offset-[4px] ${index >= 3 ? "hidden md:block" : ""}`}
                >
                  <img 
                    src={asset} 
                    alt={`Plat ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite (Image Cheffe) */}
          <div className="w-[45%] md:w-[50%] flex justify-end items-start md:items-end relative h-[350px] md:h-[650px] pt-0">
             <img 
                src={chefImg} 
                alt="La Cheffe Hoovi" 
                className="w-full md:w-[110%] h-auto max-h-full object-contain object-top md:object-bottom align-top md:align-bottom transform origin-top md:origin-bottom scale-[1.2] md:scale-[1.1] relative top-0 md:top-auto bottom-0 md:bottom-[-75px] left-3 md:left-0"
                loading="eager"
                decoding="async"
                style={{
                  mixBlendMode: 'multiply',
                  alignSelf: 'flex-start',
                }}
             />
          </div>
        </div>
      </div>

      {/* Abstract Rings Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[600px] pointer-events-none opacity-40 z-0">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] border-[50px] border-white/20 rounded-full blur-xl transition-all" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] border-[30px] border-white/10 rounded-full blur-lg" />
      </div>

      {/* Decorative Leaf - Repositioned at bottom for priority */}
      <img 
        src={fleurVert} 
        alt="Fleur verte décorative" 
        className="absolute pointer-events-none w-[60px] h-[60px] md:w-[240px] md:h-[240px] top-[52%] md:top-[calc(55%+25px)] left-[57%] md:left-[calc(50%+50px)] transform -translate-x-1/2 -translate-y-1/2"
        style={{
          zIndex: 40
        }}
      />
      <img 
        src={fleurVert} 
        alt="Fleur verte décorative" 
        className="absolute md:hidden pointer-events-none w-[60px] h-[60px] top-[22%] left-[66%] transform -translate-x-1/2 -translate-y-1/2"
        style={{
          zIndex: 40
        }}
      />
    </section>
  );
};

export default HeroSection;

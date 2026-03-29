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
      className="relative min-h-[400px] md:min-h-[calc(100vh-100px)] flex items-center pt-8 md:pt-0 overflow-hidden px-[12px] py-[10px] md:px-0 md:py-0"
      style={{
        background: 'linear-gradient(to right, #860207, #f60615)'
      }}
    >
      <div className="container mx-auto px-1 md:px-8 z-10 w-full">
        <div className="flex flex-row items-center justify-between gap-[8px] md:gap-12 w-full">
          
          {/* Decorative Leaf */}
          <img 
            src={fleurVert} 
            alt="Fleur verte décorative" 
            className="absolute pointer-events-none w-[80px] h-[80px] md:w-[240px] md:h-[240px]"
            style={{
              top: 'calc(55% + 25px)',
              left: 'calc(50% + 50px)',
              transform: 'translate(-50%, -50%)',
              mixBlendMode: 'multiply',
              zIndex: 5
            }}
          />

          {/* Decorative Onion */}
          <img 
            src={oignonImg} 
            alt="Oignon décoratif" 
            className="absolute pointer-events-none w-[70px] h-[70px] md:w-[180px] md:h-[180px] blur-[1px] md:blur-[3px] brightness(1.1)"
            style={{
              top: '40%',
              right: '-10px',
              transform: 'translateY(-50%)',
              mixBlendMode: 'multiply',
              zIndex: 5
            }}
          />
          
          {/* Colonne gauche (50% sur desktop) */}
          <div className="w-[55%] md:w-[50%] text-left pt-6 pb-2 md:pt-32 md:pb-24 flex flex-col justify-start px-2 md:px-0">
            <h1 className="font-display text-[18px] md:text-5xl lg:text-6xl font-bold text-white mb-1 md:mb-3 leading-tight">
              Découvrez les mets <br className="md:hidden" />
              <span className="whitespace-nowrap">Africains & Européens</span> <br className="md:hidden" />
              <span className="whitespace-nowrap">de chez Hoovi Bouffe</span>
            </h1>
            <p className="font-body text-[11px] md:text-xl text-white/85 mb-[6px] md:mb-4 max-w-2xl mx-0">
              Chez Hoovi Boof c'est le meilleur goût!
            </p>
            
            <div className="flex flex-row items-center gap-[6px] md:gap-[24px] justify-start mt-0 flex-nowrap">
              <div className="flex flex-row gap-[6px] md:gap-4 flex-nowrap">
                <a 
                  href="#menu" 
                  className="text-white px-[8px] py-[5px] md:px-8 md:py-3.5 rounded-[6px] md:rounded-lg font-bold text-[9px] md:text-lg hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg shadow-black/20"
                  style={{ backgroundColor: '#249824' }}
                >
                   Voir nos menus
                </a>
                <a 
                  href="#contact" 
                  className="text-white px-[8px] py-[5px] md:px-8 md:py-3.5 rounded-[6px] md:rounded-lg font-bold text-[9px] md:text-lg hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg shadow-black/20"
                  style={{ backgroundColor: '#249824' }}
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
            <div className="flex flex-row justify-start gap-[6px] md:gap-[12px] mt-[6px] md:mt-[16px] flex-nowrap hero-circles">
              {dishAssets.map((asset, index) => (
                <div 
                  key={index}
                  className={`w-[60px] h-[60px] md:w-[100px] md:h-[100px] hover:scale-110 transition-transform duration-300 rounded-full overflow-hidden flex-shrink-0 m-[3px] md:m-[6px] ring-[2px] ring-[#249824] ring-offset-[2px] ring-offset-white md:ring-[4px] md:ring-offset-[4px] ${index >= 3 ? "hidden md:block" : ""}`}
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
          <div className="w-[45%] md:w-[50%] flex justify-end items-start md:items-end relative h-[300px] md:h-[650px] pt-2 md:pt-0">
             <img 
                src={chefImg} 
                alt="La Cheffe Hoovi" 
                className="w-full md:w-[110%] h-auto max-h-full object-contain object-top md:object-bottom align-top md:align-bottom transform origin-top md:origin-bottom scale-[1.1] relative top-0 md:top-auto bottom-0 md:bottom-[-75px]"
                loading="eager"
                decoding="async"
                style={{
                  mixBlendMode: 'multiply',
                  alignSelf: 'flex-start',
                  marginTop: 0,
                  paddingTop: 0,
                  marginBottom: -2,
                  paddingBottom: 0,
                }}
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


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
      className="relative min-h-[calc(100vh-100px)] flex items-center pt-24 md:pt-0 overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #860207, #f60615)'
      }}
    >
      <div className="container mx-auto px-4 md:px-8 z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          
          {/* Decorative Leaf */}
          <img 
            src={fleurVert} 
            alt="Fleur verte décorative" 
            className="absolute hidden lg:block pointer-events-none"
            style={{
              width: '240px',
              height: '240px',
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
            className="absolute hidden lg:block pointer-events-none"
            style={{
              width: '180px',
              height: '180px',
              top: '50%',
              right: '120px',
              transform: 'translateY(-50%)',
              mixBlendMode: 'multiply',
              filter: 'blur(3px) brightness(1.1)',
              zIndex: 5
            }}
          />
          
          {/* Colonne gauche (50% sur desktop) */}
          <div className="w-full md:w-[50%] text-center md:text-left pt-20 pb-12 md:pt-32 md:pb-24 flex flex-col justify-start">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Découvrez les mets <span className="text-white">Africains & Européens</span> de chez Hoovi Bouffe
            </h1>
            <p className="font-body text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto md:mx-0">
              Chez Hoovi Boof c'est le meilleur goût!
            </p>
            
            <div className="flex flex-row items-center gap-[24px] justify-center md:justify-start">
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#menu" 
                  className="text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg shadow-black/20"
                  style={{ backgroundColor: '#249824' }}
                >
                   Voir nos menus
                </a>
                <a 
                  href="#contact" 
                  className="text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg shadow-black/20"
                  style={{ backgroundColor: '#249824' }}
                >
                  Service traiteur
                </a>
              </div>
              <img 
                src={p1Img} 
                alt="Poulet rôti" 
                className="hidden sm:block w-[150px] h-[150px] object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>

            {/* Row of 5 circles */}
            <div className="flex flex-row justify-center md:justify-start gap-[12px] mt-[40px] flex-wrap">
              {dishAssets.map((asset, index) => (
                <div 
                  key={index}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    boxShadow: '0 0 0 4px #249824, 0 0 0 8px #ffffff',
                    overflow: 'hidden',
                    display: 'inline-block',
                    flexShrink: 0,
                    margin: '6px'
                  }}
                  className="hover:scale-110 transition-transform duration-300"
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
          <div className="w-full md:w-[50%] flex justify-center md:justify-end items-end relative h-[450px] md:h-[650px] min-h-[450px]">
             <img 
               src={chefImg} 
               alt="La Cheffe Hoovi" 
               className="w-full md:w-[110%] h-auto max-h-full object-contain object-bottom align-bottom transform origin-bottom scale-[1.1]"
               loading="eager"
               style={{
                 mixBlendMode: 'multiply',
                 alignSelf: 'flex-end',
                 marginBottom: -2,
                 paddingBottom: 0,
                 position: 'relative',
                 bottom: '5px'
               }}
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


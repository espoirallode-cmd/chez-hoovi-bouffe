import React, { useState, useEffect } from "react";
import { X, Check } from "lucide-react";

const WHATSAPP_NUMBER = "2290158720491";

interface Dish {
  name: string;
  cat: string;
  price: number | string;
}

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  dish: Dish | null;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, dish }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    delivery: false,
    location: "",
    price: "",
    selectedAccompagnements: [] as string[],
  });

  // Handle initialization when dish changes
  useEffect(() => {
    if (dish) {
      if (typeof dish.price === "string" && dish.price.includes("/")) {
        setFormData((prev) => ({ ...prev, price: "", selectedAccompagnements: [] }));
      } else {
        const p = typeof dish.price === "number" 
          ? Math.round(dish.price * 655).toString() 
          : dish.price.replace(/\s/g, "");
        setFormData((prev) => ({ ...prev, price: p, selectedAccompagnements: [] }));
      }
      setStep(1);
    }
  }, [dish]);

  if (!isOpen || !dish) return null;

  // Extract accompaniments: "Dish + Acc1/Acc2/Acc3"
  const accompanimentOptions = dish.name.includes("+") && dish.name.includes("/")
    ? dish.name.split("+")[1].split("/").map(s => s.trim())
    : [];

  const prices = typeof dish.price === "string" && dish.price.includes("/") 
    ? dish.price.split("/").map(p => p.trim().replace(/[^\d]/g, ""))
    : [];

  const nextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.phone || (formData.delivery && !formData.location) || (prices.length > 0 && !formData.price)) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
      }
      if (accompanimentOptions.length > 0 && formData.selectedAccompagnements.length === 0) {
        alert("Veuillez choisir au moins un accompagnement.");
        return;
      }
    }
    setStep((s) => s + 1);
  };

  const formatWhatsAppMessage = () => {
    const deliveryStatus = formData.delivery ? `📍 ${formData.location}` : "🥡 À emporter";
    const accompaniments = formData.selectedAccompagnements.join(" + ");
    
    const message = `🍽️ *Nouvelle commande — Chez Hoovi Bouffe*
──────────────────────
👤 Client : ${formData.name}
📱 WhatsApp : ${formData.phone}
🍴 Plat : ${dish.name.split("+")[0].trim()}
🥗 Accompagnement : ${accompaniments || "N/A"}
💰 Prix : ${formData.price.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} FCFA
📦 Livraison : ${deliveryStatus}
──────────────────────
⏳ En attente de confirmation
   et moyens de paiement.`;

    return encodeURIComponent(message);
  };

  const sendWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${formatWhatsAppMessage()}`;
    window.open(url, "_blank");
  };

  const toggleAccompaniment = (acc: string) => {
    setFormData(prev => ({
      ...prev,
      selectedAccompagnements: prev.selectedAccompagnements.includes(acc)
        ? prev.selectedAccompagnements.filter(item => item !== acc)
        : [...prev.selectedAccompagnements, acc]
    }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-body">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-[480px] bg-white rounded-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-8 max-h-[95vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-20 mb-8 relative px-10">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200 -z-10 -translate-y-1/2 mx-20" />
          {[1, 2].map((s) => (
            <div 
              key={s}
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                step >= s ? "bg-[#249824] text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold font-body">Votre commande — Étape 1/2</h2>
              <div className="flex items-center gap-3 mt-2">
                <span className="font-semibold text-foreground">{dish.name.split("+")[0].trim()}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] uppercase font-bold bg-primary/10 text-primary">
                  {dish.cat === "european" ? "Européen" : "Africain"}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold">Nom et prénom *</label>
                <input 
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#249824] outline-none transition-all placeholder:text-gray-300"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ex: Jean Dupont"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold">Numéro WhatsApp *</label>
                <input 
                  type="tel"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#249824] outline-none transition-all placeholder:text-gray-300"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="Ex: 229XXXXXXXX"
                />
              </div>

              {accompanimentOptions.length > 0 && (
                <div className="space-y-3 pt-2">
                  <label className="text-sm font-semibold block">🥗 Choisissez votre accompagnement : *</label>
                  <div className="flex flex-col gap-2.5">
                    {accompanimentOptions.map((acc) => (
                      <label key={acc} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="checkbox"
                          className="w-4 h-4 rounded text-[#249824] focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer"
                          style={{ accentColor: "#249824" }}
                          checked={formData.selectedAccompagnements.includes(acc)}
                          onChange={() => toggleAccompaniment(acc)}
                        />
                        <span className="text-[15px] group-hover:text-primary transition-colors">{acc}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3 pt-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox"
                    className="w-4 h-4 rounded accent-[#249824]"
                    checked={formData.delivery}
                    onChange={(e) => setFormData({...formData, delivery: e.target.checked})}
                  />
                  <span className="text-sm font-medium group-hover:text-foreground transition-colors">Je souhaite une livraison</span>
                </label>

                {formData.delivery && (
                  <div className="animate-in slide-in-from-top-2 duration-300">
                    <label className="text-sm font-semibold block mb-1.5">Lieu de livraison *</label>
                    <input 
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#249824] outline-none transition-all"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="Ex: Quartier, Rue, Maison..."
                    />
                  </div>
                )}
              </div>

              {prices.length > 0 && (
                <div className="space-y-3 pt-2">
                  <label className="text-sm font-semibold block">Choisir le format/prix *</label>
                  <div className="flex flex-col gap-2">
                    {prices.map((p) => (
                      <label key={p} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <input 
                          type="radio"
                          name="price"
                          className="w-4 h-4 accent-[#249824]"
                          value={p}
                          checked={formData.price === p}
                          onChange={(e) => setFormData({...formData, price: e.target.value})}
                        />
                        <span className="font-bold">{p.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} FCFA</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={nextStep}
              className="w-full py-3 bg-[#249824] text-white rounded-xl font-bold hover:bg-[#1c7a1c] transition-colors flex items-center justify-center gap-2 mt-4"
            >
              Continuer →
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-6 text-center animate-in">
            <h2 className="text-xl font-bold font-body">Confirmation — Étape 2/2</h2>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 text-[#249824] rounded-full flex items-center justify-center animate-scale-in">
                <Check size={40} strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-[#249824] mt-6 leading-tight">
                🎉 Votre commande <br /> est prête !
              </h3>
              <p className="text-sm text-gray-500 mt-2 max-w-[300px] mx-auto leading-relaxed">
                Envoyez votre commande sur WhatsApp, le restaurant vous contactera avec les moyens de paiement disponibles.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 space-y-3 text-sm text-left border border-gray-100">
              <p className="font-bold border-b pb-2 mb-2 text-primary">Récapitulatif complet :</p>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Plat :</span>
                <span className="font-bold">{dish.name.split("+")[0].trim()}</span>
              </div>
              {formData.selectedAccompagnements.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Accompagnement :</span>
                  <span className="font-bold text-right ml-4">{formData.selectedAccompagnements.join(" + ")}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Prix :</span>
                <span className="font-bold">{formData.price.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} FCFA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Livraison :</span>
                <span className="font-bold">{formData.delivery ? formData.location : "À emporter"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Client :</span>
                <span className="font-bold">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">WhatsApp :</span>
                <span className="font-bold">{formData.phone}</span>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <button 
                onClick={sendWhatsApp}
                className="w-full py-4 bg-[#249824] text-white rounded-xl font-bold hover:bg-[#1c7a1c] transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-200"
              >
                Envoyer ma commande sur WhatsApp
              </button>
              <button 
                onClick={onClose}
                className="w-full py-3 bg-white text-gray-400 font-bold hover:text-gray-600 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes scale-in {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </div>
  );
};

export default OrderModal;

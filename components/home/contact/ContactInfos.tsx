
import { MapPin, Phone, Mail } from "lucide-react";

// TODO : remplacer par les vraies coordonnées de SportHub
const infos = [
  { icon: MapPin, label: "Adresse", value: "Adresse à compléter" },
  { icon: Phone, label: "Téléphone", value: "+228 00 00 00 00" },
  { icon: Mail, label: "Email", value: "contact@sporthub.tg" },
];

export default function ContactInfos() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h2 className="text-lg font-bold text-black mb-5">Coordonnées</h2>

      <div className="space-y-5">
        {infos.map((info) => {
          const Icon = info.icon;

          return (
            <div key={info.label} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-black">{info.label}</p>
                <p className="text-sm text-gray-600">{info.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// composant d'informations de contact (coordonnées, adresse, téléphone, email, etc.)
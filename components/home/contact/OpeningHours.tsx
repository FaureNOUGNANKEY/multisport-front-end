import { Clock } from "lucide-react";

// TODO : remplacer par les vrais horaires
const hours = [
  { day: "Lundi - Vendredi", time: "08:00 - 20:00", closed: false },
  { day: "Samedi", time: "09:00 - 18:00", closed: false },
  { day: "Dimanche & Jours fériés", time: "Fermé", closed: true },
];

export default function OpeningHours() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h2 className="flex items-center gap-2 text-lg font-bold text-black mb-5">
        <Clock size={20} className="text-blue-600" />
        Horaires d&apos;ouverture
      </h2>

      <div className="space-y-3">
        {hours.map((item) => (
          <div
            key={item.day}
            className="flex justify-between text-sm text-gray-600"
          >
            <span>{item.day}</span>
            <span
              className={item.closed ? "text-red-500" : "text-black font-semibold"}
            >
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


// composant d'horaires d'ouverture
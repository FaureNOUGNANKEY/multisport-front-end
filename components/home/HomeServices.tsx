import { Target, Clock, Euro } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Centralisation",
    summary: "Toutes vos structures et membres dans un espace sécurisé.",
  },
  {
    icon: Clock,
    title: "Suivi des activités",
    summary: "Calendrier, inscriptions, participations et historiques.",
  },
  {
    icon: Euro,
    title: "Gestion financière",
    summary: "Cotisations, paiements, abonnements et comptabilité.",
  },
];

export default function HomeServices() {
  return (
    <div className="bg-white py-[60px] px-9">
      <div >
        <h5 className="text-blue-600 font-semibold uppercase text-sm">
          Pourquoi SportHub ?
        </h5>
        <h2 className="text-black text-3xl font-bold mb-8">
          Une gestion pensée pour les structures sportives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-black mt-5">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.summary}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
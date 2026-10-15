import Link from "next/link";
import {
  Activity,
  GraduationCap,
  Globe,
  Handshake,
  Rocket,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import type { News } from "@/lib/types";

const icons: Record<string, LucideIcon> = {
  Activity,
  GraduationCap,
  Globe,
  Handshake,
  Rocket,
  Trophy,
};

export default function HomeNews({ news }: { news: News[] }) {
  return (
    <div className="bg-gray-50 py-[60px] px-9">
      <div >
        <h4 className="text-blue-600 font-semibold uppercase text-sm">
          Actualités
        </h4>

        <div className="flex justify-between items-center w-full mb-8">
          <h1 className="text-black text-3xl font-bold">
            Les dernières nouvelles
          </h1>
          <Link
            href="/actualites"
            className="bg-white border border-gray-200 rounded-lg px-4 py-2 font-semibold text-black"
          >
            Toutes les actualités
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => {
            const Icon = icons[item.icon] ?? Trophy;

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-20 bg-gradient-to-br from-blue-900 to-teal-600 flex items-center justify-center">
                  <Icon size={48} className="text-white" />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 rounded-full px-3 py-1">
                    {new Date(item.date).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <h3 className="text-xl font-bold text-black mt-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.summary}</p>
                  <Link
                    href={`/actualites/${item.id}`}
                    className="inline-block mt-5 border border-gray-200 rounded-lg px-4 py-2 font-semibold text-black"
                  >
                    {"Lire l'article"}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
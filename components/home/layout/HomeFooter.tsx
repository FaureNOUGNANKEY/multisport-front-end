import Link from "next/link";

export default function HomeFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <img src="/appLogo.png" alt="SportHub" className="h-10 mb-4" />
          <p className="text-sm">La plateforme numérique pour une gestion sportive centralisée et transparente.</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Produit</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Catalogue</Link></li>
            <li><Link href="#">Tarifs</Link></li>
            <li><Link href="#">Abonnements</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Légal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Confidentialité</Link></li>
            <li><Link href="#">CGV</Link></li>
            <li><Link href="#">Mentions légales</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <p className="text-sm">Support 24/7</p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
        © 2026 SportHub. All rights reserved.
      </div>
    </footer>
  );
}
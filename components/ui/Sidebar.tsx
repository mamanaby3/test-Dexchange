'use client'; // Indique que ce composant est un "Client Component" dans Next.js (il peut utiliser des hooks et interactivité)
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navSections } from "@/data/tableData";

/*
  Composant Sidebar : c'est la barre latérale de navigation que l'on voit sur la gauche du tableau de bord.
  on y trouve:
  - Le logo en haut
  - Les liens vers les différentes pages
  - Un petit widget d'aide en bas (la documentation)
*/
export default function Sidebar() {
    const pathname = usePathname(); // Récupère l'URL actuelle pour savoir quel lien est actif

    // Widget d'aide simple (en bas de la sidebar)
    const DocumentationWidgetPlaceholder = () => (
        <div className="bg-teal-400/80 rounded-lg p-8 text-white text-sm shadow-lg">
            <h4 className="font-semibold mb-1">Need help?</h4>
            <p className="text-xs opacity-90">Please check our docx</p>
            <br></br>
               <Link href="#"
                  className="px-5 py-2 text-sm font-semibold shadow-md transition-colors
                                   rounded-full
                                   bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-100 dark:text-gray-900"
            >
                DOCUMENTATION
            </Link>
        </div>
    );

    // Composant interne pour afficher un lien dans la sidebar
    const SidebarLink = ({ name, href, icon: Icon }: typeof navSections[0]['items'][0]) => {
        const isActive = pathname === href; // Vérifie si ce lien correspond à la page actuelle

        // Styles différents si le lien est actif ou non
        const activeClasses = isActive
            ? 'bg-white text-black shadow-md' // Lien actif : fond blanc, texte noir
            : 'text-gray hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'; // Lien inactif : texte gris, fond change au survol

        const iconColor = 'text-teal-400'; // Couleur des icônes

        return (
            <Link
                href={href}
                className={`flex items-center space-x-3 rounded-lg px-3 py-2 font-medium transition-colors duration-150 ${activeClasses}`}
            >
        <span className={iconColor}>
          <Icon className="h-5 w-5" />
        </span>
                <span>{name}</span>
            </Link>
        );
    };

    return (
        <aside className="fixed left-0 top-0 z-20 hidden h-screen w-64 flex-col overflow-y-auto bg-white shadow-xl dark:bg-gray-800 lg:flex">
            {/* on a le Logo en haut de la sidebar */}
            <div className="border-b border-gray-100 p-4 dark:border-gray-700">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">DEXCHANGE SAAS</h1>
            </div>

            {/* Navigation principale */}
            <nav className="flex-1 space-y-4 p-4 pt-6">
                {navSections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                        {section.title && (
                            <p className="px-3 py-2 text-xs font-semibold uppercase text-black">
                                {section.title} {/* Titre de section comme "Account Pages" que j'ai mis en noire*/}
                            </p>
                        )}
                        <div className="space-y-2 text-gray-400">
                            {section.items.map((item) => (
                                <SidebarLink key={item.name} {...item} /> // Affiche chaque lien de la section
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Widget d'aide en bas */}
            <div className="mt-auto space-y-2 border-t border-gray-100 p-4 dark:border-gray-700">
                <DocumentationWidgetPlaceholder />
            </div>
        </aside>
    );
}

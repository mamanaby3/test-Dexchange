// components/dashboard/DashboardNavbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Bell, Settings, User } from 'lucide-react';

export default function DashboardNavbar() {
    const pathname = usePathname();

    // --- CORRECTION DE LA LOGIQUE DE CHEMIN ---
    // 1. Split par '/' et filtre les chaînes vides.
    const pathSegments = pathname.split('/').filter(p => p);

    // 2. Trouve le nom de la page actuelle.
    //    Si le chemin est simple (/dashboard), il prendra le premier.
    //    S'il y a un sous-chemin (/dashboard/tables), il prendra le dernier élément du tableau.
    let pageName = pathSegments[pathSegments.length - 1] || 'Dashboard';

    // 3. Cas spécial : Si le résultat est 'dashboard', on veut que le titre soit 'Dashboard'
    if (pageName === 'dashboard' || pageName === '') {
        pageName = 'Dashboard';
    }

    // Assurez-vous que le nom est correctement capitalisé pour l'affichage (ex: 'tables' -> 'Tables')
    const currentPathName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    // ---------------------------------------------


    return (
        <nav className="bg-transparent dark:bg-gray-900 sticky top-0 z-20 py-4 px-0">
            <div className="flex justify-between items-center w-full">

                {/* 1. Chemin de Navigation (Breadcrumbs) - Utilise la variable corrigée */}
                <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    {/* ✅ Affichage Pages / Tables */}
                    <span className="font-medium">Pages</span> / {currentPathName}

                    {/* ✅ Titre de la Page */}
                    <h1 className="text-xl font-bold capitalize text-gray-900 dark:text-white mt-1">
                        {currentPathName}
                    </h1>
                </div>


                {/* 2. Barre de Recherche et Icônes (inchangé) */}
                <div className="flex items-center space-x-4">
                    {/* Barre de recherche */}
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Type here..."
                            className="w-56 rounded-lg border border-gray-200 p-2 pl-10 text-sm focus:border-dexchange-primary focus:ring-dexchange-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        />
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Icônes et Bouton Sign In (Profil) */}
                    <Link
                        href="/auth/login"
                        className="flex items-center text-sm font-semibold text-gray-900 dark:text-white hover:text-dexchange-primary transition-colors"
                    >
                        <User className="h-5 w-5 mr-1" />
                        Sign In
                    </Link>
                    <div className="flex space-x-2 text-gray-600 dark:text-gray-400">
                        <Bell className="h-6 w-6 cursor-pointer hover:text-dexchange-primary transition-colors" />
                        <Settings className="h-6 w-6 cursor-pointer hover:text-dexchange-primary transition-colors" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
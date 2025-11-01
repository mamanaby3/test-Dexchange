// components/layout/DashboardLayout.tsx
import Sidebar from '@/components/ui/Sidebar';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import * as React from 'react';



interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {

    // NOTE : La Sidebar utilise une largeur fixe de w-64 (256px)

    return (
        // Conteneur principal: min-h-screen et fond de l'application
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

            {/* 1. SIDEBAR: Fixée à gauche */}
            <Sidebar />

            {/* 2. CONTENU PRINCIPAL: Décalé à droite pour éviter la superposition */}
            {/* ml-64 décale le contenu, correspondant à la largeur de la Sidebar w-64. */}
            <div
                className="ml-64 p-6 transition-all duration-300 min-h-screen"
            >

                {/* Navbar du Dashboard (Recherche, Profil, parametre,deconnexion) */}
                   <DashboardNavbar />

                {/* c'est pour le Contenu dynamique de la page   */}
                <main className="mt-6">
                    {children}
                </main>


            </div>
        </div>
    );
}
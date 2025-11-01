
import Link from 'next/link'; // Permet de naviguer entre les pages sans rechargement complet pour linker enfaite
import Logo from '@/components/ui/Logo'; // Importe le composant du logo de l'application
 import {User, LogIn, LayoutDashboard, UserCircle2, KeyRound, Chrome} from 'lucide-react'; // Importe les icônes nécessaires

export default function AuthNavbar() {

    // Classes de base communes pour le style des liens du menu central
    const linkBaseClasses = "flex items-center space-x-1 text-white font-medium hover:text-gray-200 transition-colors";

    return (
        // Le conteneur principal : barre de navigation fixée en haut, pleine largeur
        <nav className="fixed top-0 left-0 w-full z-10 p-4">

            {/* Conteneur interne pour centrer le contenu et limiter sa largeur */}
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 1.ici j'affiche le logo */}
                <Logo />

                {/* 2. Puis le bloc Central : Liens de navigation (cachés sur petits écrans) */}
                <div className="hidden lg:flex items-center space-x-6 text-sm">

                    {/* Lien vers le tableau de bord */}
                    <Link href="/dashboard" className={linkBaseClasses}>
                        <Chrome className="h-4 w-4" />
                        <span>DASHBOARD</span>
                    </Link>

                    {/* Lien vers le profil */}
                    <Link href="/profile" className={linkBaseClasses}>
                        <User className="h-4 w-4" />
                        <span>PROFILE</span>
                    </Link>
                    <Link href="/auth/register" className={linkBaseClasses}>
                        <UserCircle2 className="h-4 w-4" />
                        <span>SIGN UP</span>
                    </Link>

                    {/*   Lien vers la page de connexion */}
                    <Link href="/auth/login" className={linkBaseClasses}>
                        <KeyRound className="h-4 w-4" />
                        <span>SIGN IN</span>
                    </Link>


                </div>

                {/* 3. et enfin Bloc Droit : Bouton d'action */}
                <div className="flex items-center">
                    <Link href="#"
                          className="px-5 py-2 text-sm font-semibold shadow-md transition-colors
                                   rounded-full
                                   bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-100 dark:text-gray-900"
                    >
                        CALL TO ACTION
                    </Link>
                </div>
            </div>
        </nav>
    );
}

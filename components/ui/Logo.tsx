 import {  LayoutDashboard} from 'lucide-react';
export default function Logo() {
      return (
        <div className="flex items-center text-lg font-bold text-white dark:text-white">
            {/* Icône du logo  */}
            <LayoutDashboard className="h-6 w-6  mr-2" />

             {/*Nom de l'application */}
            <span>DEXCHANGE SAAS</span>
        </div>
    );
}

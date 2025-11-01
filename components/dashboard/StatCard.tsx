// components/dashboard/StatCard.tsx
import * as React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string;
    percentage: number;
    icon: React.ElementType;
}

export default function StatCard({
                                     title,
                                     value,
                                     percentage,
                                     icon: Icon,
                                 }: StatCardProps) {
    const isPositive = percentage >= 0;
    const percentageClasses = isPositive ? 'text-green-500' : 'text-red-500';
    const PercentageIcon = isPositive ? ArrowUp : ArrowDown;
    const formattedPercentage = `${isPositive && percentage !== 0 ? '+' : ''}${percentage}%`;

    // Le fond de l'icône sera toujours bg-teal-400, et l'icône sera blanche.
    const ICON_BACKGROUND_COLOR = "bg-teal-400";

    return (

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 h-24 flex flex-col justify-between">

            {/* Ligne du TITRE */}
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>

            {/*  Ligne des VALEURS, POURCENTAGE et ICÔNE */}
            <div className="flex justify-between items-center w-full mt-1">

                {/*  Valeur et Pourcentage  à gauche  */}
                <div className="flex items-end space-x-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {value}
                    </h3>

                    <div className="flex items-center text-sm mb-[2px]">
                        <PercentageIcon className={`h-4 w-4 mr-1 ${percentageClasses}`} />
                        <span className={`font-semibold ${percentageClasses}`}>{formattedPercentage}</span>
                    </div>
                </div>


                {/*   Colonne d'Icône (Cercle coloré) */}
                <div className={`flex items-center justify-center h-12 w-12 rounded-full ${ICON_BACKGROUND_COLOR} shadow-md`}>
                    <Icon className="h-6 w-6 text-white" />
                </div>
            </div>
        </div>
    );
}
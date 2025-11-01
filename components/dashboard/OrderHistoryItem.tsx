import React from 'react';
import {Truck, CreditCard, RefreshCw, Box, Layers, Zap, Bell} from 'lucide-react';

// Type pour définir les différentes catégories d'événements
type HistoryType = 'order' | 'payment' | 'change' | 'package' | 'card' | 'api';

interface OrderHistoryItemProps {
    description: string;
    date: string;
    time: string;
    type: HistoryType;
}

// Fonction pour déterminer l'icône et la couleur en fonction du type
const getItemConfig = (type: HistoryType) => {
    switch (type) {
        case 'order':
            return {
                Icon: Bell,
                color: 'bg-dexchange-primary text-white', // Turquoise
            };
        case 'payment':
            return {
                Icon: CreditCard,
                color: 'bg-yellow-500 text-white',
            };
        case 'change':
            return {
                Icon: RefreshCw,
                color: 'bg-teal-400 text-white', // Vert clair
            };
        case 'package':
            return {
                Icon: Box,
                color: 'bg-yellow-500 text-white',
            };
        case 'card':
            return {
                Icon: Layers,
                color: 'bg-pink-500 text-white',
            };
        case 'api':
            return {
                Icon: Zap,
                color: 'bg-purple-500 text-white',
            };
        default:
            return {
                Icon: RefreshCw,
                color: 'bg-gray-400 text-white',
            };
    }
};

export default function OrderHistoryItem({ description, date, time, type }: OrderHistoryItemProps) {
    const { Icon, color } = getItemConfig(type);

      return (
        <div className="flex items-start space-x-4">

            {/* Conteneur pour la Ligne de Temps et l'Icône */}
            <div className="relative pt-1">
                  <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>


                <div
                    className={`relative z-10 flex items-center justify-center h-8 w-8 rounded-full ${color} flex-shrink-0`}
                >
                    <Icon className="h-4 w-4" />
                </div>
            </div>

            {/* Contenu de la Description et de l'Heure */}
            <div className="flex-grow pb-4">
                <p className="font-semibold text-gray-900 dark:text-white text-sm leading-snug">{description}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {date} à {time}
                </p>
            </div>
        </div>
    );
}

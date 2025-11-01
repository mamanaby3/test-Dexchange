import React from 'react';
import { MoreVertical } from 'lucide-react';
import OrderHistoryItem from '@/components/dashboard/OrderHistoryItem';
import { orderHistoryData } from '@/data/tableData';

export default function OrderHistoryCard() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">

            {/* Entête de la Carte */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Orders overview</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="text-green-500 font-semibold">+24%</span> this month
                    </p>
                </div>
                <MoreVertical className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>

            {/* Contenu de l'Historique  */}
            <div className="space-y-6">
                {orderHistoryData.map((item, index) => (
                    <OrderHistoryItem
                        key={index}
                        description={item.description}
                        date={item.date}
                        time={item.time}
                        type={item.type as 'order' | 'payment' | 'change' | 'package' | 'card' | 'api'}
                    />
                ))}
            </div>

        </div>
    );
}

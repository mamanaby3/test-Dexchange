import StatCard from '@/components/dashboard/StatCard';
import ProjectsTable from '@/components/dashboard/ProjectsTable';
import OrderHistoryCard from '@/components/dashboard/OrderHistoryCard';
import { statCardsData } from '@/data/tableData'; // Utilisation des données mockees


export default function DashboardPage() {
    return (
        <div className="py-4">


            {/* 1. Section des StatCards (RANGÉE 1) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCardsData.map((card, index) => (
                    <StatCard
                        key={index}
                        title={card.title}
                        value={card.value}
                        percentage={card.percentage}
                        icon={card.icon}
                    />
                ))}
            </div>

            {/* 2. Section des Widgets (Deuxième Rangée)   */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

                {/* Widget A  */}
                <div
                    className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex h-56"
                >
                    {/* Colonne de Texte   */}
                    <div className="w-1/2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Lorem ipsum</p>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Lorem Dashboard</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="text-sm text-dexchange-primary font-semibold hover:underline flex items-center">
                            Read more
                            <span className="ml-1 text-xs">→</span>
                        </a>
                    </div>

                    {/* Colonne du Bloc "Chakra"  */}
                    <div
                        className=" w-1/2 text-white rounded-xl shadow-lg flex items-center justify-center p-12"
                        style={{
                            backgroundImage: "url('/images/og-image.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >

                    </div>
                </div>


                {/* Widget B: Deuxième Carte d'Information   */}
                <div
                    className="lg:col-span-1 rounded-xl shadow-lg p-6 flex flex-col h-56"
                    style={{
                        backgroundImage: "url('/images/brooke-cagle.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="text-white  ">
                        <h4 className="text-xl font-semibold text-white dark:text-white mb-2">Lorem Ipsum</h4>
                        <p className="text-sm text-white dark:text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="text-sm text-dexchange-primary font-semibold hover:underline flex items-center">
                            Read more
                            <span className="ml-1 text-xs">→</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* 3. Section de la Table des Projets et Aperçu des Commandes (RANGÉE 3) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

                {/*   Table des Projets   */}
                <div className="lg:col-span-2">
                    <ProjectsTable />
                </div>

                {/*   Orders Overview (Aperçu des Commandes)  */}
                <div className="lg:col-span-1">
                    {/*   Utilisation du composant OrderHistoryCard mockees dans la tabledata */}
                    <OrderHistoryCard />
                </div>
            </div>
        </div>
    );
}

// components/dashboard/ProjectsTable.tsx
import { projectsData } from '@/data/tableData';
import { MoreVertical, Layers, BarChart } from 'lucide-react';
import Image from 'next/image';
// Composant d'Avancement (Progress Bar)
interface ProgressBarProps {
    completion: number;
}
const ProgressBar = ({ completion }: ProgressBarProps) => {
    // Déterminela couleur de la barre de progression
    const barColor = completion === 100 ? 'bg-teal-400' : 'bg-teal-400';

    return (
        <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
                className={`h-1.5 rounded-full ${barColor}`}
                style={{ width: `${completion}%` }}
            ></div>
        </div>
    );
};

export default function ProjectsTable() {
    // Les icônes pour la colonne 'Companies'
    const companyIcons = [Layers, BarChart, Layers, BarChart, Layers, BarChart];

    // Simuler le chemin pour les images d'avatars
     return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">

            {/* Entête du Composant (Projects) */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Projects</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="text-green-500 font-semibold">30 done</span> this month
                    </p>
                </div>
                <MoreVertical className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>

            {/* Structure de la Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">

                    {/* Entêtes de la Table */}
                    <thead>
                    <tr>
                        {['COMPANIES',   'BUDGET','STATUS', 'COMPLETION'].map((header) => (
                            <th
                                key={header}
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                    </thead>


                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {projectsData.map((project, index) => {
                        const Icon = companyIcons[index % companyIcons.length]; // Alterner les icônes

                        return (
                            <tr key={project.company} className="hover:bg-gray-50 dark:hover:bg-gray-700">

                                {/* Colonne COMPANIES */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center space-x-3">
                                        {/* 🎯 CORRECTION DE L'ERREUR D'IMAGE VIDE */}
                                        <div
                                            className={`h-8 w-8 relative rounded-full overflow-hidden flex items-center justify-center 
                                                ${!project.companyImage ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                                        >
                                            {project.companyImage ? (
                                                <Image
                                                    src={project.companyImage} // N'est rendu que si le src n'est pas vide
                                                    alt={`${project.company} logo`}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                            ) : (
                                                <a></a>
                                            )}
                                        </div>

                                        {/* Nom de la compagnie */}
                                        <p className="font-semibold text-gray-900 dark:text-white text-sm">
                                            {project.company}
                                        </p>
                                    </div>
                                </td>

                                {/* Colonne BUDGET */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {project.budget}
                                </td>
                                {/* Colonne STATUS */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {project.status}
                                </td>

                                {/* Colonne COMPLETION (Pourcentage et Barre) */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <div className="flex items-center space-x-3">
                                            <span className={`font-semibold ${project.completion === 100 ? 'text-teal-400' : 'text-teal-400 dark:text-white'}`}>
                                                {project.completion}%
                                            </span>
                                        <ProgressBar completion={project.completion} />
                                    </div>
                                </td>

                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
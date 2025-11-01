import Image from "next/image";
import { authorsData } from "@/data/tableData";
import Badge from "@/components/ui/Badge";

const AuthorsTable = () => {
    const headers = ['AUTHOR', 'FUNCTION', 'STATUS', 'EMPLOYED'];

    const StatusBadge = ({ status }: { status: 'Online' | 'Offline' }) => (
        <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full 
            ${status === 'Online' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}
        >
            {status}
        </span>
    );

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Authors Table</h4>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                    <tr>
                        {headers.map((header) => (
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
                    {authorsData.map((author) => (
                        <tr key={author.email} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                            {/* Colonne AUTHOR */}
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full overflow-hidden mr-4 flex-shrink-0">
                                        <Image
                                            src={`/images/${author.avatarId}.jpg`}
                                            alt={author.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{author.name}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{author.email}</p>
                                    </div>
                                </div>
                            </td>

                            {/* FUNCTION */}
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                <p className="font-semibold text-gray-900 dark:text-white">{author.role}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{author.sousrole}</p>
                            </td>

                            {/* STATUS */}
                            <td className="px-6 py-4 whitespace-nowrap">
                                <StatusBadge status={author.status as 'Online' | 'Offline'} />
                            </td>

                            {/* EMPLOYED */}
                            <td className="px-6 py-4 font-semibold text-sm text-black">
                                {author.date}
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <a>Edit</a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AuthorsTable;

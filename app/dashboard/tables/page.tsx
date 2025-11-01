 import AuthorsTable from '@/components/tables/AuthorsTable';
import ProjectsTable from '@/components/tables/ProjectsTable';
export default function TablesPage() {
    return (
        <div className="py-4">


            {/* Affichage de la Table des Auteurs */}
            <AuthorsTable />
            <br/>

{/*            ici celle des projets*/}
<ProjectsTable/>

        </div>

    );
}
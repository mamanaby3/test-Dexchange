// app/auth/layout.tsx
import AuthNavbar from '@/components/auth/AuthNavbar';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

            <div
                className="h-[50vh] relative bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(26, 188, 156, 0.7) ), url('/images/accueil.png'),url(/images/accueil.png)`,
                }}
            >
                <AuthNavbar />


                <div className="absolute inset-0 flex items-start justify-center pt-20">
                    <h1 className="text-2xl font-bold text-white">Welcome!</h1>
                </div>
            </div>

            {children}

            <div className="h-[50vh] pt-20"></div>
        </div>
    );
}
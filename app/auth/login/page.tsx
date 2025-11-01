// app/auth/login/page.tsx

import Link from 'next/link';
import Button from '@/components/ui/Button'; // Composant réutilisable Button
import { Facebook, Apple,   } from 'lucide-react';

export default function LoginPage() {
    return (
         <div className="absolute left-1/2 top-[25%] w-full max-w-md -translate-x-1/2 transform rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-800">
            <h2 className="text-center text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                Sign In
            </h2>

            {/* Liens de Connexion Sociale */}
            <div className="flex justify-center space-x-4 mb-4">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
                    <Facebook className="h-5 w-5 text-gray-600" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
                    <Apple className="h-5 w-5 text-gray-600" />
                </button>

            </div>

            <p className="text-center text-xs text-gray-500 mb-4">Or</p>

            <form className="space-y-4">

                {/* Champ Email */}
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-dexchange-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Your email address"
                    type="email"
                />

                {/* Champ Mot de passe */}
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <input
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-dexchange-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Your password"
                    type="password"
                />

                {/* Options Se souvenir / Mot de passe oublié */}
                <div className="flex items-center justify-between pt-2">
                    <label htmlFor="remember-me" className="flex items-center cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300">
                        <input type="checkbox" id="remember-me" className="rounded border-gray-300 text-dexchange-primary focus:ring-dexchange-primary mr-2" />
                        Se souvenir
                    </label>
                    <Link href="#" className="text-sm text-dexchange-primary hover:underline font-medium">
                        Mot de passe oublié?
                    </Link>
                </div>

                {/* Bouton Sign In */}
                <Button type="submit" className="mt-4">SIGN IN</Button>

                {/* Lien Register */}
                <p className="text-center text-sm pt-4">
                    Don't have an account?{' '}
                    <Link href="/auth/register" className="text-dexchange-primary hover:underline font-semibold">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
}
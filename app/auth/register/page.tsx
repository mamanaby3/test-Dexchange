"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { Facebook, Apple, Chrome } from "lucide-react";

export default function RegisterPage() {
    return (
         <div className="absolute left-1/2 top-[23%] w-full max-w-md -translate-x-1/2 transform rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-800">
            <h2 className="text-center text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                Register with
            </h2>

            {/* Boutons de connexion sociale facebook, apple et Chrome */}
            <div className="flex justify-center space-x-4 mb-6">
                <button className="flex items-center justify-center h-12 w-12 rounded-lg border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors">
                    <Facebook className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </button>
                <button className="flex items-center justify-center h-12 w-12 rounded-lg border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors">
                    <Apple className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </button>
                <button className="flex items-center justify-center h-12 w-12 rounded-lg border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors">
                    <Chrome className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </button>
            </div>

            <p className="text-center text-sm text-gray-500 mb-6">or</p>
            {/*on a le formulaire d'inscription avec les camps nom,mail et mdp*/}
            <form className="space-y-4">
                {/* Champ Nom */}
                <div className="space-y-1">
                    <label
                        htmlFor="name"
                        className="text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-dexchange-primary focus:ring-dexchange-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                </div>

                {/* Champ Email */}
                <div className="space-y-1">
                    <label
                        htmlFor="email"
                        className="text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-dexchange-primary focus:ring-dexchange-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                </div>

                {/* Champ Password */}
                <div className="space-y-1">
                    <label
                        htmlFor="password"
                        className="text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Your password"
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-dexchange-primary focus:ring-dexchange-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                </div>

                {/* Switch Remember me */}
                <div className="flex items-center justify-start pt-2">
                    <label
                        htmlFor="remember-me"
                        className="relative inline-flex items-center cursor-pointer"
                    >
                        <input
                            id="remember-me"
                            type="checkbox"
                            className="sr-only peer"
                        />
                        {/* c’est un switch interactif où le cercle blanc glisse quand l’input est coché.*/}
                        <div
                            className="
    relative w-11 h-6 rounded-full bg-teal-400 dark:bg-gray-600
    after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5
    after:rounded-full after:bg-white after:transition-transform after:duration-300
    peer-checked:after:translate-x-full
  "
                        ></div>


                    </label>

                    {/* Label texte */}
                    <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm text-gray-900 dark:text-gray-300"
                    >
                        Remember me
                    </label>
                </div>

                <div className="pt-4">
                    <Button type="submit">SIGN UP</Button>
                </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                    href="/auth/login"
                    className="font-semibold text-teal-400   hover:underline"
                >
                    Sign in
                </Link>
            </p>
        </div>
    );
}

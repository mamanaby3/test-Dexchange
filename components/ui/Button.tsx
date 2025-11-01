// components/ui/Button.tsx
import * as React from 'react';

// Définit les propriétés que le composant Button peut accepter
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
    // Les classes de base garantissent le fond TURQUOISE et le texte BLANC.
    const baseClasses =
        "w-full rounded-lg px-4 py-3 font-semibold transition-colors shadow-md " +
        // COULEURS DE BASE
        "bg-teal-400 text-white " +
        "hover:bg-dexchange-primary/90 focus:outline-none focus:ring-4 focus:ring-dexchange-primary/50 " +
        "dark:bg-dexchange-primary dark:hover:bg-dexchange-primary/80";

     const finalClasses = `${baseClasses} ${className || ''}`;

    return (
        <button
            className={finalClasses}
            {...props}
        >
            {children}
        </button>
    );
}
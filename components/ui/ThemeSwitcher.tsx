'use client';
import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher() {
    const [mounted, setMounted] = React.useState(false);
    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const Icon = theme === 'dark' ? Sun : Moon;
    const label = theme === 'dark' ? 'Light Mode' : 'Dark Mode';

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-600 transition-colors duration-150 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 w-full"
        >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
        </button>
    );
}
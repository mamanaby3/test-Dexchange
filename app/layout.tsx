import './globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
    title: 'DEXCHANGE - Test Technique',
    description: 'Reproduction des designs pour le test DEXCHANGE',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" suppressHydrationWarning>
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
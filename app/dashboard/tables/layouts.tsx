// app/tables/layout.tsx
import DashboardLayout from '@/components/layout/DashboardLayout';
import * as React from 'react';

// Ce layout enveloppe app/tables/page.tsx
export default function TablesLayout({ children }: { children: React.ReactNode }) {
    return (
        // L'utilisation de DashboardLayout me permettra de voir le sidebar et le navbar du dasboard du coup seul le contenue change
        <DashboardLayout>
            {children}
        </DashboardLayout>
    );
}
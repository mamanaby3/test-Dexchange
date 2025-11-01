// app/dashboard/layout.tsx
import DashboardLayout from '@/components/layout/DashboardLayout';
import * as React from 'react';

export default function DashboardPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    );
}
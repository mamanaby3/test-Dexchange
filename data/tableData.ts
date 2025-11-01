// data/mock.ts

import {
    LayoutDashboard, Receipt, BarChart2, User, UserPlus, LogIn, Users, Globe, ShoppingCart,
    WalletMinimal, Home, Zap, CreditCard
} from 'lucide-react';

//   LIENS DE LA BARRE LATÉRALE (SIDEBAR)

export const sidebarLinks = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard', isAccount: false },
    { name: 'Transactions', icon: Receipt, href: '/transactions', isAccount: false },
    { name: 'Billing', icon: BarChart2, href: '/billing', isAccount: false },

    // Séparateur 'Account Pages'
    { name: 'Profile', icon: User, href: '/profile', isAccount: true },
    { name: 'Sign Up', icon: UserPlus, href: '/auth/register', isAccount: true },
    { name: 'Sign In', icon: LogIn, href: '/auth/login', isAccount: true },
];


//   DONNÉES DES CARTES DE STATISTIQUES (STATCARDS)

export const statCardsData = [
    {
        title: "Today's Money",
        value: "$53,000",
        percentage: 55, // Positif, utilise la couleur primaire (turquoise)
        icon: WalletMinimal,
        iconColor: 'bg-dexchange-primary', // Couleur turquoise pour l'icône
    },
    {
        title: "Today's Users",
        value: "2,300",
        percentage: 5, // Positif
        icon: Globe,
        iconColor: 'bg-red-500', // Couleur rouge pour l'icône
    },
    {
        title: "New Clients",
        value: "+3,052",
        percentage: -14, // Négatif
        icon: Globe,
        iconColor: 'bg-blue-500', // Couleur bleue pour l'icône
    },
    {
        title: "Total Sales",
        value: "$173,000",
        percentage: 8, // Positif
        icon: ShoppingCart,
        iconColor: 'bg-yellow-500', // Couleur jaune pour l'icône
    },
];


//  DONNÉES DE LA TABLE DES PROJETS

export const projectsData = [
    {
        company: 'Chakra Soft UI Version',
        // ✅ Ajout du chemin de l'image de la compagnie
        companyImage: '/images/adobe.png',
        // ✅ Chemins d'image pour les membres (avatars)
        members: [
            '/images/avatar1.jpg',
            '/images/avatar2.jpg',
            '/images/avatar3.jpg',
            '/images/avatar4.jpg',

        ],
        members2:[ '/images/avatar1.jpg',
            '/images/avatar2.jpg',
            '/images/avatar3.jpg',
            '/images/avatar4.jpg',
            '/images/avatar5.jpg', ],
        budget: '$14,000',
        status:'working',
        completion: 60,
    },
    {
        company: 'Add Progress Track',
        companyImage: '/images/jira.png',
        members: [
            '/images/avatar1.jpg',
            '/images/avatar2.jpg',
            '/images/avatar3.jpg',
            '/images/avatar4.jpg',
            '/images/avatar5.jpg',
        ],
        members2:[ '/images/avatar1.jpg',
            '/images/avatar2.jpg', ],
        budget: '$3,000',
        status:'Canceled',
        completion: 10, // Changé à 10 pour être conforme au précédent exemple
    },
    {
        company: 'Fix Platform Errors',
        companyImage: '/images/slack.png',
        members: [
            '/images/avatar1.jpg',
            '/images/avatar2.jpg',
        ],
        members2:[ ],
        budget: 'Not set',
        status:'Done',
        completion: 100,
    },
    {
        company: 'Launch our Mobile App',
        companyImage: '',
        members: [
        ],
        members2:[ ],
        budget: '$32,000',
        status:'Done',
        completion: 10, // Changé à 10 pour être cohérent avec l'exemple
    },
    {
        company: 'Add the New Pricing Page',
        companyImage: '',
        members: [
        ],
        members2:[   ],
        budget: '$400',
        status:'Canceled',
        completion: 25,
    },
    {
        company: 'Redesign New Online Shop',
        companyImage: '/images/in.png',
        members: [
            '/images/avatar1.jpg',
            '/images/avatar2.jpg'
        ],
        members2:[   ],
        budget: '$7,000',
        completion: 40,
    },
];

//  DONNÉES DE L'HISTORIQUE DES COMMANDES
export const orderHistoryData = [
    { type: 'change', description: "$2400, Design changes", date: "20 DEC", time: "2:20 PM" },
    { type: 'order', description: "New order #1215423", date: "21 DEC", time: "9:00 PM" },
    { type: 'payment', description: "Server Payments for April", date: "21 DEC", time: "3:30 PM" },
    { type: 'card', description: "New card added for order #3210145", date: "20 DEC", time: "5:32 PM" },
    { type: 'package', description: "Unlock packages for Development", date: "18 DEC", time: "11:30 PM" },
    { type: 'order', description: "New order #6513528", date: "18 DEC", time: "8:47 PM" },
    { type: 'change', description: "Update license key", date: "17 DEC", time: "10:00 AM" },
    { type: 'api', description: "New API integration", date: "16 DEC", time: "4:00 PM" },
];
export const authorsData = [
    {
        name: 'Esthera Jackson',
        email: 'esthera@simmmple.com',
        role: 'Manager',
        sousrole: 'Organization',
        status: 'Online',
        date: '14/06/21',
        avatarId: 'a1',
    },
    {
        name: 'Alexa Liras',
        email: 'alexa@simmmple.com',
        role: 'Programmer',
        sousrole: 'Developer',
        status: 'Offline',
        date: '14/06/21',
        avatarId: 'a2',
    },
    {
        name: 'Laurent Michael',
        email: 'laurent@simmmple.com',
        role: 'Executive',
        sousrole: 'Projects',
        status: 'Online',
        date: '14/06/21',
        avatarId: 'a3',
    },
    {
        name: 'Freduardo Hill',
        email: 'freduardo@simmmple.com',
        role: 'Manager',
        sousrole: 'Organization',
        status: 'Online',
        date: '14/06/21',
        avatarId: 'a4',
    },
    {
        name: 'Daniel Thomas',
        email: 'daniel@simmmple.com',
        role: 'Programmer',
        sousrole: 'Developer',
        status: 'Offline',
        date: '14/06/21',
        avatarId: 'a5',
    },
    {
        name: 'Mark Wilson',
        email: 'mark@simmmple.com',
        role: 'Designer',
        sousrole: 'UI/UX Design',
        status: 'Online',
        date: '14/06/21',
        avatarId: 'a6',
    },
];
export const navSections = [
    // 1. SECTION PRINCIPALE
    {
        title: null,
        items: [
            { name: 'Dashboard', href: '/dashboard', icon: Home },
            { name: 'Tables', href: '/dashboard/tables', icon: Zap }, // Corrigé : utilise /dashboard/tables
            { name: 'Billing', href: '/dashboard/billing', icon: CreditCard },
            { name: 'RTL', href: '/rtl', icon: Globe },
        ]
    },

    // 2. LIEN SPÉCIFIQUE (RTL)
    // {
    //     title: null,
    //     items: [
    //         { name: 'RTL', href: '/rtl', icon: Globe },
    //     ]
    // },

    // 3. SECTION COMPTES (ACCOUNT PAGES)
    {
        title: 'ACCOUNT PAGES',
        items: [
            { name: 'Profile', href: '/dashboard/profile', icon: User },
            { name: 'Sign In', href: '/auth/login', icon: LogIn },
            { name: 'Sign Up', href: '/auth/register', icon: UserPlus },
        ]
    }
];
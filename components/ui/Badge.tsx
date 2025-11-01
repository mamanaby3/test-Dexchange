export default function Badge({ children }: { children: React.ReactNode }) {
    return <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100 rounded-full">{children}</span>
}

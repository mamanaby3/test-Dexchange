type Props = { columns: { key: string, title: string }[], data: any[] }
export default function Table({ columns, data }: Props) {
    return (
        <table className="w-full border-collapse">
            <thead>
            <tr>
                {columns.map(c => <th key={c.key} className="border p-2 text-left">{c.title}</th>)}
            </tr>
            </thead>
            <tbody>
            {data.map((row, i) => (
                <tr key={i} className="even:bg-gray-100 dark:even:bg-slate-700">
                    {columns.map(c => <td key={c.key} className="border p-2">{row[c.key]}</td>)}
                </tr>
            ))}
            </tbody>
        </table>
    )
}

import { fetchSpreadsheetData } from "@/lib/spreadsheetUtils";
import NavigationButton from "@/components/NavigationButton";

export default async function DashboardPage() {
    const range = "Sheet1!A1:Z10";

    const rawData = await fetchSpreadsheetData(range);
    // const transformedData: SheetRow[] = rawData ? transformData(rawData) : [];
    // console.log("Dados transformados:", transformedData);

    return (
        <div className="w-full min-h-screen p-6">
            <div className="flex justify-between space-x-8 mb-3">
                <NavigationButton 
                    title="Voltar"
                    path="/"
                />
                <NavigationButton 
                    title="Formulário"
                    path="form"
                />
            </div>

            <h3 className="text-xl font-bold text-white uppercase">Dados da Planilha</h3>

            {rawData && rawData.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="border-collapse w-full">
                        <thead>
                            <tr>
                                {rawData[0].map((header: string, index: number) => (
                                    <th
                                        key={index}
                                        className="text-center bg-gray-200 border border-gray-300 min-w-60"
                                    >
                                        {header.replace(/'/g, "")}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rawData.slice(1).map((row: string[], rowIndex: number) => (
                                <tr key={rowIndex}>
                                    {row.map((cell: string, cellIndex: number) => (
                                        <td
                                            key={cellIndex}
                                            className="p-2 border border-gray-500 bg-zinc-300"
                                        >
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Sem dados para exibir.</p>
            )}
        </div>
    );
}

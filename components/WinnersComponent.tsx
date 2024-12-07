import { fetchSpreadsheetData, transformData, calculateWinners } from "@/lib/spreadsheetUtils";
import CardWinner from "@/components/CardWinner";

export default async function WinnersComponent() {
    const range = "Sheet1!A1:Z10";
    const rawData = await fetchSpreadsheetData(range);
    const transformedData = rawData ? transformData(rawData) : [];
    const winners = transformedData.length > 0 ? calculateWinners(transformedData) : {};
    
    return (
        <div>
            <h3 className="text-2xl text-white font-bold uppercase mb-6 text-center">
                Vencedores por Categoria
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center">
                {Object.entries(winners).map(([category, winner]) => (
                    <CardWinner
                    key={category}
                    category={category}
                    winner={winner}
                    />
                ))}
            </div>
        </div>
    );
}
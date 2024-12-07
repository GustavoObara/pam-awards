import { google } from "googleapis";

export type SheetRow = Record<string, string>;

export async function fetchSpreadsheetData(range: string): Promise<string[][] | null> {
    const auth = await google.auth.getClient({
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    });

    return response.data.values || null;
}

export function transformData(data: string[][]): SheetRow[] {
    if (!data || data.length < 2) {
        return [];
    }

    const [headers, ...rows] = data;
    return rows.map((row) =>
        headers.reduce<SheetRow>((acc, header, index) => {
            acc[header] = row[index] || "";
            return acc;
        }, {})
    );
}

export function calculateWinners(data: SheetRow[]): Record<string, string> {
    const voteCounts: Record<string, Record<string, number>> = {};

    data.forEach((row) => {
        Object.entries(row).forEach(([category, nominee]) => {
            if (category === "Carimbo de data/hora" || category === "Endereço de e-mail") {
                return; 
            }

            if (!voteCounts[category]) {
                voteCounts[category] = {};
            }

            if (!voteCounts[category][nominee]) {
                voteCounts[category][nominee] = 0;
            }

            voteCounts[category][nominee]++;
        });
    });

    const winners: Record<string, string> = {};
    Object.entries(voteCounts).forEach(([category, nominees]) => {
        const [winner] = Object.entries(nominees).reduce((a, b) => (b[1] > a[1] ? b : a));
        winners[category] = winner;
    });

    return winners;
}
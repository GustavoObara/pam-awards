import { StaticImageData } from "next/image";
import Image from "next/image";

import ana from "@/assets/images/ana.jpg";
import debora from "@/assets/images/debora.jpg";
import julia from "@/assets/images/júlia.jpg";
import lucas from "@/assets/images/lucas.jpg";
import matheus from "@/assets/images/matheus.jpg";
import natali from "@/assets/images/natali.jpg";
import pamela from "@/assets/images/pamela.jpg";
import tacyla from "@/assets/images/tacyla.jpg";
import victor from "@/assets/images/victor.jpg";
import talita from "@/assets/images/talita.jpg"


const winnerImages: Record<string, StaticImageData> = {
    Ana: ana,
    Debora: debora,
    Júlia: julia,
    Lucas: lucas,
    Matheus: matheus,
    Natali: natali,
    Pâmela: pamela,
    Tácyla: tacyla,
    Victor: victor,
    Talita: talita
};

interface CardWinnerProps {
    category: string;
    winner: string;
}

export default function CardWinner({ category, winner }: CardWinnerProps) {
    const imagePath = winnerImages[winner];

    return (
        <div className="w-full h-100 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-3 text-center">
            <h3 className="text-lg font-bold text-gray-800 uppercase">{category.replace(/'/g, "")}</h3>
            <div className="w-80 h-80 rounded bg-gray-200 overflow-hidden mt-2 mb-2">
                <Image
                    src={imagePath}
                    alt={winner}
                    priority
                    className="object-cover w-full h-full rounded"
                />
            </div>
            <p className="text-gray-600 text-xl uppercase font-semibold">{winner}</p>
        </div>
    );
}
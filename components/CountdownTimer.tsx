"use client";

import { useState, useEffect, useCallback } from "react";

const CountdownTimer = ({ onComplete }: { onComplete: () => void }) => {
    const targetDate = new Date("2024-12-20T12:00:00-03:00").getTime();
    const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);

    const calculateTimeLeft = useCallback(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return null;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }, [targetDate]);

    useEffect(() => {
        const timer = setInterval(() => {
            const updatedTimeLeft = calculateTimeLeft();
            setTimeLeft(updatedTimeLeft);

            if (!updatedTimeLeft) {
                clearInterval(timer);
                onComplete(); 
            }
        }, 1000);

        return () => clearInterval(timer); 
    }, [calculateTimeLeft, onComplete]);

    if (timeLeft === null) {
        return null;
    }

    return (
        <div className="text-center px-3 py-5">
            <h3 className="text-2xl  font-bold mb-4 text-zinc-50 lg:text-5xl uppercase">Contagem Regressiva</h3>
            <div className="flex justify-center space-x-4 text-lg font-medium">
                <div className="mx-3 bg-pam-700 rounded min-w-24 h-20 lg:w-48 lg:h-48 flex flex-col justify-center items-center">
                    <div className="text-3xl lg:text-5xl font-bold text-zinc-50">{timeLeft.days}</div>
                    <div className="text-white text-lg lg:text-3xl font-bold">Dias</div>
                </div>
                <div className="mx-3 bg-pam-700 rounded min-w-24 h-20 lg:w-48 lg:h-48 flex flex-col justify-center items-center">
                    <div className="text-3xl lg:text-5xl font-bold text-zinc-50">{timeLeft.hours}</div>
                    <div className="text-white text-lg lg:text-3xl font-bold">Horas</div>
                </div>
                <div className="mx-3 bg-pam-700 rounded min-w-24 h-20 lg:w-48 lg:h-48 flex flex-col justify-center items-center">
                    <div className="text-3xl lg:text-5xl font-bold text-zinc-50">{timeLeft.minutes}</div>
                    <div className="text-white text-lg lg:text-3xl font-bold">Minutos</div>
                </div>
                <div className="mx-3 bg-pam-700 rounded min-w-24 h-20 lg:w-48 lg:h-48 flex flex-col justify-center items-center">
                    <div className="text-3xl lg:text-5xl font-bold text-zinc-50">{timeLeft.seconds}</div>
                    <div className="text-white text-lg lg:text-3xl font-bold">Segundos</div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;

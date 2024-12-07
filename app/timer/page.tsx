"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CountdownTimer from "@/components/CountdownTimer";
import NavigationButton from "@/components/NavigationButton";

export default function WinnersPage() {
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (visible) {
            router.push("/winners");
        }
    }, [visible, router]);

    useEffect(() => {
        setVisible(false);
    }, []);

    return (
        <div className="w-full min-h-screen p-6">
            <div className="flex justify-between space-x-8 mb-3">
                <NavigationButton title="Voltar" path="/" />
                <NavigationButton title="Formulário" path="/form" />
            </div>

            {visible ? null : (
                <CountdownTimer onComplete={() => setVisible(true)} />
            )}
        </div>
    );
}

import NavigationButton from "@/components/NavigationButton";
import GoogleFormEmbed from "@/components/GoogleFormEmbed";

export default function Form() {
    return (
        <div className="w-full min-h-screen p-6">
            <div className="flex justify-between space-x-8 mb-3">
                <NavigationButton 
                    title="Voltar"
                    path="/"
                />
                <NavigationButton 
                    title="Vencedores"
                    path="timer"
                />
            </div>
            <div className="flex justify-center items-center">
                <GoogleFormEmbed />
            </div>
        </div>
    );
}
import NavigationButton from "@/components/NavigationButton";
import WinnersComponent from "@/components/WinnersComponent";

export default function WinnersPage() {

    return (
        <div className="w-full min-h-screen p-6">
            <div className="flex justify-between space-x-8 mb-3">
                <NavigationButton 
                    title="Voltar"
                    path="/"
                />
                <NavigationButton 
                    title="Formulário"
                    path="/form"
                />
            </div>

            <WinnersComponent />
        </div>
    );
}

import NavigationButton from "@/components/NavigationButton";
import WinnersComponent from "@/components/WinnersComponent";

export default function WinnersPage() {
    const targetDate = new Date("2024-12-20T12:00:00-03:00").getTime();
    const currentDate = new Date().getTime();

    const isEventDate = currentDate >= targetDate;

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

            {isEventDate ? (
                <WinnersComponent />
            ) : (
                <div className="text-center text-xl font-bold uppercase lg:text-3xl text-white ">
                    O evento ainda não começou.
                    <div className="mt-3">
                        <NavigationButton 
                            title="Voltar ao Timer"
                            path="/timer"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

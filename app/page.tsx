import NavigationButton from "@/components/NavigationButton";
import oscar from "@/assets/oscar.png";
import logo from "@/assets/logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <div className="flex space-x-4 w-full">
        <Image 
          src={oscar} 
          alt="Imagem Oscar" 
          priority 
          className="w-1/3"
        />
        <Image
          src={logo}
          alt="Logo Pamela Oliveira Arquitetura"
          priority
          className="w-2/3"
        />
      </div>
      <div className="flex space-x-8">
        <NavigationButton 
          title="Vencedores"
          path="timer"
        />
        <NavigationButton 
          title="Formulário"
          path="form"
        />
      </div>
    </div>
  );
}
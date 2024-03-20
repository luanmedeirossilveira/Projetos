import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, X } from "lucide-react";
import Image from "next/image";

export default function Apresentation() {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col w-1/2 gap-4 p-10">
        <h1 className="text-2xl">Seja bem-vindo, sou</h1>
        <p className="text-5xl font-bold">Luan Medeiros Silveira</p>
        <p className="text-5xl font-bold text-sky-600">Software Engineer</p>
        <p className="text-xl">
          Venho trazer minhas experiências profissionais e meus hard skills e
          soft skills com projetos finalizados e em andamento
        </p>

        <Button
          variant="default"
          size="lg"
          className="bg-sky-600 hover:bg-sky-700 ease-out duration-300 w-48"
        >
          Vamos Começar
        </Button>

        <div className="flex gap-4 items-center">
          <p className="text-sm font-bold">
            Minhas Redes
          </p>
          <Linkedin className="w-6 h-6" />
          <Twitter className="w-6 h-6" />
        </div>
      </div>
      <div className="w-1/2 p-10 flex justify-center ">
        <Image
          src="/profile.png"
          alt="Luan Medeiros Silveira"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}

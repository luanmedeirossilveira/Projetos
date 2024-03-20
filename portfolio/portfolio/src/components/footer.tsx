import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-[1px] border-slate-400 bg-transparent text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Entre em Contato</h3>
          <p>Email: luanmedeirossilveira@gmail.com</p>
          <p>Telefone: (51) 99339-4478</p>
        </div>
        <div className="flex items-center">
          <p className="mr-4">Siga-nos nas redes sociais:</p>
          <div className="flex">
            <a href="#" className="mr-2 text-white hover:text-gray-400">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-slate-400 mt-4 pt-4 text-center">
        <p>&copy; 2024 Luan Medeiros Silveira. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
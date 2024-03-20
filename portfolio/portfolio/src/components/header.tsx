import { Button } from "./ui/button"

export default function Header() {
  return (
    <header className="p-4">
      <nav className="flex justify-end gap-2 p-4">
        <Button variant="ghost" className="hover:text-sky-600">Página Inicial</Button>
        <Button variant="ghost" className="hover:text-sky-600">Habilidades</Button>
        <Button variant="ghost" className="hover:text-sky-600">Projetos</Button>
        <Button variant="ghost" className="hover:text-sky-600">Contato</Button>
      </nav>
    </header>
  );
}

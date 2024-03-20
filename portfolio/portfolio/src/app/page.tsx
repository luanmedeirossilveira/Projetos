import Header from "@/components/header";
import Image from "next/image";
import Apresentation from "./components/apresentation";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Apresentation />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

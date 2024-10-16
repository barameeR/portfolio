import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import {
  FaInfoCircle,
  FaProjectDiagram,
  FaCommentDots,
  FaEnvelope,
} from "react-icons/fa";

export default function Home() {
  const navItems = [
    { name: "About", link: "/about", icon: <FaInfoCircle /> },
    { name: "Project", link: "/project", icon: <FaProjectDiagram /> },
    { name: "Testimonials", link: "/testimonials", icon: <FaCommentDots /> },
    { name: "Contact", link: "/contact", icon: <FaEnvelope /> },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}

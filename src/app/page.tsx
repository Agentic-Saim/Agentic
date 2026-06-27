import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative w-full bg-[#0a0a0a]">
      <Navbar />
      <ScrollyCanvas />
      <Projects />
    </div>
  );
}

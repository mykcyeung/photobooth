import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <Contact />
      </div>
    </main>
  );
}

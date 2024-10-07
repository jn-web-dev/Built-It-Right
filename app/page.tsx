import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max max-w-7xl w-full">
          <Nav />
          <Hero />
          
        </div>
      </main>
    
  );
}

import Image from "next/image";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <>
      <h1>I am home </h1>
      <Navbar />
      <main className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/us.jpeg')" }}>

      </main>
    
    
    </>
  );
}

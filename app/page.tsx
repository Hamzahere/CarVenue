import { SearchBar, CustomFilter, Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore out cars you might like</p>
      </div>
      <div className="home__filters">
        <SearchBar />
      </div>
    </main>
  );
}

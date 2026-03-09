"use client";

import NavBar from "./components/ui/NavBar";
import HeroSection from "./components/ui/HeroSection";
import CityCard from "./components/ui/CityCard";
import ListingCard from "./components/ui/ListingCard";
import RoastersCard from "./components/ui/RoastersCard";
import Footer from "./components/ui/Footer";

// Dummy Data
import cafes from "../dummyData/cafes";
import neighbourhoods from "../dummyData/neighbourhoods";
import roasters from "../dummyData/roasters";
import NeighbourhoodCard from "./components/ui/NeighbourhoodCard";

export default function Home() {
  return (
    <>
      <div className="flex flex-col p-4 border-b-1">
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-16 items-center w-full max-w-7xl">
          <HeroSection />

          <div className="flex flex-col">
            <h2 className="py-4">Best cities for coffee</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <CityCard name={`Sydney`} />
              <CityCard name={`Melbourne`} />
              <CityCard name={`San Francisco`} />
            </section>
            <h2 className="py-4">Great cafes from around the world</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cafes.map((cafe) => (
                <ListingCard
                  key={cafe.name}
                  name={cafe.name}
                  image={cafe.image}
                  suburb={cafe.suburb}
                  city={cafe.city}
                  url={cafe.url}
                />
              ))}
            </section>
            <h2 className="py-4">
              Explore the Best coffee Neighbourhood from around the world
            </h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighbourhoods.map((neighbourhood) => (
                <NeighbourhoodCard
                  key={neighbourhood.name}
                  name={neighbourhood.name}
                  image={neighbourhood.image}
                  city={neighbourhood.city}
                  url={neighbourhood.url}
                />
              ))}
            </section>
            <h2 className="py-4">Explore Roasters</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {roasters.map((roaster) => (
                <RoastersCard
                  key={roaster.name}
                  name={roaster.name}
                  image={roaster.image}
                  city={roaster.city}
                  url={roaster.url}
                />
              ))}
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

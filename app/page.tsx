"use client";

import NavBar from "./components/ui/NavBar";
import ListingCard from "./components/ui/ListingCard";
import CityCard from "./components/ui/CityCard";

export default function Home() {
  return (
    <>
      <div className="flex flex-col p-4 border-b-1">
        <NavBar />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
          <h2>Best cities for coffee</h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CityCard name={`Sydney`} />
            <CityCard name={`Melbourne`} />
            <CityCard name={`San Francisco`} />
          </section>
          <h2>Great cafes from around the world</h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
          </section>
          <h2>Explore the Best coffee Neighbourhood from around the world</h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
          </section>
          <h2>Explore Roasters</h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
          </section>
        </main>
      </div>
    </>
  );
}

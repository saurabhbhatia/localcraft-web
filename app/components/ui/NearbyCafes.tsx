"use client";

import ListingCard from "./ListingCard";
import cafes from "@/dummyData/cafes";

interface NearbyCafe {
  name: string;
  suburb: string;
  city: string;
}

interface NearbyCafesProps {
  title: string;
  nearbyCafes: NearbyCafe[];
}

export default function NearbyCafes({ title, nearbyCafes }: NearbyCafesProps) {
  // Enrich the nearby cafes data with images and urls from the master cafes list
  const enrichedCafes = nearbyCafes.map((nearby) => {
    const masterData = cafes.find(
      (c) => c.name.toLowerCase() === nearby.name.toLowerCase()
    );
    return {
      ...nearby,
      image: masterData?.image,
      url: masterData?.url,
    };
  });

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrichedCafes.map((cafe) => (
          <ListingCard
            key={cafe.name}
            name={cafe.name}
            image={cafe.image}
            suburb={cafe.suburb}
            city={cafe.city}
            url={cafe.url}
          />
        ))}
      </div>
    </section>
  );
}

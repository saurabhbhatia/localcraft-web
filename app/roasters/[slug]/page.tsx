"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { IoGlobe, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import roasters from "@/dummyData/roasters";
import cafes from "@/dummyData/cafes";
import ListingCard from "@/app/components/ui/ListingCard";
import Breadcrumbs from "@/app/components/ui/Breadcrumbs";

// Dynamic import for Map to avoid SSR issues with Leaflet
const Map = dynamic(() => import("@/app/components/ui/Map"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-full rounded-xl bg-gray-100 animate-pulse flex items-center justify-center">
      <p className="text-gray-400">Loading Map...</p>
    </div>
  ),
});

export default function RoasterPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find the roaster from the slug, or just use a default one
  const roasterData = roasters.find(
    (r) => r.name.toLowerCase().replace(/\s+/g, "-") === slug
  ) || {
    name: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    city: "Sydney",
    image:
      "https://images.unsplash.com/photo-1501339817302-ee460730fe58?q=80&w=2070&auto=format&fit=crop",
    url: `/roasters/${slug}/`,
  };

  const social = {
    facebook: true,
    instagram: true,
  };

  const address = `${roasterData.name} Roastery, ${roasterData.city}`;
  const hours = "8:00am - 4:00pm";
  const location: [number, number] = [-33.8823, 151.2104]; // Default coordinates

  // Mock "Cafes Using This Roaster" using our cafes list
  const usingCafes = cafes.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs
        crumbs={[
          {
            label: roasterData.city,
            href: `/city/${roasterData.city.toLowerCase().replace(/\s+/g, "-")}`,
          },
          { label: roasterData.name },
        ]}
        className="mb-8"
      />
      {/* Title Section */}
      <div className="flex items-center gap-4 w-full border-b pb-6 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
          <Image
            src={roasterData.image}
            alt={`${roasterData.name} Logo`}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-900">{roasterData.name}</h1>
        <div className="flex gap-2 ml-auto">
          <IoGlobe className="w-6 h-6 text-gray-600 cursor-pointer" />
          {social.facebook && (
            <IoLogoFacebook className="w-6 h-6 text-gray-600 cursor-pointer" />
          )}
          {social.instagram && (
            <IoLogoInstagram className="w-6 h-6 text-gray-600 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
        {/* Left Column: Location */}
        <div className="md:col-span-1 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <Map center={location} markerText={roasterData.name} />

            <div className="space-y-4 pt-4 text-gray-600">
              <div>
                <p className="font-medium text-gray-900">Address</p>
                <p>{address}</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">City</p>
                <p>{roasterData.city}</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Opening Hours</p>
                <p>{hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: About */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              About {roasterData.name}
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
              <p>
                {roasterData.name} is a renowned coffee roaster located in{" "}
                {roasterData.city}. They are dedicated to sourcing high-quality
                beans and roasting them to perfection, bringing out unique and
                complex flavor profiles.
              </p>
              <p>
                With a focus on sustainability and ethical sourcing,{" "}
                {roasterData.name} works closely with farmers to ensure fair
                practices. Their commitment to the craft has made them a favorite
                among coffee enthusiasts and specialty cafes alike.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cafes Using This Roaster Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Cafes Using This Roaster</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usingCafes.map((cafe) => (
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
    </div>
  );
}

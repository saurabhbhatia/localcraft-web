"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { IoGlobe, IoLogoFacebook, IoLogoInstagram, IoStar, IoLocationSharp } from "react-icons/io5";
import cafes from "@/dummyData/cafes";
import citiesData from "@/dummyData/cities";
import NearbyCafes from "@/app/components/ui/NearbyCafes";
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

export default function CafePage() {
  const params = useParams();
  const slug = params.slug as string;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Find cafe from master list
  const baseCafe =
    cafes.find((c) => c.url.endsWith(`/${slug}`)) ||
    cafes.find((c) => c.name.toLowerCase().replace(/\s+/g, "-") === slug);

  // Fallback name if completely unknown
  const fallbackName = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  // Look up exact coordinates from cities.ts if possible
  let location: [number, number] = [-33.8823, 151.2104];
  if (baseCafe) {
    for (const city of citiesData) {
      const cityCafe = city.cafes.find((c) => c.name === baseCafe.name);
      if (cityCafe) {
        location = [cityCafe.lat, cityCafe.lng];
        break;
      }
    }
  }

  // Construct dynamic cafe data using found details or sensible fallbacks
  const cafeData = {
    name: baseCafe?.name || fallbackName,
    suburb: baseCafe?.suburb || "Local Suburb",
    city: baseCafe?.city || "Sydney",
    image:
      baseCafe?.image ||
      "https://images.unsplash.com/photo-1501339817302-ee460730fe58?q=80&w=2070&auto=format&fit=crop",
    rating: (Math.random() * (5.0 - 4.2) + 4.2).toFixed(1), // Random rating between 4.2 and 5.0
    review_count: Math.floor(Math.random() * 500) + 50,
    roaster: baseCafe?.name.includes("Roaster")
      ? baseCafe.name
      : "Single O Coffee Roasters", // Fallback roaster
    address: `${baseCafe?.name || fallbackName}, Main St, ${
      baseCafe?.suburb || "Local"
    }, Australia`,
    hours: "7:00am - 4:00pm",
    social: {
      facebook: true,
      instagram: true,
    },
    nearby_cafes: cafes.filter((c) => c.name !== baseCafe?.name).slice(0, 6),
  };

  if (!mounted) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="h-8 w-48 bg-stone-100 rounded animate-pulse mb-8" />
        <div className="flex items-center gap-4 border-b pb-6 mb-4">
          <div className="w-16 h-16 rounded-full bg-stone-100 animate-pulse flex-shrink-0" />
          <div className="h-10 w-64 bg-stone-100 rounded animate-pulse" />
        </div>
        <div className="flex items-center justify-between w-full py-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-stone-100 animate-pulse" />
            <div className="h-4 w-24 bg-stone-100 rounded animate-pulse" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
          <div className="md:col-span-1">
            <div className="h-[300px] w-full rounded-xl bg-stone-100 animate-pulse" />
          </div>
          <div className="md:col-span-2 space-y-4">
            <div className="h-[300px] w-full bg-stone-100 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (!baseCafe) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-stone-100 flex items-center justify-center">
            <IoLocationSharp className="w-10 h-10 text-stone-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Cafe Not Found</h1>
          <p className="text-gray-500 max-w-md">
            We couldn&apos;t find a cafe matching &quot;{slug}&quot;. Try exploring
            one of our featured cafes instead.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs
        crumbs={[
          {
            label: cafeData.city,
            href: `/city/${cafeData.city.toLowerCase().replace(/\s+/g, "-")}`,
          },
          { label: cafeData.name },
        ]}
        className="mb-8"
      />
      {/* Title Section */}
      <div className="flex items-center gap-4 w-full border-b pb-6 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
          <Image
            src={cafeData.image}
            alt={`${cafeData.name} Logo`}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-900">{cafeData.name}</h1>
        <div className="flex gap-2 ml-auto">
          <IoGlobe className="w-6 h-6 text-gray-600 cursor-pointer hover:text-stone-900 transition-colors" />
          {cafeData.social?.facebook && (
            <IoLogoFacebook className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
          )}
          {cafeData.social?.instagram && (
            <IoLogoInstagram className="w-6 h-6 text-gray-600 cursor-pointer hover:text-pink-600 transition-colors" />
          )}
        </div>
      </div>

      {/* Roaster and Rating Section */}
      <div className="flex items-center justify-between w-full py-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
            <Image
              src={cafeData.image} // Using cafe image as roaster logo placeholder
              alt={cafeData.roaster}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">
              {cafeData.roaster}
            </span>
            <Link
              href={`/roasters/${cafeData.roaster
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="text-xs text-blue-600 hover:underline"
            >
              View Roaster
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100">
          <IoStar className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-bold text-gray-900">
            {cafeData.rating}
          </span>
          <span className="text-xs text-gray-500">
            ({cafeData.review_count})
          </span>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column: Location */}
        <div className="md:col-span-1 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <Map center={location} markerText={cafeData.name} />

            <div className="space-y-4 pt-4 text-gray-600">
              <div>
                <p className="font-medium text-gray-900">Address</p>
                <p>{cafeData.address}</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Suburb</p>
                <p>{cafeData.suburb}</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">City</p>
                <p>{cafeData.city}</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Opening Hours</p>
                <p>{cafeData.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Photo and About */}
        <div className="md:col-span-2 space-y-8">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={cafeData.image}
              alt={cafeData.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              About {cafeData.name}
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
              <p>
                {cafeData.name} is a pioneer in the {cafeData.city} coffee scene,
                renowned for its commitment to sourcing, roasting, and serving
                exceptional specialty coffee. Located in the heart of{" "}
                {cafeData.suburb}, this iconic cafe has been a staple for coffee
                enthusiasts since its inception.
              </p>
              <p>
                Whether you&apos;re looking for a perfectly pulled espresso, a
                nuanced pour-over, or a delicious breakfast to accompany your
                brew, {cafeData.name} delivers an unparalleled experience. Their
                roastery partner, {cafeData.roaster}, continues to push boundaries
                and set standards in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Cafes Section */}
      <NearbyCafes
        title={`Other Great Cafes`}
        nearbyCafes={cafeData.nearby_cafes}
      />
    </div>
  );
}

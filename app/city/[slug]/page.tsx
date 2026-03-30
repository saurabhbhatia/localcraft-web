"use client";

import { useParams } from "next/navigation";
import { useState, useMemo, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import ListingCard from "@/app/components/ui/ListingCard";
import cities from "@/dummyData/cities";
import type { BoundingBox } from "@/app/components/ui/CityMap";
import type { CafeListing } from "@/dummyData/cities";
import { IoLocationSharp, IoCafe } from "react-icons/io5";
import Link from "next/link";
import Breadcrumbs from "@/app/components/ui/Breadcrumbs";

// Dynamic import for CityMap to avoid SSR issues with Leaflet
const CityMap = dynamic(() => import("@/app/components/ui/CityMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full bg-gradient-to-br from-stone-100 to-stone-200 animate-pulse flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-3 border-stone-300 border-t-stone-600 rounded-full animate-spin" />
        <p className="text-stone-400 font-medium">Loading Map...</p>
      </div>
    </div>
  ),
});

export default function CityPage() {
  const params = useParams();
  const slug = params.slug as string;

  const city = cities.find((c) => c.slug === slug);

  const [bounds, setBounds] = useState<BoundingBox | null>(null);
  const [hoveredCafe, setHoveredCafe] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleBoundsChange = useCallback((newBounds: BoundingBox) => {
    setBounds(newBounds);
  }, []);

  // Filter cafes to those within the current map bounding box
  const visibleCafes: CafeListing[] = useMemo(() => {
    if (!city) return [];
    if (!bounds) return city.cafes;

    return city.cafes.filter(
      (cafe) =>
        cafe.lat >= bounds.south &&
        cafe.lat <= bounds.north &&
        cafe.lng >= bounds.west &&
        cafe.lng <= bounds.east
    );
  }, [city, bounds]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="h-[500px] w-full bg-stone-100 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="h-10 w-64 bg-stone-200 rounded mb-8 animate-pulse"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
               <div key={i} className="h-64 w-full bg-stone-100 rounded-xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!city) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-stone-100 flex items-center justify-center">
            <IoLocationSharp className="w-10 h-10 text-stone-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">City Not Found</h1>
          <p className="text-gray-500 max-w-md">
            We couldn&apos;t find a city matching &quot;{slug}&quot;. Try
            exploring one of our featured coffee cities.
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
    <div className="min-h-screen bg-white">
      {/* ── Hero Section with Map ── */}
      <section className="relative">
        {/* Title overlay on top of map */}
        <div className="absolute top-0 left-0 right-0 z-[1000] pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 pt-6">
            <div className="pointer-events-auto inline-flex flex-col gap-1 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg border border-stone-200/60">
              <Breadcrumbs crumbs={[{ label: city.name }]} />
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                {city.name}
              </h1>
              <p className="text-sm text-stone-500 font-medium">
                {city.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Cafe count badge */}
        <div className="absolute bottom-4 left-0 right-0 z-[1000] pointer-events-none">
          <div className="max-w-7xl mx-auto px-6">
            <div className="pointer-events-auto inline-flex items-center gap-2 bg-stone-900/80 backdrop-blur-md text-white rounded-full px-4 py-2 text-sm font-medium shadow-lg">
              <IoCafe className="w-4 h-4" />
              <span>
                {visibleCafes.length} {visibleCafes.length === 1 ? "cafe" : "cafes"} in view
              </span>
            </div>
          </div>
        </div>

        {/* The Map */}
        <CityMap
          center={city.center}
          cafes={city.cafes}
          zoom={city.zoom}
          onBoundsChange={handleBoundsChange}
          hoveredCafe={hoveredCafe}
        />
      </section>

      {/* ── Listings Section ── */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Explore Cafes in {city.name}
            </h2>
            <p className="text-stone-500 mt-1">
              {city.description}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-stone-400 shrink-0">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Showing {visibleCafes.length} of {city.cafes.length} cafes
          </div>
        </div>

        {/* Cafe Cards Grid */}
        {visibleCafes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCafes.map((cafe) => (
              <div
                key={cafe.name}
                onMouseEnter={() => setHoveredCafe(cafe.name)}
                onMouseLeave={() => setHoveredCafe(null)}
                className="transition-transform duration-200 ease-out hover:-translate-y-1"
              >
                <ListingCard
                  name={cafe.name}
                  image={cafe.image}
                  suburb={cafe.suburb}
                  city={cafe.city}
                  url={cafe.url}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto rounded-full bg-stone-100 flex items-center justify-center mb-4">
              <IoCafe className="w-8 h-8 text-stone-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No cafes in this area
            </h3>
            <p className="text-stone-500 max-w-md mx-auto">
              Try zooming out or panning the map to discover more cafes in{" "}
              {city.name}.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

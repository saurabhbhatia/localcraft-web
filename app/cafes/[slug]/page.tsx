"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { IoGlobe, IoLogoFacebook, IoLogoInstagram, IoStar } from "react-icons/io5";
import singleo from "../../../dummyData/singleo";
import cafes from "../../../dummyData/cafes";
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

export default function Cafe() {
  // In a real app, we would use params to find the cafe.
  // For now, we use the provided singleo data as instructed.
  const cafeData = singleo;

  // Find the image from the cafes list
  const cafeImage =
    cafes.find((c) => c.name === cafeData.name)?.image ||
    "https://images.unsplash.com/photo-1501339817302-ee460730fe58?q=80&w=2070&auto=format&fit=crop";
  console.log(cafeImage);

  // Default coordinates for Single O Surry Hills
  const location: [number, number] = [-33.8823, 151.2104];

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
            src={cafeImage}
            alt={`${cafeData.name} Logo`}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-900">{cafeData.name}</h1>
        <div className="flex gap-2 ml-auto">
          <IoGlobe className="w-6 h-6 text-gray-600" />
          {cafeData.social?.facebook && (
            <IoLogoFacebook className="w-6 h-6 text-gray-600" />
          )}
          {cafeData.social?.instagram && (
            <IoLogoInstagram className="w-6 h-6 text-gray-600" />
          )}
        </div>
      </div>

      {/* Roaster and Rating Section */}
      <div className="flex items-center justify-between w-full py-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
            <Image
              src={cafeImage} // Using cafe image as roaster logo placeholder
              alt={cafeData.roaster}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">{cafeData.roaster}</span>
            <Link 
              href={`/roasters/${cafeData.roaster.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs text-blue-600 hover:underline"
            >
              View Roaster
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100">
          <IoStar className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-bold text-gray-900">{cafeData.rating}</span>
          <span className="text-xs text-gray-500">({cafeData.review_count})</span>
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
              src={cafeImage}
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
                {cafeData.name} is a pioneer in the Sydney coffee scene,
                renowned for its commitment to sourcing, roasting, and serving
                exceptional specialty coffee. Located in the heart of{" "}
                {cafeData.suburb}, this iconic cafe has been a staple for coffee
                enthusiasts since its inception.
              </p>
              <p>
                Whether you&apos;re looking for a perfectly pulled espresso, a
                nuanced pour-over, or a delicious breakfast to accompany your
                brew, {cafeData.name} delivers an unparalleled experience. Their
                roastery, {cafeData.roaster}, continues to push boundaries and
                set standards in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Cafes Section */}
      <NearbyCafes 
        title={`Cafes Around ${cafeData.name}`} 
        nearbyCafes={cafeData.nearby_cafes_sydney} 
      />
    </div>
  );
}

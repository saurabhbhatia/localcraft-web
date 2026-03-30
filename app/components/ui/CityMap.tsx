"use client";

import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useCallback } from "react";
import type { CafeListing } from "@/dummyData/cities";
import Link from "next/link";

// Custom coffee marker icon
const coffeeIcon = L.divIcon({
  html: `
    <div style="background:#fff;padding:6px;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.25);border:2px solid #8B4513;display:flex;align-items:center;justify-content:center;">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style="color: #8B4513;">
        <path d="M416 176h-40v-20.15c0-40.09-32.51-72.6-72.6-72.6H136.61C96.51 83.25 64 115.76 64 155.85V303c0 62.47 50.31 113 112.78 113H283c40.09 0 72.6-32.51 72.6-72.6V336h60.4c33.4 0 60.55-27.15 60.55-60.55v-39.2c.05-33.15-27.1-60.25-60.55-60.25zm28.55 99.45c0 15.75-12.8 28.55-28.55 28.55H355.6V208H416c15.75 0 28.55 12.8 28.55 28.55v38.9zM160 64h128v16H160zM48 448h416v16H48z"></path>
      </svg>
    </div>
  `,
  className: "custom-div-icon",
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18],
});

// Active (hovered) marker
const coffeeIconActive = L.divIcon({
  html: `
    <div style="background:#8B4513;padding:7px;border-radius:50%;box-shadow:0 4px 14px rgba(139,69,19,0.5);border:2px solid #fff;display:flex;align-items:center;justify-content:center;transform:scale(1.25);transition:transform .2s;">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style="color: #fff;">
        <path d="M416 176h-40v-20.15c0-40.09-32.51-72.6-72.6-72.6H136.61C96.51 83.25 64 115.76 64 155.85V303c0 62.47 50.31 113 112.78 113H283c40.09 0 72.6-32.51 72.6-72.6V336h60.4c33.4 0 60.55-27.15 60.55-60.55v-39.2c.05-33.15-27.1-60.25-60.55-60.25zm28.55 99.45c0 15.75-12.8 28.55-28.55 28.55H355.6V208H416c15.75 0 28.55 12.8 28.55 28.55v38.9zM160 64h128v16H160zM48 448h416v16H48z"></path>
      </svg>
    </div>
  `,
  className: "custom-div-icon",
  iconSize: [44, 44],
  iconAnchor: [22, 22],
  popupAnchor: [0, -22],
});

export interface BoundingBox {
  north: number;
  south: number;
  east: number;
  west: number;
}

interface MapEventsProps {
  onBoundsChange: (bounds: BoundingBox) => void;
}

function MapEvents({ onBoundsChange }: MapEventsProps) {
  const map = useMapEvents({
    moveend: () => {
      const bounds = map.getBounds();
      onBoundsChange({
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        east: bounds.getEast(),
        west: bounds.getWest(),
      });
    },
    zoomend: () => {
      const bounds = map.getBounds();
      onBoundsChange({
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        east: bounds.getEast(),
        west: bounds.getWest(),
      });
    },
  });

  // Report initial bounds
  useEffect(() => {
    const bounds = map.getBounds();
    onBoundsChange({
      north: bounds.getNorth(),
      south: bounds.getSouth(),
      east: bounds.getEast(),
      west: bounds.getWest(),
    });
  }, [map, onBoundsChange]);

  return null;
}

// Fit map to show all markers
function FitBounds({ cafes, center }: { cafes: CafeListing[]; center: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    if (cafes.length === 0) return;
    const bounds = L.latLngBounds(cafes.map((c) => [c.lat, c.lng]));
    // Include city center
    bounds.extend(center);
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
  }, [cafes, center, map]);

  return null;
}

interface CityMapProps {
  center: [number, number];
  cafes: CafeListing[];
  zoom?: number;
  onBoundsChange: (bounds: BoundingBox) => void;
  hoveredCafe?: string | null;
}

export default function CityMap({
  center,
  cafes,
  zoom = 12,
  onBoundsChange,
  hoveredCafe,
}: CityMapProps) {
  const handleBoundsChange = useCallback(
    (bounds: BoundingBox) => {
      onBoundsChange(bounds);
    },
    [onBoundsChange]
  );

  return (
    <div className="h-[500px] w-full overflow-hidden shadow-lg">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        className="h-full w-full"
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <MapEvents onBoundsChange={handleBoundsChange} />
        <FitBounds cafes={cafes} center={center} />
        {cafes.map((cafe) => (
          <Marker
            key={cafe.name}
            position={[cafe.lat, cafe.lng]}
            icon={hoveredCafe === cafe.name ? coffeeIconActive : coffeeIcon}
          >
            <Popup>
              <div className="min-w-[180px]">
                <p className="font-bold text-gray-900 text-sm mb-0.5">
                  {cafe.name}
                </p>
                <p className="text-xs text-gray-500 mb-2">{cafe.suburb}</p>
                <Link
                  href={cafe.url}
                  className="text-xs font-medium text-blue-600 hover:underline"
                >
                  View cafe →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

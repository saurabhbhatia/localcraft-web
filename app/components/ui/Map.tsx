"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom coffee icon using a divIcon and an SVG path from ionicons (IoCoffee)
const coffeeIcon = L.divIcon({
  html: `
    <div class="bg-white p-2 rounded-full shadow-lg border-2 border-[#8B4513] flex items-center justify-center">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style="color: #8B4513;">
        <path d="M416 176h-40v-20.15c0-40.09-32.51-72.6-72.6-72.6H136.61C96.51 83.25 64 115.76 64 155.85V303c0 62.47 50.31 113 112.78 113H283c40.09 0 72.6-32.51 72.6-72.6V336h60.4c33.4 0 60.55-27.15 60.55-60.55v-39.2c.05-33.15-27.1-60.25-60.55-60.25zm28.55 99.45c0 15.75-12.8 28.55-28.55 28.55H355.6V208H416c15.75 0 28.55 12.8 28.55 28.55v38.9zM160 64h128v16H160zM48 448h416v16H48z"></path>
      </svg>
    </div>
  `,
  className: "custom-div-icon",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

interface MapProps {
  center: [number, number];
  zoom?: number;
  markerText?: string;
}

export default function Map({ center, zoom = 17, markerText }: MapProps) {
  return (
    <div className="h-[300px] w-full rounded-xl overflow-hidden shadow-sm border border-gray-200">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={coffeeIcon}>
          {markerText && (
            <Popup>
              <div className="font-medium text-gray-900">{markerText}</div>
            </Popup>
          )}
        </Marker>
      </MapContainer>
    </div>
  );
}

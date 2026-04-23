"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { mapSpots } from "@/lib/locations";

function PanTo({ coords, zoom }: { coords: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(coords, zoom, { duration: 0.9 });
  }, [coords, zoom, map]);
  return null;
}

export default function MiniMap({
  activeCoords,
  activeZoom = 9,
}: {
  activeCoords: [number, number];
  activeZoom?: number;
}) {
  return (
    <MapContainer
      center={activeCoords}
      zoom={activeZoom}
      scrollWheelZoom={false}
      zoomControl={false}
      dragging={false}
      doubleClickZoom={false}
      touchZoom={false}
      attributionControl={false}
      className="w-full h-full"
      style={{ background: "#0c0a09" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        subdomains={["a", "b", "c", "d"]}
      />
      {mapSpots.map((s) => {
        const isActive =
          Math.abs(s.coords[0] - activeCoords[0]) < 0.01 &&
          Math.abs(s.coords[1] - activeCoords[1]) < 0.01;
        return (
          <CircleMarker
            key={s.name}
            center={s.coords}
            radius={isActive ? 7 : 3}
            pathOptions={{
              color: isActive ? "#fbbf24" : "#78716c",
              weight: isActive ? 3 : 1,
              fillColor: isActive ? "#fbbf24" : "#57534e",
              fillOpacity: isActive ? 0.9 : 0.55,
            }}
          />
        );
      })}
      <PanTo coords={activeCoords} zoom={activeZoom} />
    </MapContainer>
  );
}

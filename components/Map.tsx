"use client";

import { MapContainer, TileLayer, CircleMarker, Tooltip, Polyline } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

type Spot = {
  name: string;
  coords: [number, number];
  dayLabel?: string;
};

const spots: Spot[] = [
  { name: "Andriana Resort", coords: [-13.155, 48.200], dayLabel: "Base" },
  { name: "Nosy Komba", coords: [-13.453, 48.340], dayLabel: "Day 2" },
  { name: "Nosy Tanikely", coords: [-13.481, 48.237], dayLabel: "Day 2" },
  { name: "Nosy Sakatia", coords: [-13.314, 48.185], dayLabel: "Day 3" },
  { name: "Mont Passot", coords: [-13.298, 48.262], dayLabel: "Day 3" },
  { name: "Nosy Iranja", coords: [-13.617, 47.830], dayLabel: "Day 4" },
  { name: "Lokobe Reserve", coords: [-13.403, 48.336], dayLabel: "Day 5" },
];

const routeOrder: LatLngExpression[] = [
  spots[0].coords, // Andriana
  spots[1].coords, // Komba
  spots[2].coords, // Tanikely
  spots[0].coords, // back
  spots[3].coords, // Sakatia
  spots[4].coords, // Passot
  spots[0].coords, // back
  spots[5].coords, // Iranja
  spots[0].coords, // back
  spots[6].coords, // Lokobe
  spots[0].coords, // back
];

export default function Map() {
  return (
    <MapContainer
      center={[-13.4, 48.05]}
      zoom={9}
      scrollWheelZoom={false}
      className="h-[520px] w-full rounded-xl shadow-2xl"
      style={{ background: "#111" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        subdomains={["a", "b", "c", "d"]}
      />
      <Polyline
        positions={routeOrder}
        pathOptions={{ color: "#f59e0b", weight: 1.5, opacity: 0.45, dashArray: "4 6" }}
      />
      {spots.map((s) => (
        <CircleMarker
          key={s.name}
          center={s.coords}
          radius={6}
          pathOptions={{
            color: "#f59e0b",
            weight: 2,
            fillColor: "#f59e0b",
            fillOpacity: 0.85,
          }}
        >
          <Tooltip
            permanent
            direction={s.name === "Nosy Iranja" ? "right" : "top"}
            offset={s.name === "Nosy Iranja" ? [8, 0] : [0, -8]}
            className="map-label"
          >
            {s.name}
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}

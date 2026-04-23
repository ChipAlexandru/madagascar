"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  locationCoords,
  locationZoom,
  DEFAULT_MINIMAP_ZOOM,
} from "@/lib/locations";

const MiniMap = dynamic(() => import("./MiniMap"), { ssr: false });

export default function ScrollMiniMap() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [regionVisible, setRegionVisible] = useState(false);

  useEffect(() => {
    const storyRegion = document.querySelector("[data-story-region]");
    const locEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-location]")
    );
    if (!storyRegion || locEls.length === 0) return;

    const regionObserver = new IntersectionObserver(
      ([entry]) => setRegionVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    regionObserver.observe(storyRegion);

    const locObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const loc = (e.target as HTMLElement).dataset.location;
            if (loc) setActiveLocation(loc);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    locEls.forEach((el) => locObserver.observe(el));

    return () => {
      regionObserver.disconnect();
      locObserver.disconnect();
    };
  }, []);

  const coords = activeLocation ? locationCoords[activeLocation] : null;
  const zoom = activeLocation
    ? locationZoom[activeLocation] ?? DEFAULT_MINIMAP_ZOOM
    : DEFAULT_MINIMAP_ZOOM;
  const show = regionVisible && coords;

  return (
    <div
      className={`fixed top-4 right-4 z-50 w-48 h-48 md:w-60 md:h-60 rounded-lg overflow-hidden shadow-2xl border border-stone-800/60 hidden md:block transition-all duration-500 ${
        show
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      {coords && <MiniMap activeCoords={coords} activeZoom={zoom} />}
      {activeLocation && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-950/95 via-stone-950/70 to-transparent pt-8 pb-2 px-3 pointer-events-none">
          <p className="text-[10px] uppercase tracking-[0.2em] text-amber-400 truncate">
            {activeLocation}
          </p>
        </div>
      )}
    </div>
  );
}

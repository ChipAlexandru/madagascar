"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import StaticMap from "./StaticMap";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="h-[380px] md:h-[520px] w-full rounded-xl bg-stone-900 animate-pulse" />
  ),
});

export default function MapSection() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-400/80 mb-2">
            The route
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Nosy Be & around
          </h2>
          <p className="mt-3 text-sm md:text-base text-stone-400 max-w-xl mx-auto">
            One base, four day-trips — three by boat, one up the hill.
          </p>
        </div>
        {isDesktop === null ? (
          <div className="h-[380px] md:h-[520px] w-full rounded-xl bg-stone-900 animate-pulse" />
        ) : isDesktop ? (
          <Map />
        ) : (
          <StaticMap />
        )}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import type { Entry } from "@/lib/content";

// Module-level coordinator: only one video plays at a time across the page.
// Prevents mobile Safari from OOM-crashing when multiple <video> elements
// try to decode simultaneously during scroll.
let activeVideo: HTMLVideoElement | null = null;

function takeVideoSlot(v: HTMLVideoElement) {
  if (activeVideo && activeVideo !== v) {
    activeVideo.pause();
  }
  activeVideo = v;
}

function releaseVideoSlot(v: HTMLVideoElement) {
  if (activeVideo === v) activeVideo = null;
}

export function Section({ entry }: { entry: Entry }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
        const video = videoRef.current;
        if (video) {
          if (e.isIntersecting) {
            takeVideoSlot(video);
            video.play().catch(() => {});
          } else if (!video.paused) {
            video.pause();
            releaseVideoSlot(video);
          }
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      data-location={entry.location ?? ""}
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-20 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="w-full max-w-5xl">
        {entry.type === "photo" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/media/${entry.src}`}
            alt={entry.title ?? entry.caption}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl mx-auto"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <video
            ref={videoRef}
            src={`/media/${entry.src}`}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl mx-auto"
            muted
            loop
            playsInline
            preload="none"
          />
        )}
        <div className="mt-8 max-w-2xl mx-auto text-center">
          {entry.location && (
            <p className="text-xs uppercase tracking-[0.25em] text-amber-400/80 mb-2">
              {entry.location}
            </p>
          )}
          {entry.title && (
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">{entry.title}</h2>
          )}
          <p className="text-base md:text-lg text-stone-300 leading-relaxed">
            {entry.caption}
          </p>
        </div>
      </div>
    </section>
  );
}

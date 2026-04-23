import MapSection from "@/components/MapSection";
import { Section } from "@/components/Section";
import { entries, hero, outro } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-400/80 mb-6">
            A travel journal
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            {hero.title}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-stone-400 font-light">
            {hero.subtitle}
          </p>
          <p className="mt-20 text-sm text-stone-500 animate-pulse">scroll ↓</p>
        </div>
      </section>

      <MapSection />

      {entries.length === 0 ? (
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-md text-center text-stone-400">
            <p className="text-lg mb-3">No entries yet.</p>
            <p className="text-sm">
              Drop photos and videos into{" "}
              <code className="text-amber-400">public/media/</code> and list them in{" "}
              <code className="text-amber-400">lib/content.ts</code>.
            </p>
          </div>
        </section>
      ) : (
        entries.map((entry, i) => <Section key={i} entry={entry} />)
      )}

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold">{outro.title}</h2>
        <p className="mt-4 text-lg text-stone-400">{outro.text}</p>
      </section>
    </main>
  );
}

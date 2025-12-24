import HighlightCard from "@/components/sections/HighlightCard";
import { highlightCards } from "@/lib/data";

export default function Highlights() {
  return (
    <section id="visit" className="bg-mist/80 py-16 sm:py-24">
      <div className="section-shell">
        <p className="eyebrow text-ink/60">Plan your visit</p>
        <h2 className="section-title mt-3">Grounded in worship, community, and care.</h2>
        <p className="mt-4 max-w-2xl text-sm text-ink/70">
          Everything you need to know as you connect with our church family.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlightCards.map((card) => (
            <HighlightCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

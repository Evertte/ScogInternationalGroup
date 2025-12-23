const highlights = [
  {
    title: "Co-designed programs",
    description:
      "We co-create initiatives with local leaders to ensure longevity, ownership, and measurable impact."
  },
  {
    title: "Shared learning hub",
    description:
      "Members exchange playbooks, funding models, and community insights across regions."
  },
  {
    title: "Rapid mobilization",
    description:
      "A trusted network enables swift response when communities need coordinated support."
  }
];

export default function Highlights() {
  return (
    <section className="section-shell pb-16 sm:pb-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow">What makes us different</p>
          <h2 className="section-title mt-3">Built for steady, resilient impact.</h2>
        </div>
        <p className="hidden max-w-sm text-sm text-ink/70 lg:block">
          SCOG pairs strategic vision with lived experience, anchoring every initiative in local
          ownership.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.title} className="card-surface">
            <div className="mb-4 h-10 w-10 rounded-full bg-sprout/15 text-center text-lg leading-10 text-sprout">
              +
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-ink/70">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

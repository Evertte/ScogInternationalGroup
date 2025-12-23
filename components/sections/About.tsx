const values = [
  {
    title: "People-centered strategy",
    description: "Every plan begins with community voices and grounded research."
  },
  {
    title: "Shared stewardship",
    description: "Local and global partners share accountability and decision-making."
  },
  {
    title: "Measured outcomes",
    description: "We track progress openly and iterate with our partners each quarter."
  }
];

export default function About() {
  return (
    <section id="about" className="section-shell py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Our mission</p>
          <h2 className="section-title mt-3">
            A cross-border organization focused on sustainable, community-led growth.
          </h2>
          <p className="mt-6 text-base text-ink/70">
            We work with civic leaders, youth advocates, and institutional partners to design programs
            that strengthen local capacity and scale responsibly. Our approach blends policy,
            on-the-ground implementation, and long-term mentorship.
          </p>
          <p className="mt-4 text-base text-ink/70">
            From leadership development to economic inclusion, SCOG is built to respond quickly while
            keeping relationships at the center of every initiative.
          </p>
        </div>
        <div className="space-y-4">
          {values.map((value) => (
            <div key={value.title} className="card-surface">
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

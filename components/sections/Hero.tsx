import Image from "next/image";

const stats = [
  { label: "Active partners", value: "42" },
  { label: "Cities served", value: "15" },
  { label: "Annual programs", value: "28" }
];

export default function Hero() {
  return (
    <section className="section-shell pb-16 pt-12 sm:pb-24 sm:pt-20">
      <div className="relative">
        <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-sun/60 blur-2xl" />
        <div className="absolute -bottom-6 right-4 h-28 w-28 rounded-full bg-sprout/40 blur-2xl" />
        <div className="overflow-hidden rounded-[32px] border border-ink/10 bg-white/80 p-3 shadow-soft">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] bg-mist/70 sm:aspect-[21/9]">
            <Image
              src="/images/hero.jpeg"
              alt="Community collaboration meeting"
              fill
              sizes="100vw"
              className="object-contain object-center"
              priority
            />
          </div>
          <div className="mt-4 flex items-center justify-between px-2">
            <p className="text-sm font-semibold">Community Labs 2024</p>
            <span className="rounded-full bg-clay/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-clay">
              Fieldwork
            </span>
          </div>
        </div>
      </div>
      <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Global reach, local depth</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Partnering across borders to design programs that communities own.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            SCOG International Group convenes leaders, members, and partner
            institutions to deliver inclusive initiatives in education, health,
            entrepreneurship, and civic leadership.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#about" className="accent-button">
              Discover our story
            </a>
            <a href="#activities" className="ghost-button">
              View initiatives
            </a>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-ink/10 bg-white/70 p-4">
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-ink/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

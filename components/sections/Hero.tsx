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
        <div className="overflow-hidden rounded-[32px] border border-ink/10 bg-white/80 p-2 shadow-sm sm:p-2">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] bg-ink/5 sm:aspect-[21/9]">
            <Image
              src="/images/hero.jpeg"
              alt="Community collaboration meeting"
              fill
              sizes="100vw"
              className="object-cover object-[50%_25%] scale-[1.04] blur-[3px]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/20" />
            <div className="absolute inset-0 flex items-end">
              <div className="w-full px-6 pb-8 sm:px-10 sm:pb-10">
                <p className="eyebrow text-mist/80">Faith-led community</p>
                <h1 className="mt-3 max-w-4xl text-balance text-3xl font-semibold text-mist drop-shadow sm:text-4xl lg:text-5xl">
                  Welcome to Starkville Church of God International Group
                </h1>
                <p className="mt-4 max-w-2xl text-base text-mist/80 sm:text-lg">
                  We are a welcoming church family committed to worship, discipleship, and service,
                  supporting families and neighbors through year-round outreach, mentorship, and
                  community care.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a href="#about" className="accent-button bg-mist text-ink hover:bg-mist/90">
                    Discover our story
                  </a>
                  <a
                    href="#activities"
                    className="ghost-button border-mist/60 text-mist hover:border-mist"
                  >
                    View initiatives
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between px-2">
            <p className="text-sm font-semibold">Community Gathering</p>
            <span className="rounded-full bg-clay/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-clay">
              Worship
            </span>
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-ink/10 bg-white/70 p-4">
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-ink/60">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

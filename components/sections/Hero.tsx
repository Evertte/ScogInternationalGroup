import Image from "next/image";

export default function Hero() {
  return (
    <section className="section-shell pb-16 pt-12 sm:pb-24 sm:pt-20">
      <div className="relative">
        <div className="overflow-hidden rounded-[32px] border border-ink/10 bg-white/80 p-2 shadow-sm sm:p-2">
          <div className="relative aspect-[16/12] overflow-hidden rounded-[24px] bg-ink/5 sm:aspect-[25/12]">
            <Image
              src="/images/main.png"
              alt="Church fellowship gathering"
              fill
              sizes="100vw"
              className="object-cover object-[50%_50%] scale-[1.08] blur-[1px]"
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
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfwTmBxi4M31IDJrAxTU8aqOCfBBdTXubClLKYD0k-8RA1rpA/viewform?usp=sharing&ouid=116408816532268023570"
                    className="accent-button bg-mist text-ink hover:bg-mist/90"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Connect With Us
                  </a>
                  <a
                    href="https://www.starkvillecog.com/contact"
                    className="ghost-button border-mist/60 text-mist hover:border-mist"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contact Us
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
    </section>
  );
}

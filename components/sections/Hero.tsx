import Image from "next/image";

export default function Hero() {
  return (
    <section className="section-shell pb-14 pt-10 sm:pb-24 sm:pt-20">
      <div className="relative">
        <div className="overflow-hidden rounded-[28px] border border-ink/10 bg-white/80 p-2 shadow-sm sm:rounded-[32px] sm:p-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-ink/5 sm:aspect-[25/12] sm:rounded-[24px]">
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
              <div className="w-full px-4 pb-5 sm:px-10 sm:pb-10">
                <p className="eyebrow text-mist/80">Faith-led community</p>
                <h1 className="mt-3 max-w-3xl text-balance text-2xl font-semibold text-mist drop-shadow sm:text-4xl lg:text-5xl">
                  Welcome to Starkville Church of God International Group
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-mist/80 sm:mt-4 sm:text-lg">
                  We are a welcoming church family committed to worship, discipleship, and service.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 sm:mt-6 sm:gap-4">
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

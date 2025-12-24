import Image from "next/image";

const navItems = [
  { label: "Visit", href: "#visit" },
  { label: "Activities", href: "#activities" },
  { label: "Leaders", href: "#leaders" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-mist/80 backdrop-blur">
      <div className="section-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="/"
          className="flex flex-col items-center gap-2 text-center"
          aria-label="Starkville Church of God International Group"
        >
          <span className="relative h-20 w-40">
            <Image
              src="/images/SCOG.avif"
              alt="SCOG logo"
              fill
              sizes="160px"
              className="object-contain"
              priority
            />
          </span>
        </a>
        <nav className="flex flex-wrap items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.3em]">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink/70">
              {item.label}
            </a>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfwTmBxi4M31IDJrAxTU8aqOCfBBdTXubClLKYD0k-8RA1rpA/viewform?usp=sharing&ouid=116408816532268023570"
            className="accent-button px-4 py-2 text-[0.65rem]"
            target="_blank"
            rel="noreferrer"
          >
            Connect With Us
          </a>
        </nav>
      </div>
    </header>
  );
}

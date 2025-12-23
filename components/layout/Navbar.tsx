import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Leaders", href: "#leaders" },
  { label: "Members", href: "#members" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-mist/80 backdrop-blur">
      <div className="section-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" className="flex items-center gap-3 font-display text-lg font-semibold">
          <span className="relative h-10 w-10 overflow-hidden rounded-full bg-white/80 shadow-soft">
            <Image
              src="/images/SCOG.avif"
              alt="SCOG logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </span>
          <span>SCOG International Group</span>
        </a>
        <nav className="flex flex-wrap items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.3em]">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink/70">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

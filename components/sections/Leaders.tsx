import Image from "next/image";
import { leaders } from "@/lib/data";

export default function Leaders() {
  return (
    <section id="leaders" className="section-shell py-16 sm:py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Leadership team</p>
          <h2 className="section-title mt-3">Shepherded with prayer and purpose.</h2>
        </div>
        <p className="max-w-md text-sm text-ink/70">
          Faithful servants leading with humility, wisdom, and a heart for the church community.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {leaders.map((leader) => {
          const hasSocials = Boolean(leader.facebookUrl || leader.instagramUrl);

          return (
            <div
              key={leader.name}
              className="rounded-[24px] border border-ink/10 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border border-ink/10 bg-ink/5">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="96px"
                    className={
                      leader.name === "James"
                        ? "object-cover object-[50%_18%] scale-[1.25]"
                        : "object-cover"
                    }
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{leader.name}</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-ink/60">{leader.role}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-ink/70">{leader.bio}</p>
              {leader.email ? (
                <a
                  href={`mailto:${leader.email}`}
                  className="mt-4 block text-sm font-medium text-ink/70 transition hover:text-ink"
                >
                  {leader.email}
                </a>
              ) : null}
              {hasSocials ? (
                <div className="mt-3 flex items-center gap-3 text-ink/60">
                  {leader.facebookUrl ? (
                    <a
                      href={leader.facebookUrl}
                      className="rounded-full border border-ink/10 p-2 transition hover:border-ink/30 hover:text-ink"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${leader.name} on Facebook`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M13.5 9.5V8.1c0-.6.4-1 1-1h1.3V4.6h-2.2c-2.1 0-3.6 1.4-3.6 3.7v1.2H8.4V12h1.6v7.4h3V12h2.2l.4-2.5h-2.6Z" />
                      </svg>
                    </a>
                  ) : null}
                  {leader.instagramUrl ? (
                    <a
                      href={leader.instagramUrl}
                      className="rounded-full border border-ink/10 p-2 transition hover:border-ink/30 hover:text-ink"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${leader.name} on Instagram`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <rect x="4" y="4" width="16" height="16" rx="4" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17" cy="7" r="1" />
                      </svg>
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

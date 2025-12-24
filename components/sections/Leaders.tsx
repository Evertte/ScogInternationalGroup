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
          const hasSocials = Boolean(
            leader.facebookUrl || leader.instagramUrl || leader.xUrl || leader.linkedinUrl
          );
          const showSocialIcons = Boolean(leader.showSocialIcons || hasSocials);

          return (
            <div
              key={leader.name}
              className="rounded-[24px] border border-ink/10 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-ink/10 bg-ink/5">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="96px"
                    className={
                      leader.name === "James"
                        ? "rounded-full object-cover object-[50%_18%] scale-[1.25]"
                        : "rounded-full object-cover"
                    }
                    unoptimized
                  />
                </div>
                <div className="min-w-0">
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
              {showSocialIcons ? (
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
                  ) : leader.showSocialIcons ? (
                    <span className="rounded-full border border-ink/10 p-2 text-ink/30" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M13.5 9.5V8.1c0-.6.4-1 1-1h1.3V4.6h-2.2c-2.1 0-3.6 1.4-3.6 3.7v1.2H8.4V12h1.6v7.4h3V12h2.2l.4-2.5h-2.6Z" />
                      </svg>
                    </span>
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
                  ) : leader.showSocialIcons ? (
                    <span className="rounded-full border border-ink/10 p-2 text-ink/30" aria-hidden="true">
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
                    </span>
                  ) : null}
                  {leader.xUrl ? (
                    <a
                      href={leader.xUrl}
                      className="rounded-full border border-ink/10 p-2 transition hover:border-ink/30 hover:text-ink"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${leader.name} on X`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M4.5 4h3.1l4.3 6.1L16.8 4H20l-6.2 8.1L20.5 20h-3.1l-4.7-6.7L7 20H3.8l6.6-8.6L4.5 4Z" />
                      </svg>
                    </a>
                  ) : leader.showSocialIcons ? (
                    <span className="rounded-full border border-ink/10 p-2 text-ink/30" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M4.5 4h3.1l4.3 6.1L16.8 4H20l-6.2 8.1L20.5 20h-3.1l-4.7-6.7L7 20H3.8l6.6-8.6L4.5 4Z" />
                      </svg>
                    </span>
                  ) : null}
                  {leader.linkedinUrl ? (
                    <a
                      href={leader.linkedinUrl}
                      className="rounded-full border border-ink/10 p-2 transition hover:border-ink/30 hover:text-ink"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${leader.name} on LinkedIn`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M6.5 8.5H4v11h2.5v-11Zm-.2-3.2a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0Zm4.4 3.2H8.2v11h2.5v-6c0-1.6.5-2.6 1.9-2.6 1.2 0 1.7.9 1.7 2.3v6.3h2.5v-6.8c0-3-1.6-4.5-3.9-4.5-1.5 0-2.4.8-2.7 1.4h-.1l-.3-1Z" />
                      </svg>
                    </a>
                  ) : leader.showSocialIcons ? (
                    <span className="rounded-full border border-ink/10 p-2 text-ink/30" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M6.5 8.5H4v11h2.5v-11Zm-.2-3.2a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0Zm4.4 3.2H8.2v11h2.5v-6c0-1.6.5-2.6 1.9-2.6 1.2 0 1.7.9 1.7 2.3v6.3h2.5v-6.8c0-3-1.6-4.5-3.9-4.5-1.5 0-2.4.8-2.7 1.4h-.1l-.3-1Z" />
                      </svg>
                    </span>
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

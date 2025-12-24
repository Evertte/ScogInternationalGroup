export default function Footer() {
  return (
    <footer className="mt-16 border-t border-ink/10">
      <div className="section-shell grid gap-8 py-12 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
        <div className="space-y-4 text-sm text-ink/70">
          <div>
            <p className="font-display text-lg font-semibold text-ink">Starkville Church of God</p>
            <p className="mt-2">100 Locksley Way</p>
            <p>Starkville, MS 39759</p>
          </div>
          <div className="space-y-1">
            <p>662.323.0352</p>
            <p>mail@starkvillecog.com</p>
          </div>
          <div className="flex items-center gap-3 text-ink/60">
            <a
              href="https://www.facebook.com/starkvillecog"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/10 p-2 transition hover:border-ink/30 hover:text-ink"
              aria-label="Starkville Church of God on Facebook"
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
            <a
              href="https://www.instagram.com/starkvillecog/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/10 p-2 transition hover:border-ink/30 hover:text-ink"
              aria-label="Starkville Church of God on Instagram"
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
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-end">
          <div className="relative h-28 w-40 sm:h-32 sm:w-48">
            <img
              src="/images/SCOG.avif"
              alt="Starkville Church of God logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

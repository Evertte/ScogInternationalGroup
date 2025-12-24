export default function GetConnected() {
  return (
    <section id="connect" className="py-16 sm:py-24">
      <div className="section-shell">
        <div className="rounded-[32px] border border-ink/10 bg-white/80 p-8 shadow-sm sm:p-10">
          <p className="eyebrow text-ink/60">Get connected</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="section-title">We would love to connect with you.</h2>
              <p className="mt-4 text-sm text-ink/70">
                Grow in faith, find community, and serve together. Share a few details and our team
                will reach out with next steps.
              </p>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfwTmBxi4M31IDJrAxTU8aqOCfBBdTXubClLKYD0k-8RA1rpA/viewform?usp=sharing&ouid=116408816532268023570"
              className="accent-button"
              target="_blank"
              rel="noreferrer"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

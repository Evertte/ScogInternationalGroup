export default function Footer() {
  return (
    <footer className="mt-16 border-t border-ink/10">
      <div className="section-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">SCOG International Group</p>
          <p className="mt-2 text-sm text-ink/70">
            Building cross-border partnerships with local, people-first delivery.
          </p>
        </div>
        <div className="text-sm text-ink/70">
          <p>hello@scoginternational.org</p>
          <p>+1 (555) 013-2489</p>
          <p>Accra | Nairobi | Toronto</p>
        </div>
      </div>
    </footer>
  );
}

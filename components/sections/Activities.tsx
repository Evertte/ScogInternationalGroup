import { activities } from "@/lib/data";

export default function Activities() {
  return (
    <section id="activities" className="section-shell py-16 sm:py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Core activities</p>
          <h2 className="section-title mt-3">Programs designed to move with communities.</h2>
        </div>
        <p className="max-w-md text-sm text-ink/70">
          We blend capacity building, policy co-creation, and resource sharing to meet local needs
          quickly.
        </p>
      </div>
      <div className="mt-10 grid gap-6">
        {activities.map((activity) => (
          <div key={activity.title} className="card-surface">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold">{activity.title}</h3>
                <p className="mt-2 max-w-2xl text-sm text-ink/70">
                  {activity.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-ink/60">
                <span className="rounded-full bg-ink/5 px-4 py-2">{activity.cadence}</span>
                <span className="rounded-full bg-ink/5 px-4 py-2">{activity.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import { leaders } from "@/lib/data";

export default function Leaders() {
  return (
    <section id="leaders" className="section-shell py-16 sm:py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Leadership circle</p>
          <h2 className="section-title mt-3">Guided by cross-sector experts.</h2>
        </div>
        <p className="max-w-md text-sm text-ink/70">
          Our leaders represent education, public health, entrepreneurship, and civic action.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {leaders.map((leader) => (
          <div key={leader.name} className="card-surface">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{leader.name}</h3>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60">{leader.role}</p>
            <p className="mt-3 text-sm text-ink/70">{leader.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import { members } from "@/lib/data";

export default function Members() {
  return (
    <section id="members" className="section-shell py-16 sm:py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Community network</p>
          <h2 className="section-title mt-3">Members who keep us accountable.</h2>
        </div>
        <p className="max-w-md text-sm text-ink/70">
          A diverse group of professionals, advocates, and mentors who co-design local solutions.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white/80 p-4"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-base font-semibold">{member.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-ink/60">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

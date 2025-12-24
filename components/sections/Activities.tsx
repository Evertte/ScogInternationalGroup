import Image from "next/image";
import type { ActivityData } from "@/lib/data";
import { activities, activityPhotos } from "@/lib/data";

const iconMap: Record<ActivityData["icon"], JSX.Element> = {
  prayer: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3Z" />
      <path d="M6 15l1 2.2L9 18l-2 .8L6 21l-1-2.2L3 18l2-.8L6 15Z" />
    </svg>
  ),
  bible: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4 6.5C4 5.1 5.1 4 6.5 4H12v14H6.5C5.1 18 4 16.9 4 15.5Z" />
      <path d="M20 6.5C20 5.1 18.9 4 17.5 4H12v14h5.5c1.4 0 2.5-1.1 2.5-2.5Z" />
      <path d="M8 8h3" />
    </svg>
  ),
  fellowship: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle cx="8" cy="9" r="2.5" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3 19a5 5 0 0 1 10 0" />
      <path d="M11 19a5 5 0 0 1 10 0" />
    </svg>
  ),
  worship: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M10 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M16 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 5v9" />
      <path d="M12 5l7-2v9" />
    </svg>
  ),
  care: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 21s-7-4.6-7-9.2a4 4 0 0 1 7-2.4 4 4 0 0 1 7 2.4C19 16.4 12 21 12 21Z" />
    </svg>
  ),
  culture: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2.5 3 2.5 13 0 16" />
      <path d="M12 4c-2.5 3-2.5 13 0 16" />
    </svg>
  )
};

export default function Activities() {
  return (
    <section id="activities" className="section-shell py-16 sm:py-24">
      <div>
        <p className="eyebrow text-ink/60">Activities</p>
        <h2 className="section-title mt-3">What we do together each week.</h2>
        <p className="mt-4 max-w-2xl text-sm text-ink/70">
          Simple, steady rhythms of worship, learning, and care that help us grow in faith.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="rounded-[24px] border border-ink/10 bg-white p-6 shadow-sm transition-shadow transition-transform lg:hover:-translate-y-1 lg:hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink">
              {iconMap[activity.icon]}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">{activity.title}</h3>
            <p className="mt-3 text-sm text-ink/70">{activity.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {activityPhotos.map((photo, index) => (
          <div
            key={`${photo.src}-${index}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-[20px] border border-ink/10 bg-white shadow-sm"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition duration-300 ease-out group-hover:scale-105"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import type { GroupPhoto } from "@/lib/data";

type GroupGalleryProps = {
  photos: GroupPhoto[];
};

export default function GroupGallery({ photos }: GroupGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const distance = Math.round(container.clientWidth * 0.8);
    container.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollByAmount("left")}
        className="absolute left-2 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white/90 px-3 py-2 text-sm font-semibold text-ink shadow-sm transition hover:bg-white"
        aria-label="Scroll gallery left"
      >
        &lt;
      </button>
      <button
        type="button"
        onClick={() => scrollByAmount("right")}
        className="absolute right-2 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white/90 px-3 py-2 text-sm font-semibold text-ink shadow-sm transition hover:bg-white"
        aria-label="Scroll gallery right"
      >
        &gt;
      </button>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 pt-1 scroll-smooth"
      >
        {photos.map((photo, index) => (
          <div
            key={`${photo.src}-${index}`}
            className="group relative aspect-[4/3] min-w-[220px] overflow-hidden rounded-[24px] border border-ink/10 bg-white shadow-sm sm:min-w-[240px] lg:min-w-[260px]"
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
    </div>
  );
}

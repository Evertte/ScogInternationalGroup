import { groupPhotos } from "@/lib/data";
import GroupGallery from "@/components/sections/GroupGallery";

export default function Members() {
  return (
    <section id="community" className="section-shell py-16 sm:py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Community moments</p>
          <h2 className="section-title mt-3">Together as one body in Christ.</h2>
        </div>
        <p className="max-w-md text-sm text-ink/70">
          United in worship, love, and service, we encourage one another and grow in faith together.
        </p>
      </div>
      <div className="mt-10">
        <GroupGallery photos={groupPhotos} />
      </div>
    </section>
  );
}

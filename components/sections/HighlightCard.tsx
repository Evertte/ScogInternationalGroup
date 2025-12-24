import type { HighlightCardData } from "@/lib/data";

type HighlightCardProps = HighlightCardData;

const iconMap: Record<HighlightCardProps["icon"], JSX.Element> = {
  community: (
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
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M14 19a4.5 4.5 0 0 1 6.5 0" />
    </svg>
  ),
  clock: (
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
      <path d="M12 8v5l3 2" />
    </svg>
  ),
  location: (
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
      <path d="M12 21s6-6.5 6-11a6 6 0 1 0-12 0c0 4.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
};

const renderLine = (line: string, highlights?: string[]) => {
  if (!highlights || highlights.length === 0) {
    return line;
  }

  let parts: Array<string | JSX.Element> = [line];
  let tokenIndex = 0;

  highlights.forEach((highlight) => {
    const nextParts: Array<string | JSX.Element> = [];
    parts.forEach((part) => {
      if (typeof part !== "string" || !part.includes(highlight)) {
        nextParts.push(part);
        return;
      }

      const split = part.split(highlight);
      split.forEach((segment, index) => {
        if (segment) {
          nextParts.push(segment);
        }
        if (index < split.length - 1) {
          tokenIndex += 1;
          nextParts.push(
            <span key={`${highlight}-${tokenIndex}`} className="font-semibold text-ink">
              {highlight}
            </span>
          );
        }
      });
    });
    parts = nextParts;
  });

  return parts;
};

export default function HighlightCard({
  title,
  description,
  icon,
  highlights,
  schedule,
  actionLabel,
  actionHref
}: HighlightCardProps) {
  const descriptionLines = description.split("\n");

  return (
    <div className="flex h-full flex-col rounded-[24px] border border-ink/10 bg-white p-6 shadow-sm transition-shadow transition-transform lg:hover:-translate-y-1 lg:hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink">
        {iconMap[icon]}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
      {schedule ? (
        <div className="mt-4 space-y-2">
          {schedule.map((item) => (
            <div
              key={`${title}-${item.label}`}
              className="flex items-center justify-between rounded-full border border-ink/10 bg-ink/5 px-3 py-2"
            >
              <span className="text-sm font-medium text-ink/70">{item.label}</span>
              <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-mist tabular-nums">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      ) : null}
      <p className={schedule ? "mt-4 text-sm text-ink/70" : "mt-3 text-sm text-ink/70"}>
        {descriptionLines.map((line, index) => (
          <span key={`${title}-line-${index}`} className="block">
            {renderLine(line, highlights)}
          </span>
        ))}
      </p>
      {actionLabel && actionHref ? (
        <a
          href={actionHref}
          className="mt-auto inline-flex items-center justify-center rounded-full border border-ink/20 bg-ink/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ink/40 hover:bg-ink/10"
        >
          {actionLabel}
        </a>
      ) : null}
    </div>
  );
}

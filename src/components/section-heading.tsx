type SectionHeadingProps = {
  eyebrow?: string;
  id?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  id,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase text-emerald-700">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="text-2xl font-bold tracking-normal text-zinc-950 sm:text-3xl"
        id={id}
      >
        {title}
      </h2>
      {description ? (
        <p className="leading-7 text-zinc-600">{description}</p>
      ) : null}
    </div>
  );
}

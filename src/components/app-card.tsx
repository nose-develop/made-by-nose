import Link from "next/link";

import { StatusBadge } from "@/src/components/status-badge";
import type { AppItem } from "@/src/data/apps";

type AppCardProps = {
  app: AppItem;
  featured?: boolean;
};

export function AppCard({ app, featured = false }: AppCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md ${
        featured ? "gap-5 sm:p-7" : "gap-4"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-zinc-950 px-3 py-1 text-sm font-semibold text-white">
          Day {app.day}
        </span>
        <StatusBadge status={app.status} />
      </div>

      <div className="space-y-3">
        <h3
          className={`font-bold tracking-normal text-zinc-950 ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          <Link
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
            href={`/apps/${app.slug}`}
          >
            <span className="absolute inset-0" aria-hidden="true" />
            {app.title}
          </Link>
        </h3>
        <p className="leading-7 text-zinc-600">{app.description}</p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {app.techStack.map((tech) => (
          <span
            className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600"
            key={tech}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="relative pt-1 text-sm font-semibold text-emerald-700">
        詳細を見る
        <span className="ml-1 transition group-hover:ml-2" aria-hidden="true">
          &rarr;
        </span>
      </div>
    </article>
  );
}

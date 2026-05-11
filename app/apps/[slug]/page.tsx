import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import type { AppItem } from "@/src/data/apps";
import { StatusBadge } from "@/src/components/status-badge";
import {
  getAdjacentApps,
  getAppBySlug,
  getApps,
} from "@/src/lib/apps";
import { siteConfig } from "@/src/lib/site";

type AppDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getApps().map((app) => ({
    slug: app.slug,
  }));
}

export async function generateMetadata({
  params,
}: AppDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return {
      title: "アプリが見つかりません",
    };
  }

  return {
    title: app.title,
    description: app.description,
    openGraph: {
      title: app.title,
      description: app.description,
      url: `/apps/${app.slug}`,
      siteName: siteConfig.shortName,
      type: "article",
      publishedTime: app.date,
    },
    twitter: {
      card: "summary_large_image",
      title: app.title,
      description: app.description,
    },
  };
}

export default async function AppDetailPage({ params }: AppDetailPageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const { previous, next } = getAdjacentApps(app.slug);

  return (
    <main className="flex-1">
      <article className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <Link
            className="inline-flex text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
            href="/#apps"
          >
            &larr; アプリ一覧へ戻る
          </Link>

          <header className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-zinc-950 px-3 py-1 text-sm font-semibold text-white">
                Day {app.day}
              </span>
              <StatusBadge status={app.status} />
              <time className="text-sm font-medium text-zinc-500">
                {formatDate(app.date)}
              </time>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-normal text-zinc-950 sm:text-5xl">
                {app.title}
              </h1>
              <p className="text-lg leading-8 text-zinc-600">
                {app.description}
              </p>
            </div>
          </header>

          {app.thumbnail ? (
            <div
              className="relative mx-auto w-full overflow-hidden rounded-lg border border-zinc-200 bg-white"
              style={{ aspectRatio: getThumbnailAspectRatio(app) }}
            >
              <Image
                alt={`${app.title}のスクリーンショット`}
                className="object-contain"
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                src={app.thumbnail}
              />
            </div>
          ) : (
            <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-white text-sm font-medium text-zinc-500">
              Screenshot coming soon
            </div>
          )}

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-950">使用技術</h2>
            <div className="flex flex-wrap gap-2">
              {app.techStack.map((tech) => (
                <span
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-semibold text-zinc-700"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <div className="grid gap-5">
            <DetailSection title="作った理由" body={app.reason} />
            <DetailSection title="苦労した点" body={app.struggles} />
            <DetailSection title="学び" body={app.learning} />
          </div>

          <section className="flex flex-wrap gap-3 border-y border-zinc-200 py-6">
            {app.appUrl ? (
              <a
                className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                href={app.appUrl}
                rel="noreferrer"
                target="_blank"
              >
                アプリを開く
              </a>
            ) : null}
            {app.githubUrl ? (
              <a
                className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-700"
                href={app.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                GitHubを見る
              </a>
            ) : null}
            {!app.appUrl && !app.githubUrl ? (
              <p className="text-sm text-zinc-500">
                公開URLとGitHub URLは準備中です。
              </p>
            ) : null}
          </section>

          <nav
            aria-label="前後のアプリ"
            className="grid gap-4 sm:grid-cols-2"
          >
            <AdjacentLink app={previous} label="前のアプリ" />
            <AdjacentLink app={next} label="次のアプリ" alignRight />
          </nav>
        </div>
      </article>
    </main>
  );
}

function DetailSection({
  title,
  body,
}: {
  title: string;
  body?: string;
}) {
  if (!body) {
    return null;
  }

  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-6">
      <h2 className="text-xl font-bold text-zinc-950">{title}</h2>
      <p className="mt-3 whitespace-pre-line leading-7 text-zinc-600">
        {body}
      </p>
    </section>
  );
}

function AdjacentLink({
  app,
  label,
  alignRight = false,
}: {
  app?: AppItem;
  label: string;
  alignRight?: boolean;
}) {
  if (!app) {
    return <div />;
  }

  return (
    <Link
      className={`rounded-lg border border-zinc-200 bg-white p-5 transition hover:border-emerald-300 ${
        alignRight ? "text-left sm:text-right" : ""
      }`}
      href={`/apps/${app.slug}`}
    >
      <span className="text-sm font-semibold text-emerald-700">{label}</span>
      <span className="mt-2 block font-bold text-zinc-950">
        Day {app.day}: {app.title}
      </span>
    </Link>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "medium",
  }).format(new Date(date));
}

function getThumbnailAspectRatio(app: AppItem) {
  if (app.thumbnailWidth && app.thumbnailHeight) {
    return `${app.thumbnailWidth} / ${app.thumbnailHeight}`;
  }

  return "16 / 9";
}

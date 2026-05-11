import Link from "next/link";

import { AppCard } from "@/src/components/app-card";
import { AppList } from "@/src/components/app-list";
import { ProgressBar } from "@/src/components/progress-bar";
import { SectionHeading } from "@/src/components/section-heading";
import { getApps, getLatestApp, getProgress } from "@/src/lib/apps";
import { siteConfig } from "@/src/lib/site";

export default function Home() {
  const apps = getApps();
  const latestApp = getLatestApp();
  const progress = getProgress();

  return (
    <main className="flex-1">
      <section className="border-b border-zinc-200 bg-stone-50">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:px-8">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold text-emerald-700">
                made by nose
              </p>
              <h1 className="max-w-3xl text-4xl font-bold tracking-normal text-zinc-950 sm:text-6xl">
                1日1アプリ 100日チャレンジ
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                普通の会社員が、AI時代に置いて行かれないように100日間アプリを作る記録
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                href="#apps"
              >
                アプリ一覧を見る
              </Link>
              {latestApp ? (
                <Link
                  className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-700"
                  href={`/apps/${latestApp.slug}`}
                >
                  最新アプリを見る
                </Link>
              ) : null}
            </div>
          </div>
          <div className="self-end rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <ProgressBar {...progress} />
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 py-14 sm:px-6 lg:px-8">
        {latestApp ? (
          <section className="space-y-6" aria-labelledby="latest-app-title">
            <SectionHeading
              eyebrow="Latest"
              id="latest-app-title"
              title="最新アプリ"
              description="いま一番新しい制作物です。小さく作って、記録して、また次の日へ進みます。"
            />
            <AppCard app={latestApp} featured />
          </section>
        ) : null}

        <section className="space-y-6" id="apps" aria-labelledby="apps-title">
          <SectionHeading
            eyebrow="Archive"
            id="apps-title"
            title="アプリ一覧"
            description="Dayごとに作成したアプリを追加していきます。100件まで増えても見やすいカード型の記録です。"
          />
          <AppList apps={apps} />
        </section>

        <section
          className="grid gap-8 border-y border-zinc-200 py-12 lg:grid-cols-2"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase text-emerald-700">
              Challenge
            </p>
            <h2
              className="text-2xl font-bold tracking-normal text-zinc-950 sm:text-3xl"
              id="about-title"
            >
              このチャレンジについて
            </h2>
            <p className="leading-7 text-zinc-600">
              {/* AIを使えば作れるものは増える。でも、作り続けるには自分の手で考えて、迷って、出す場所が必要です。このサイトは、その100日分の置き場所です。 */}
              IT企業に就職しながらもあまりAIにふれていませんでした。<br />
              でも、AIを使い、何でもいいからまずは作ってみようと思いました。<br />
              AIにおいてかれないためにもここに日々の記録を残していきます。
            </p>
          </div>
          <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-6">
            <p className="text-sm font-semibold uppercase text-emerald-700">
              Profile
            </p>
            <h3 className="text-xl font-bold text-zinc-950">nose</h3>
            <p className="leading-7 text-zinc-600">{siteConfig.owner.bio}</p>
            <div className="flex flex-wrap gap-3">
              {siteConfig.links.map((link) => (
                <a
                  className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

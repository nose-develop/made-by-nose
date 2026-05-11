import { apps, type AppItem } from "@/src/data/apps";
import { siteConfig } from "@/src/lib/site";

const byDayAscending = (a: AppItem, b: AppItem) => a.day - b.day;
const byDayDescending = (a: AppItem, b: AppItem) => b.day - a.day;

export function getApps() {
  return [...apps].sort(byDayDescending);
}

export function getAppsAscending() {
  return [...apps].sort(byDayAscending);
}

export function getPublishedApps() {
  return getApps().filter((app) => app.status === "published");
}

export function getLatestApp() {
  return getApps()[0];
}

export function getAppBySlug(slug: string) {
  return apps.find((app) => app.slug === slug);
}

export function getAdjacentApps(slug: string) {
  const orderedApps = getAppsAscending();
  const currentIndex = orderedApps.findIndex((app) => app.slug === slug);

  if (currentIndex === -1) {
    return {};
  }

  return {
    previous: orderedApps[currentIndex - 1],
    next: orderedApps[currentIndex + 1],
  };
}

export function getProgress() {
  const currentDay = apps.length
    ? Math.max(...apps.map((app) => app.day))
    : 0;
  const totalDays = siteConfig.totalDays;

  return {
    currentDay,
    totalDays,
    percentage: Math.min(100, Math.round((currentDay / totalDays) * 100)),
  };
}

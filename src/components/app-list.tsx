import type { AppItem } from "@/src/data/apps";
import { AppCard } from "@/src/components/app-card";

type AppListProps = {
  apps: AppItem[];
};

export function AppList({ apps }: AppListProps) {
  if (apps.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-zinc-300 bg-white p-8 text-center text-zinc-500">
        まだアプリは登録されていません。
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {apps.map((app) => (
        <AppCard app={app} key={app.slug} />
      ))}
    </div>
  );
}

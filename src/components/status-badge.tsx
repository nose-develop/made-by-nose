import type { AppStatus } from "@/src/data/apps";

const statusLabels: Record<AppStatus, string> = {
  published: "公開済み",
  building: "制作中",
  planned: "予定",
};

const statusStyles: Record<AppStatus, string> = {
  published: "border-emerald-200 bg-emerald-50 text-emerald-700",
  building: "border-amber-200 bg-amber-50 text-amber-700",
  planned: "border-zinc-200 bg-zinc-50 text-zinc-600",
};

type StatusBadgeProps = {
  status: AppStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${statusStyles[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}

type ProgressBarProps = {
  currentDay: number;
  totalDays: number;
  percentage: number;
};

export function ProgressBar({
  currentDay,
  totalDays,
  percentage,
}: ProgressBarProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between gap-4">
        <p className="text-sm font-medium text-zinc-600">現在の進捗</p>
        <p className="text-2xl font-bold text-zinc-950">
          Day {currentDay}
          <span className="text-base font-semibold text-zinc-500">
            {" "}
            / {totalDays}
          </span>
        </p>
      </div>
      <div
        aria-label={`Day ${currentDay} / ${totalDays}`}
        aria-valuemax={totalDays}
        aria-valuemin={0}
        aria-valuenow={currentDay}
        className="h-3 overflow-hidden rounded-full bg-zinc-200"
        role="progressbar"
      >
        <div
          className="h-full rounded-full bg-emerald-500 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-zinc-500">{percentage}% completed</p>
    </div>
  );
}

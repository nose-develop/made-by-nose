import Link from "next/link";

import { siteConfig } from "@/src/lib/site";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <Link className="font-bold text-zinc-950" href="/">
          {siteConfig.shortName}
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-4">
          <Link
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            href="/#apps"
          >
            Apps
          </Link>
          <Link
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            href="/#about"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

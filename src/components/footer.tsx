import { siteConfig } from "@/src/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <p className="font-bold text-zinc-950">{siteConfig.shortName}</p>
          <p className="max-w-2xl text-sm leading-6 text-zinc-600">
            {siteConfig.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {siteConfig.links.map((link) => (
            <a
              className="text-sm font-medium text-zinc-600 transition hover:text-emerald-700"
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
    </footer>
  );
}

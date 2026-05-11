import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center">
      <div className="mx-auto w-full max-w-3xl px-5 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-emerald-700">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-normal text-zinc-950">
          ページが見つかりません
        </h1>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-600">
          指定されたページは存在しないか、URLが変更された可能性があります。
        </p>
        <Link
          className="mt-8 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
          href="/"
        >
          トップページへ戻る
        </Link>
      </div>
    </main>
  );
}

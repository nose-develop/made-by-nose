# データ設計

## 基本方針

アプリ情報は `src/data/apps.ts` の配列で管理する。DBやCMSは初期段階では使わない。

## 型定義

```ts
export type AppStatus = "published" | "building" | "planned";

export type AppItem = {
  day: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  status: AppStatus;
  appUrl?: string;
  githubUrl?: string;
  techStack: string[];
  thumbnail?: string;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  reason?: string;
  struggles?: string;
  learning?: string;
};
```

## 初期データ

```ts
export const apps: AppItem[] = [
  {
    day: 1,
    slug: "portfolio-site",
    title: "1日1アプリ公開サイト",
    description: "100日間で作成したアプリを掲載するためのポートフォリオサイト。",
    date: "2026-05-12",
    status: "published",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    reason: "100日間の制作物を継続して公開できる土台を作るため。",
    struggles: "今後100件まで増えることを前提に、静的データでも保守しやすい構成にする点。",
    learning: "小さく始めるために、DBやCMSを使わず静的データから設計する重要性。",
  },
];
```

## データ取得ユーティリティ

配置候補:

```text
src/lib/apps.ts
```

想定関数:

```ts
getApps(): AppItem[]
getPublishedApps(): AppItem[]
getLatestApp(): AppItem | undefined
getAppBySlug(slug: string): AppItem | undefined
getAdjacentApps(slug: string): { previous?: AppItem; next?: AppItem }
getProgress(): { currentDay: number; totalDays: 100; percentage: number }
```

## ソート方針

- 一覧表示は Day の降順を基本にする。
- 前後リンクは Day の昇順で判定する。
- `day` は一意にする。
- `slug` は一意にする。

## バリデーション方針

初期実装ではランタイムバリデーションライブラリは導入しない。代わりに TypeScript の型と、必要に応じて簡単な重複チェック関数を用意する。

チェックしたい項目:

- `day` の重複
- `slug` の重複
- `day` が 1 から 100 の範囲内
- `status` が許可値であること

## 画像管理

スクリーンショットは `public/apps/` 配下に置く。

例:

```text
public/apps/day-001/thumbnail.png
```

`thumbnail` には public ルートからのパスを入れる。

```ts
thumbnail: "/apps/day-001/thumbnail.png"
thumbnailWidth: 1600
thumbnailHeight: 900
```

`thumbnailWidth` と `thumbnailHeight` はアップロードした画像の実寸を入れる。詳細ページではこの比率を `aspect-ratio` として使うため、16:9、16:25 など画像ごとの縦横比に合わせて表示できる。

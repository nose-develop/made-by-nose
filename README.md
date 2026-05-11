# made-by-nose

「普通の会社員が、AI時代に置いて行かれないように100日間アプリを作る記録」として、1日1アプリ100日チャレンジの制作物を掲載するポートフォリオサイトです。

## 技術スタック

- Next.js `16.2.6`
- React `19.2.4`
- TypeScript
- Tailwind CSS `4`
- App Router
- Vercel

## ローカル起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## ビルド確認

```bash
npm run lint
npm run build
```

Windows PowerShell の実行ポリシーで `npm` が止まる場合は、次のように実行します。

```bash
npm.cmd run lint
npm.cmd run build
```

## アプリを追加する方法

アプリ情報は `src/data/apps.ts` で管理しています。Day2以降は配列に1件追加すると、トップページ、詳細ページ、サイトマップに反映されます。

```ts
{
  day: 2,
  slug: "example-app",
  title: "サンプルアプリ",
  description: "アプリの概要を1から2文で記載します。",
  date: "2026-05-13",
  status: "published",
  appUrl: "https://example.vercel.app",
  githubUrl: "https://github.com/example/example-app",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  thumbnail: "/apps/day-002/thumbnail.png",
  thumbnailWidth: 1600,
  thumbnailHeight: 900,
  reason: "作った理由を書きます。",
  struggles: "苦労した点を書きます。",
  learning: "学びを書きます。",
}
```

スクリーンショットを使う場合は `public/apps/day-xxx/thumbnail.png` に配置し、`thumbnail` に public ルートからのパスを指定します。

`thumbnailWidth` と `thumbnailHeight` には、アップロードした画像の実寸を入れます。例えば 16:9 の画像なら `1600` と `900`、縦長の 16:25 なら `1600` と `2500` のように指定します。詳細ページではこの比率に合わせて画像枠が作られ、画像全体が切れずに収まります。

## 主なファイル

- `app/page.tsx`: トップページ
- `app/apps/[slug]/page.tsx`: アプリ詳細ページ
- `app/not-found.tsx`: 404ページ
- `src/data/apps.ts`: アプリ情報
- `src/lib/apps.ts`: アプリ取得ユーティリティ
- `src/components/`: 共通UI
- `documents/`: 設計書

## デプロイ

GitHubにpushすると、Vercel側の連携設定により自動デプロイされる想定です。独自ドメインは `https://www.madebynose.com/` を想定しています。

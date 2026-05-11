# SEO / OGP設計

## 基本方針

Next.js App Router の Metadata API を使う。`layout.tsx` や `page.tsx` に `metadata` または `generateMetadata` を定義し、手動で `<head>` は書かない。

## サイト共通メタデータ

配置:

```text
app/layout.tsx
```

想定内容:

- `metadataBase`: `https://www.madebynose.com`
- `title.default`: `1日1アプリ 100日チャレンジ`
- `title.template`: `%s | 1日1アプリ 100日チャレンジ`
- `description`: `普通の会社員が、AI時代に置いて行かれないように100日間アプリを作る記録`
- `openGraph`
- `twitter`

## トップページ

トップページは共通メタデータをそのまま活かす。

必要に応じて `app/page.tsx` に `metadata` を追加する。

## アプリ詳細ページ

`app/apps/[slug]/page.tsx` で `generateMetadata` を使う。

メタデータ例:

- title: アプリ名
- description: アプリ概要
- openGraph.title: アプリ名
- openGraph.description: アプリ概要
- openGraph.url: `/apps/[slug]`
- openGraph.images: `thumbnail` があれば使用、なければ共通OGP画像

存在しない `slug` の場合は `notFound()` と同じ判定を行い、404にする。

## OGP画像

初期実装:

- `public/og/default.png` を共通OGP画像として使う想定
- 画像が未作成の場合は、まずメタデータ構造だけ用意し、後で画像を追加する

将来拡張:

- アプリごとのサムネイルをOGP画像に流用
- `opengraph-image.tsx` による動的OGP画像生成

## robots / sitemap

初期実装では必須ではないが、将来的に追加する。

候補:

```text
app/robots.ts
app/sitemap.ts
```

`sitemap.ts` では `apps` 配列から詳細ページURLを生成する。

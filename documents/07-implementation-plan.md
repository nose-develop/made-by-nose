# 実装計画

## 前提

このドキュメントは実装前の設計メモ。実装時は `AGENTS.md` に従い、Next.js `16.2.6` の同梱ドキュメントを確認してからコードを書く。

## Phase 1: 土台整理

- `src/` ディレクトリを作成する。
- `src/data/apps.ts` を作成する。
- `src/lib/apps.ts` を作成する。
- `src/lib/site.ts` にサイト共通情報をまとめる。
- 既存の create-next-app 初期UIを置き換える準備をする。

## Phase 2: 共通UI

- `Header`
- `Footer`
- `ProgressBar`
- `StatusBadge`
- `AppCard`
- `AppList`
- 必要に応じて `SectionHeading`

## Phase 3: トップページ

- ファーストビュー
- 最新アプリ
- アプリ一覧
- チャレンジ説明
- プロフィール
- 外部リンク

## Phase 4: 詳細ページ

- `app/apps/[slug]/page.tsx`
- `generateStaticParams`
- `generateMetadata`
- `notFound()` 処理
- 前後リンク

## Phase 5: 404 / SEO / README

- `app/not-found.tsx`
- 共通メタデータ
- OGP設定
- README にローカル起動方法とアプリ追加方法を追記

## Phase 6: 確認

- `npm run lint`
- `npm run build`
- モバイル幅での表示確認
- Day2を仮追加した場合の反映確認

## 実装時の注意

- `src/data/apps.ts` 以外にアプリ情報を重複して持たない。
- ステータス表示や進捗計算はハードコードしない。
- `appUrl` や `githubUrl` がない場合でもUIが崩れないようにする。
- `thumbnail` がない場合でも詳細ページが成立するようにする。
- 100件になった時点で見づらくなる実装を避ける。

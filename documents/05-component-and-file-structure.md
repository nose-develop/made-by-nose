# コンポーネント設計とファイル構成

## 想定ディレクトリ

```text
app/
  apps/
    [slug]/
      page.tsx
  not-found.tsx
  globals.css
  layout.tsx
  page.tsx
src/
  components/
    app-card.tsx
    app-list.tsx
    footer.tsx
    header.tsx
    progress-bar.tsx
    section-heading.tsx
    status-badge.tsx
  data/
    apps.ts
  lib/
    apps.ts
    site.ts
public/
  apps/
    day-001/
      thumbnail.png
```

## コンポーネント責務

### `Header`

- サイト名を表示する。
- トップページへのリンクを持つ。
- 必要に応じて GitHub など外部リンクを表示する。

### `Footer`

- サイト名
- チャレンジの短い説明
- 外部リンク
- コピーライト

### `ProgressBar`

- `currentDay`
- `totalDays`
- `percentage`

進捗バーは表示専用にし、計算は `src/lib/apps.ts` に寄せる。

### `AppCard`

- Day番号
- タイトル
- 概要
- 技術タグ
- ステータス
- 詳細リンク

カード自体をリンクにする場合でも、外部リンクボタンとのクリック領域が衝突しないようにする。

### `StatusBadge`

ステータス表示を統一する。

ラベル:

- `published`: 公開済み
- `building`: 制作中
- `planned`: 予定

### `AppList`

- アプリ配列を受け取ってカードグリッドを表示する。
- 空配列時は空状態を表示する。

### `SectionHeading`

- セクション見出しと補足文を統一する。
- 必須ではないが、トップページの見た目を揃えるために有用。

## Server / Client Component 方針

基本は Server Components にする。

Client Component が必要になる例:

- タブ切り替え
- 絞り込み
- アニメーション制御
- ユーザー操作で変わるUI

初期実装ではクライアント状態は不要なため、原則として `use client` は使わない。

## スタイル方針

- Tailwind CSS のユーティリティを基本にする。
- 共通化する値はコンポーネント単位でまとめる。
- 複雑なCSSや独自クラスは最小限にする。
- `app/globals.css` はベース色、フォント、body程度に留める。

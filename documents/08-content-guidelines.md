# コンテンツ運用ガイド

## アプリ追加手順

1. `src/data/apps.ts` に新しいアプリを1件追加する。
2. `day` は前回より1つ大きい番号にする。
3. `slug` は英小文字、数字、ハイフンで作る。
4. スクリーンショットがある場合は `public/apps/day-xxx/` に置く。
5. `npm run build` で詳細ページが生成されることを確認する。

## slug 命名

良い例:

- `portfolio-site`
- `habit-tracker`
- `ai-memo-app`

避ける例:

- `Day1`
- `日本語slug`
- `my app`
- `app_001`

## description

トップページのカードにも表示されるため、1から2文で短く書く。

例:

```text
100日間で作成したアプリを掲載するためのポートフォリオサイト。
```

## reason / struggles / learning

詳細ページで制作ログとして見せる項目。長文にしすぎず、あとから読み返したときに当時の判断が分かる内容にする。

## status の使い分け

- `published`: 公開済み。詳細ページに表示してよい。
- `building`: 制作中。途中経過として見せたい場合に使う。
- `planned`: 予定。まだ制作物がない場合に使う。

## 外部リンク

- `appUrl`: Vercelなどに公開したアプリURL
- `githubUrl`: ソースコードのGitHub URL

未公開の場合は省略する。

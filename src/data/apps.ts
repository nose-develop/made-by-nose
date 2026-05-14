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

export const apps: AppItem[] = [
  {
    day: 1,
    slug: "portfolio-site",
    title: "1日1アプリ公開サイト",
    description:
      "100日間で作成したアプリを掲載するためのポートフォリオサイト",
    date: "2026-05-12",
    status: "published",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    reason: "100日間の制作物を継続して公開できる土台を作るため",
    struggles: 
      `土台となる環境設定などもろもろの準備を行ったこと`,
    learning:
      `データベースがなくてもjson形式で表示できそうなこと、今後はデータベースも触れていきたい
      コードの理解を全くしていなくてもアプリの作成をすることができることがわかった
      ただ、何もわかっていない状態だと以降の改修などで自分自身にとって良くないと思うから少しずつ勉強！`,
    appUrl: "https://www.madebynose.com/",
    githubUrl: "https://github.com/nose-develop/made-by-nose",
    thumbnail: "/apps/day-001.png",
    thumbnailWidth: 1601,
    thumbnailHeight: 907,
  },
  {
    day: 2,
    slug: "warikan-app",
    title: "飲み会の割り勘アプリ",
    description:
      "飲み会の時のお会計の割り勘を様々な方法で決めるアプリ",
    date: "2026-05-12",
    status: "published",
    techStack: ["Next.js", "TypeScript", "Vercel", "Github", "Git"],
    reason: "よく飲みに行くので，たまにはこういったアプリがあると盛り上がりそうと思ったから",
    struggles: 
      `コーディングというより，サブドメインをどのようにして設定するかわからなかったので，その調査と実装`,
    learning:
      `初めに基盤を作り，そのあと気になる点をブランチごとに伝えることで何をしているかがわかりやすかった
      今回は1人だが，もし複数人での開発になるとこのあたりをしっかりと決めて進めていきたい`,
    appUrl: "https://warikan.madebynose.com/",
    githubUrl: "https://github.com/nose-develop/spriting_bills_method",
    thumbnail: "/apps/day-002.png",
    thumbnailWidth: 1601,
    thumbnailHeight: 907,
  },
  {
    day: 3,
    slug: "hungry-timer",
    title: "ハングリータイマー",
    description:
      "ごはんを食べなかった時間を計測するアプリ",
    date: "2026-05-13",
    status: "published",
    techStack: ["Next.js", "TypeScript", "Vercel", "Github", "Git"],
    reason: "絶賛ファスティング中なので...",
    struggles: 
      `github上でコンフリクトが起こったのでその解消`,
    learning:
      `ファスティング生活が佳境に入り集中力がなくなったことを実感`,
    appUrl: "https://hungrytimer.madebynose.com/",
    githubUrl: "https://github.com/nose-develop/hungry_timer",
    thumbnail: "/apps/day-003.png",
    thumbnailWidth: 1601,
    thumbnailHeight: 907,
  },
  {
    day: 4,
    slug: "kyo-kore",
    title: "今日これだけメーカー",
    description:
      "したいことはたくさんあるのに何をすればいいかわからないあなたへ",
    date: "2026-05-14",
    status: "published",
    techStack: ["Next.js", "TypeScript", "Vercel", "Github", "Git"],
    reason: `したいことがたくさんあるけど結局何をしたらいいかわからない
    そしたら結局何もできていない，ということがよくあるのでとりあえず何をするか勝手に決めてもらったほうがいいと思い作りました`,
    struggles: 
      `Codexが優秀で苦労した点が特になくなってきた`,
    learning:
      `自分がほしいものって小さくても，それを解決するようなアプリを作れると便利だなと思う（自己満）`,
    appUrl: "https://kyokore.madebynose.com/",
    githubUrl: "https://github.com/nose-develop/kyo_kore",
    thumbnail: "/apps/day-004.png",
    thumbnailWidth: 1601,
    thumbnailHeight: 907,
  },
];

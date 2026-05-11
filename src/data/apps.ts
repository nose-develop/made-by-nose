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
];

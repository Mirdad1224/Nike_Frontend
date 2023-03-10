export type HeroProps = {
  heroapi: {
    title: string;
    subtitle: string;
    img: string;
    btntext: string;
    videos: { imgsrc: string; clip: string }[];
    sociallinks: { icon: string }[];
  };
};

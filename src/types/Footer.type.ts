type title = {
  title: string;
};

type link = {
  link: string;
};

export type FooterProps = {
  footerAPI: {
    titles: title[];
    links: link[][];
  };
};

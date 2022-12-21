export type SalesProps = {
  ifExists?: boolean;
  endpoint: {
    title: string;
    items: {
      id: string;
      title: string;
      text: string;
      rating: string;
      btn: string;
      img: string;
      price: string;
      color: string;
      shadow: string;
    }[];
  };
};

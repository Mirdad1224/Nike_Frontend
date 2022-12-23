import FlexContent from "../components/FlexContent";
import Hero from "../components/Hero";
import Sales from "../components/Sales";
import Stories from "../components/Stories";
import {
  heroapi,
  highlight,
  popularsales,
  sneaker,
  story,
  toprateslaes,
} from "../data/data";

const Home = () => {
  return (
    <main className="flex flex-col gap-16 relative">
      <Hero heroapi={heroapi} />
      <Sales endpoint={popularsales} ifExists={true} />
      <FlexContent endpoint={highlight} ifExists={true} />
      <Sales endpoint={toprateslaes} />
      <FlexContent endpoint={sneaker} />
      <Stories story={story} />
    </main>
  );
};
export default Home;

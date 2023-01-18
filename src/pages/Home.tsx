import FlexContent from "../components/FlexContent";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import Sales from "../components/Sales";
import Stories from "../components/Stories";
import { heroapi, highlight, sneaker } from "../data/data";
import { useGetIndexQuery } from "../redux/api/shopApiSlice";

const Home = () => {
  const { data, isLoading } = useGetIndexQuery(null);
  if (isLoading || !data) {
    return <div className="w-full h-screen overflow-hidden"><Loading /></div>;
  }
  const { topProducts, allProducts, stories } = data;

  return (
    <main className="flex flex-col gap-16 relative overflow-x-hidden">
      <Hero heroapi={heroapi} />
      <Sales
        endpoint={{ title: "Popular Sales", items: topProducts }}
        ifExists={true}
      />
      <FlexContent endpoint={highlight} ifExists={true} />
      <Sales endpoint={{ title: "Top Rated Sales", items: allProducts }} />
      <FlexContent endpoint={sneaker} />
      <Stories story={stories} />
    </main>
  );
};
export default Home;

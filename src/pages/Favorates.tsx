import { useGetFavoratesQuery } from "../redux/api/shopApiSlice";
import Sales from "../components/Sales";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";
import { Link, Navigate } from "react-router-dom";

const Favorates = () => {
  const { data, isLoading } = useGetFavoratesQuery(null);
  const { username } = useAuth();

  console.log(username);
  if (isLoading) return <Loading />;
  if (!username) return <Navigate to="/login" />;
  if (username && data) {
    return (
      <div className="mt-40 flex flex-col gap-16 relative">
        {data?.data?.length === 0 ? (
          <div className="h-[50vh] grid place-items-center">
            <p
              className="text-5xl lg:text-4xl md:text-2xl font-bold text-slate-900 filter
         drop-shadow-lg"
            >
              You Hava Not Any Favorate Product
            </p>
            <Link
              to="/"
              className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110"
            >
              Go To Shop
            </Link>
          </div>
        ) : (
          <Sales
            ifExists={false}
            endpoint={{ title: "Your Favorates", items: data.data }}
          />
        )}
      </div>
    );
  }
  return <Navigate to="/login" />;
};
export default Favorates;

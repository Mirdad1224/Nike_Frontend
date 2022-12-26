import { HeartIcon } from "@heroicons/react/24/solid";
import useAuth from "../hooks/useAuth";
import {
  useGetFavoratesQuery,
  useToggleFavorateMutation,
} from "../redux/api/shopApiSlice";
import toast from "react-hot-toast";
import { detecteFavorate } from "../utils/detecteFavorate";
import { memo } from "react";

const FavorateButton = ({ _id }: { _id: string }) => {
  const [toggleFavorate, { isLoading: isUpdating }] =
    useToggleFavorateMutation();
  const { data, isLoading } = useGetFavoratesQuery(null);

  const { username } = useAuth();

  let isInFavorate: boolean | null | undefined = false;

  if (data) {
    isInFavorate = detecteFavorate(_id, data?.data, isLoading);
  }

  const onAddToFavorate = () => {
    if (username) {
      try {
        toggleFavorate(_id);
        toast.success("Successfully Done!!!");
      } catch (err) {
        toast.error("something went wrong.try again");
      }
    } else {
      toast.error("please login first");
    }
  };
  return (
    <button
      type="button"
      className="bg-white/10 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
      onClick={() => onAddToFavorate()}
      disabled={isUpdating}
    >
      {username && isInFavorate ? (
        <HeartIcon className="icon-style text-red-500" />
      ) : (
        <HeartIcon className="icon-style text-red-100" />
      )}
    </button>
  );
};
export default memo(FavorateButton);

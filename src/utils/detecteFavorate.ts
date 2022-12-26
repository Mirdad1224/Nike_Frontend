// import { useGetFavoratesQuery } from "../redux/api/shopApiSlice"

export const detecteFavorate = (_id: string, data: any, isLoading: boolean) => {
  // const {data, isLoading} = useGetFavoratesQuery(null)
  let isInFavorate: boolean | null = false;
  if (data) {
    isInFavorate = data.some(
      (item: any) => item._id.toString() === _id.toString()
    );
    return isInFavorate;
  } else if (!data && !isLoading) {
    isInFavorate = false;
    return isInFavorate;
  }
};

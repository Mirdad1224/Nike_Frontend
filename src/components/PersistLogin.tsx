import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useRefreshMutation } from "../redux/api/authApiSlice";
import usePersist from "../hooks/usePersist";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../redux/authSlice";
import Loading from "./Loading";

const PersistLogin = () => {
  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);

  //* a flag used to being sured that setCredentials executed successfully
  const [trueSuccess, setTrueSuccess] = useState(false);

  const [
    refresh,
    {
      isUninitialized, //*refresh func is called or no
      isLoading,
      isSuccess,
      isError,
      error,
    },
  ] = useRefreshMutation();

  useEffect(() => {
    if (effectRan.current === true) {
      // React 18 Strict Mode  // || process.env.NODE_ENV !== 'development'

      const verifyRefreshToken = async () => {
        console.log("verifying refresh token");
        try {
          //const response =
          await refresh(null);
          //const { accessToken } = response.data
          setTrueSuccess(true);
        } catch (err) {
          console.error(err);
        }
      };

      if (!token && persist) verifyRefreshToken();
    }

    return () => {
      effectRan.current = true;
    };

    // eslint-disable-next-line
  }, []);

  let content = <></>;
  if (!persist) {
    // persist: no
    content = <Outlet />;
  } else if (isLoading) {
    //persist: yes, token: no
    content = <Loading />;
  } else if (isError) {
    //persist: yes, token: no
    console.log(error);
    content = <Navigate to="/login" />;
    // toast.error("please login again");
  } else if (isSuccess && trueSuccess) {
    //persist: yes, token: yes
    content = <Outlet />;
  } else if (token && isUninitialized) {
    //persist: yes, token: yes
    content = <Outlet />;
  }

  return content;
};
export default PersistLogin;

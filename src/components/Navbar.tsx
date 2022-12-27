import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../redux/cartSlice";
import {
  HeartIcon,
  ArrowRightOnRectangleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useSendLogoutMutation } from "../redux/api/authApiSlice";
import { logOut } from "../redux/authSlice";

const Navbar = () => {
  const [navState, setNavState] = useState<boolean>(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);
  const { username } = useAuth();
  const [sendLogout, { isLoading }] = useSendLogoutMutation();
  const navigate = useNavigate();
  const location = useLocation();

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const handleLogout = () => {
    sendLogout(null);
    dispatch(logOut(null));
    !isLoading && navigate("/", { replace: true });
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  return (
    <>
      <header
        className={
          !navState
            ? `fixed left-0 right-0 opacity-100 z-40 ${
                location.pathname === "/"
                  ? "bg-transparent top-7"
                  : "bg-blue-500 top-0 h-[9vh] flex items-center justify-center"
              }`
            : `fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme`
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto ${navState && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              {/* <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              /> */}
              {username && (
                <div className="flex justify-center items-end gap-1">
                  <ArrowRightOnRectangleIcon
                    onClick={handleLogout}
                    className={`icon-style hover:text-red-300 ${
                      navState && "text-slate-900 transition-all duration-300"
                    }`}
                  />
                  <span
                    className={`icon-style ${
                      navState && "text-slate-900 transition-all duration-300"
                    }`}
                  >
                    {username}
                  </span>
                </div>
              )}
              {!username && (
                <div>
                  <Link
                    to="/login"
                    className={`icon-style hover:text-red-300 ${
                      navState && "text-slate-900 transition-all duration-300"
                    }`}
                  >
                    LOGIN |
                  </Link>
                  <Link
                    to="/register"
                    className={`icon-style hover:text-red-300 ${
                      navState && "text-slate-900 transition-all duration-300"
                    }`}
                  >
                    {" "}
                    SIGNUP
                  </Link>
                </div>
              )}
            </li>
            <li className="grid items-center">
              <Link to="/favorate">
                <HeartIcon
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
              </Link>
            </li>
            <li className="grid items-center">
              <button
                type="button"
                onClick={onCartToggle}
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;

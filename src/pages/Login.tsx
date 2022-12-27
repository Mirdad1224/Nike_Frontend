import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import image from "../assets/login.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/authApiSlice";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/authSlice";
import { useState } from "react";
import usePersist from "../hooks/usePersist";

interface IFormInputs {
  email: string;
  pwd: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .trim()
      .required("email is required")
      .email("please enter a valid email"),
    pwd: yup
      .string()
      .trim()
      .required("password is required")
      .min(8, "min length is 8")
      .max(120, "max length is 120"),
  })
  .required();

const Login = () => {
  const [login, { isLoading: isUpdating }] = useLoginMutation();

  const [persist, setPersist] = usePersist();

  const [errMsg, setErrMsg] = useState("email or password is invalid");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: IFormInputs) => {
    try {
      const { accessToken } = await login(data).unwrap();
      console.log(accessToken);
      dispatch(setCredentials({ accessToken }));
      navigate("/", { replace: true });
      toast.success(`your login was successfull`);
    } catch (err: any) {
      if (!err?.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("email or password is invalid");
      }
      toast.error(errMsg);
    }
  };

  const handleToggle = () => setPersist((prev: boolean) => !prev);

  if (isUpdating) {
    <Loading />;
  }
  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center jistify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="flex md:block w-full">
          <div className="block md:hidden bg-indigo-500 w-1/2 py-10 px-10">
            <img src={image} alt="enter" />
          </div>{" "}
          {/* Svg side */}
          <div className="md:w-full w-1/2 py-10 px-5 md:px-10">
            <header className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">Login</h1>
              <p>Enter your information to Login</p>
            </header>{" "}
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              {" "}
              {/* Form body */}
              {/* Form body container */}
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email-input" className="text-semibold px-1">
                    Email
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <AtSymbolIcon className=" text-gray-400 text-xs" />
                    </div>
                    <input
                      id="email-input"
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="example@example.com"
                      {...register("email")}
                    />
                  </div>
                  <p className="text-red-400">{errors.email?.message}</p>
                </div>
              </div>{" "}
              {/* Form body container */}
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label
                    htmlFor="password-input"
                    className="text-semibold px-1"
                  >
                    Password
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <LockClosedIcon className=" text-gray-400 text-xs" />
                    </div>
                    <input
                      id="password-input"
                      type="password"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="********"
                      {...register("pwd")}
                    />
                  </div>
                  <p className="text-red-400">{errors.pwd?.message}</p>
                </div>
              </div>{" "}
              <label
                htmlFor="persist"
                className="flex items-center w-100 gap-2 ml-2 my-2"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  id="persist"
                  onChange={handleToggle}
                  checked={persist}
                />
                Remember me
              </label>
              {/* Form body container */}
              <div className="flex -mx-3 mt-4">
                <div className="w-full px-3 mb-5">
                  <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                    Login
                  </button>
                </div>
              </div>{" "}
              <div className="my-4">
                Don't have an account?
                <Link to="/register" className="text-red-400">
                  {" "}
                  Create an account.
                </Link>
              </div>
              {/* Form body container */}
            </form>
          </div>{" "}
          {/* Form side */}
        </div>
      </div>
    </div>
  );
};
export default Login;

import {
  AtSymbolIcon,
  LockClosedIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import image from "../assets/login.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSignupMutation } from "../redux/api/authApiSlice";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

interface IFormInputs {
  user: string;
  email: string;
  pwd: string;
}

const schema = yup
  .object({
    user: yup
      .string()
      .trim()
      .required("username is required")
      .min(3, "min length is 3 charactere"),
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

const Signup = () => {
  const [signup, { isLoading: isUpdating }] = useSignupMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: IFormInputs) => {
    await signup(data);
    navigate("/login", { replace: true });
    toast.success(`youe signup was successfull`);
  };
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
              <h1 className="font-bold text-3xl text-gray-900">Register</h1>
              <p>Enter your information to register</p>
            </header>{" "}
            {/* Title */}
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              {" "}
              {/* Form body */}
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label
                    htmlFor="firstname-input"
                    className="text-xs font-semibold px-1"
                  >
                    user name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center poniter-events-none flex items-center justify-center">
                      <UserCircleIcon className=" text-gray-400 text-xs" />
                    </div>
                    <input
                      id="firstname-input"
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="ali"
                      {...register("user")}
                    />
                  </div>
                  <p className="text-red-400">{errors.user?.message}</p>
                </div>{" "}
                {/* Name & Lastname inputs */}
              </div>{" "}
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
              {/* Form body container */}
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                    Register
                  </button>
                </div>
              </div>{" "}
              {/* Form body container */}
            </form>
          </div>{" "}
          {/* Form side */}
        </div>
      </div>
    </div>
  );
};
export default Signup;

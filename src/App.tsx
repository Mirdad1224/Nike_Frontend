import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./app.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Favorates from "./pages/Favorates";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import Prefetch from "./components/Prefetch";
import MainLayout from "./components/MainLayout";
import Page404 from "./pages/404";

const App = () => {
  return (
    <Routes>
      <Route element={<Prefetch />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path="/favorate" element={<Favorates />} />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default App;

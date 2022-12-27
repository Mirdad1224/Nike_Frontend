import { Outlet } from "react-router-dom"
import { footerAPI } from "../data/data"
import Cart from "./Cart"
import Footer from "./Footer"
import Navbar from "./Navbar"

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Cart />
        <Outlet />
        <Footer footerAPI={footerAPI} />
    </>
  )
}
export default MainLayout
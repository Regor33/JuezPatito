import { Outlet } from "react-router-dom"
import Navbar from "../components/nav/Navbar"

const MainLayout = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#00AEEF] via-[#55B5D6] to-[#A7A9AC]">
      <div className="w-full max-w-[1000px] mx-auto px-3.5">
        <Navbar />
        <Outlet /> {/* acá se renderizan las páginas */}
      </div>
    </div>
  )
}

export default MainLayout
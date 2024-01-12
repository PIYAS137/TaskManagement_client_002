import { Outlet } from "react-router-dom"
import AppNavbar from "../../Layouts/AppNavbar"


const RootPage = () => {
  return (
    <div className=" h-screen overflow-hidden ">
        <AppNavbar/>
        <Outlet/>
    </div>
  )
}

export default RootPage
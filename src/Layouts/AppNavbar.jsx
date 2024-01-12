import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { FirebaseAuthContext } from "../Contexts/FirebaseContext"


const AppNavbar = () => {

    const { user, Firebase_Logout_User, } = useContext(FirebaseAuthContext);

    console.log(user);


    const handleClickSignOut = () => {
        Firebase_Logout_User()
            .then().catch()
    }


    const navLinks = <>
        <li><NavLink to={'/'}>Home page</NavLink></li>
        <li><NavLink to={'/tasks'}>Tasks page</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">SEO1</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end z-40">
                <div className=" mr-2 flex items-center space-x-2 ">
                    <h1 className=" font-semibold text-primary">{user?.displayName}</h1>
                    {user?.photoURL && <img className=" w-10 aspect-square object-cover rounded-full" src={user?.photoURL} alt="" />}
                </div>
                {
                    user?.email ?
                        <Link><button onClick={handleClickSignOut} className="btn b bg-red-500 border-none text-white">Logout</button></Link>
                        :
                        <Link to={'/login'}><button className="btn btn-primary">Login</button></Link>
                }
            </div>
        </div>
    )
}

export default AppNavbar
import { Link, NavLink } from "react-router-dom"


const AppNavbar = () => {




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
            <div className="navbar-end">
                <Link to={'/login'}><button className="btn btn-primary">Login</button></Link>
                <Link to={'/login'}><button className="btn bg-red-500 border-none text-white btn-primary">Logout</button></Link>
            </div>
        </div>
    )
}

export default AppNavbar
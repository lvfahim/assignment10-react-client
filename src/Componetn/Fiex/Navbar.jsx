import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';


const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const Links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
    </>
    const heandlLogOut = () => {
        LogOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                alert(error)
            });
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className="navbar justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <Link to='/'><h1 className="text-4xl font-bold ml-0 md:ml-8">
                        M<span className="text-blue-500">o</span>t
                        <span className="text-blue-500">o</span>ri
                        <span className="text-blue-500">o</span>
                    </h1></Link> 
                </div>
                <div className=" navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {Links}
                    </ul>
                </div>
                <div className='md:mr-8 mr-0'>
                    {user ? <button onClick={heandlLogOut} className="btn btn-primary-gradient">LogOut</button> : <Link to='/auth/login'><button className="btn btn-primary-gradient">Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
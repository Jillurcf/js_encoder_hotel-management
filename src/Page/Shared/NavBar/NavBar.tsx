import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC<any> = () => {
    const navItems= <>
    <li>
    <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-pink-200 text-pink-400 font-bold"
              : "text-white font-bold"
          }
        >
          Home
        </NavLink>
    </li>
    <li>
    <NavLink
          to="/aboutus"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-pink-200 text-pink-400 font-bold"
              : "text-white font-bold"
          }
        >
          About us
        </NavLink>
    </li>
    </>
    return (
     <div className='bg-pink-400 text-white'>
           <div className='max-w-screen-xl mx-auto'>
          <div className="navbar bg-pink-400">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Hotel Management</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-outline text-white">Login</a>
  </div>
</div>
        </div>
     </div>
    );
};

export default NavBar;
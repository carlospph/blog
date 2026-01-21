import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Brand from '../Brand/Brand';
import './Navbar.css';

const Navbar = () => {
    const [isVisibleMenu, setIsVisibleMenu] = useState(false);

    return (
        <header className="bg-gray-400 py-3 px-3 fixed w-full z-50">
            <nav className="flex items-center justify-between mx-auto max-w-6xl">
                <Brand />
                <i
                    className={`fa-solid ${isVisibleMenu ? 'fa-xmark' : 'fa-bars'} text-3xl cursor-pointer my-hidden`}
                    onClick={() => setIsVisibleMenu(!isVisibleMenu)}
                ></i>

                {/* Menu Mobile */}
                {isVisibleMenu && (
                    <ul className="bg-blue-400 col-span-2 absolute right-0 top-[60px] w-full h-screen md:!hidden">
                        <li><NavLink to="/" className="py-2 px-4 block hover:text-red-500" onClick={() => setIsVisibleMenu(false)}>Home</NavLink></li>
                        <li><NavLink to="/services" className="py-2 px-4 block hover:text-red-500" onClick={() => setIsVisibleMenu(false)}>Serviços</NavLink></li>
                        <li><NavLink to="/contact" className="py-2 px-4 block hover:text-red-500" onClick={() => setIsVisibleMenu(false)}>Contatos</NavLink></li>
                    </ul>
                )}

                <ul className="flex hidden md:flex">
                    <li><NavLink to="/" className="py-2 px-4 block hover:text-red-500">Home</NavLink></li>
                    <li><NavLink to="/services" className="py-2 px-4 block hover:text-red-500">Serviços</NavLink></li>
                    <li><NavLink to="/contact" className="py-2 px-4 block hover:text-red-500">Contatos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
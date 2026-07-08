import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isActive = ({ isActive }) => (isActive ? "text-[#39338b]" : "");
   
    return (
        <header className="flex items-center gap-2 justify-between py-5 px-5 z-30 fixed w-full bg-white shadow md:px-12 md:py-6 ">
            <div className="flex items-center gap-4">
                <img className="w-12.5 h-12.5" src={logo} alt="Logo" />
                <div>
                    <h1 className="sansation-bold primary-color text-xl leading-5.5">BAIT AN NOOR</h1>
                    <p className="text-sm secondary-color">LI TARABIYAH</p>
                </div>
            </div>

            <nav className="hidden lg:flex gap-6 sansation-regular primary-color text-lg items-center">
                <NavLink to="/" end className="hover:text-[#39338b] ease-in">
                    Home
                </NavLink>

                <NavLink to="about" className="hover:text-[#39338b] ease-in"> {/* if /about then its absolete path */}
                    About Us
                </NavLink>

                <NavLink to="contact" className="hover:text-[#39338b] ease-in">
                    Programs
                </NavLink>

                <NavLink to="contact" className="hover:text-[#39338b] ease-in">
                    Teachers
                </NavLink>

                <NavLink to="contact" className="hover:text-[#39338b] ease-in">
                    Gallery
                </NavLink>

                <NavLink to="contact" className="hover:text-[#39338b] ease-in">
                    Contact
                </NavLink>

                <NavLink to="contact" className="button py-1 px-4 text-white rounded-[5px] hover:bg-[#BF8B28] ease-in">
                    Register
                </NavLink>
            </nav>

            {/* hamburger menu */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-2xl primary-color focus:outline-none">
                    <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <nav className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden flex flex-col gap-4 p-5 sansation-regular primary-color text-lg">
                    <NavLink 
                        to="/" 
                        end 
                        className={({ isActive }) => isActive ? "bg-[#BF8B28] text-white -m-2 px-2 py-1 rounded ease-in" : "hover:text-[#39338b] ease-in"}
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        to="about" 
                        className={({ isActive }) => isActive ? "bg-[#BF8B28] text-white -m-2 px-2 py-1 rounded ease-in" : "hover:text-[#39338b] ease-in"}
                        onClick={closeMenu}
                    >
                        About Us
                    </NavLink>

                    <NavLink 
                        to="contact" 
                        className={({ isActive }) => isActive ? "bg-[#BF8B28] text-white -m-2 px-2 py-1 rounded ease-in" : "hover:text-[#39338b] ease-in"}
                        onClick={closeMenu}
                    >
                        Programs
                    </NavLink>

                    <NavLink 
                        to="contact" 
                        className={({ isActive }) => isActive ? "bg-[#BF8B28] text-white -m-2 px-2 py-1 rounded ease-in" : "hover:text-[#39338b] ease-in"}
                        onClick={closeMenu}
                    >
                        Teachers
                    </NavLink>

                    <NavLink 
                        to="contact" 
                        className={({ isActive }) => isActive ? "bg-[#BF8B28] text-white -m-2 px-2 py-1 rounded ease-in" : "hover:text-[#39338b] ease-in"}
                        onClick={closeMenu}
                    >
                        Gallery
                    </NavLink>

                    <NavLink 
                        to="contact" 
                        className={({ isActive }) => isActive ? "bg-[#BF8B28] text-white -m-2 px-2 py-1 rounded ease-in" : "hover:text-[#39338b] ease-in"}
                        onClick={closeMenu}
                    >
                        Contact
                    </NavLink>

                    <NavLink 
                        to="contact" 
                        className="hover:text-[#39338b] ease-in"
                        onClick={closeMenu}
                    >
                        Register
                    </NavLink>
                </nav>
            )}

        </header>
    );
    
}

export default Header;
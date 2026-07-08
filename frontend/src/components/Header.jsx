import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Header(){
   
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
                <i className="fa-solid fa-bars text-2xl primary-color"></i>
            </div>

        </header>
    );
    
}

export default Header;
import { useState } from "react";
import Contador from "./Contador";
import logo from "../images/logo-unisuam.jpg";
import Menu from "./Menu";

const Navbar = () => {
    const [MenuAberto, setMenuAberto] = useState(null);
    
    const toggleMenu = () => {
        setMenuAberto(MenuAberto === 'hamburguer' ? null : 'hamburguer');
    };

    return (
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src={logo}
                        className="h-8"
                        title="Unisuam"
                        alt="Unisuam"
                    />
                    <span className="hidden md:block">
                        ACOMPANHAMENTO PROJETOS UNISUAM
                    </span>
                </a>
                <div className="flex-grow flex items-center justify-center">
                    <Contador />
                </div>
                <button 
                    onClick={toggleMenu} 
                    data-collapse-toggle="mega-menu-full" 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    aria-controls="mega-menu-full" 
                    aria-expanded={MenuAberto === 'hamburguer'}
                >
                    <span className="sr-only">Abrir Menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div id="mega-menu-full" className={`items-center justify-between ${MenuAberto === 'hamburguer' ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}>
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                        <Menu/>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import { useState } from "react";
import Contador from "./contador";
import logo from "../images/logo-unisuam.jpg";

const Navbar = () => {
    const [MenuAberto, setMenuAberto] = useState(null);

    const toggleWorkalove = () => {
        setMenuAberto(MenuAberto === 'workalove' ? null : 'workalove');
    };

    const toggleMoodle = () => {    
        setMenuAberto(MenuAberto === 'moodle' ? null : 'moodle');
    };
    
    const toggleMenu = () => {
        setMenuAberto(MenuAberto === 'hamburguer' ? null : 'hamburguer');
    };

    const toggleHubspot = () => {
        setMenuAberto(MenuAberto === 'hubspot' ? null : 'hubspot');
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
                        <li>
                            <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                                STATUS PROJETOS
                            </a>
                        </li>
                        <li>
                            <button id="dropdownNavbarLinkWorkalove" className="flex items-center font-medium justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" onClick={toggleWorkalove} aria-expanded={MenuAberto === 'workalove'}>
                                WORKALOVE
                                <svg className="w-2.5 h-2.5 ms-2.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            <div id="dropdownWorkalove" className={`z-10 ${MenuAberto === 'workalove' ? "block" : "hidden"} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownNavbarLinkWorkalove">
                                    <li>
                                        <a href="/workalove/all" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">TODOS</a>
                                    </li>
                                    <li>
                                        <a href="/workalove/cursos" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CURSOS</a>
                                    </li>
                                    <li>
                                        <a href="/workalove/cursos-disciplinas" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CURSO DISCIPLINAS</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                        <li>
                                            <a href="/workalove/alunos-cancelados" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ALUNOS CANCELADOS</a>
                                        </li>
                                        <li>
                                            <a href="/workalove/alunos-egressos" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ALUNOS EGRESSOS</a>
                                        </li>
                                        <li>
                                            <a href="/workalove/alunos-graduacao" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ALUNOS GRADUAÇÃO</a>
                                        </li>
                                        <li>
                                            <a href="/workalove/alunos-cursos-graduacao" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ALUNOS CURSOS GRADUAÇÃO</a>
                                        </li>
                                        <li>
                                            <a href="/workalove/alunos-disciplinas-graduacao" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ALUNOS DISCIPLINAS GRADUAÇÃO</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="/grupoa" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">GRUPO A</a>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center font-medium justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" aria-expanded={MenuAberto === 'moodle'} onClick={toggleMoodle}>
                                MOODLE
                                <svg className="w-2.5 h-2.5 ms-2.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            <div id="dropdownNavbar" className= { ` z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${MenuAberto === 'moodle' ? "block": "hidden"} absolute `}  >
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownNavbarLink">
                                    <li>
                                        <button href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Matriculas-GRA</button>
                                    </li>
                                    <li>
                                        <button href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Disciplinas-GRA</button>
                                    </li>
                                    <li>
                                        <button href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Agendamentos-GRA</button>
                                    </li>
                                    <li>
                                        <button href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Grupos-GRA</button>
                                    </li>
                                    <li>
                                        <button href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Notas-GRA</button>
                                    </li>
                                    <li>
                                        <button href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Usuários-GRA</button>
                                    </li>
                                </ul>
                      
                            </div>
                        </li>
                        <li>
                            <button id="dropdownNavbarLinkHubspot" data-dropdown-toggle="dropdownHubspot" className="flex items-center font-medium justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"aria-expanded={MenuAberto === 'hubspot'} onClick={toggleHubspot}>
                                HUBSPOT
                                <svg className="w-2.5 h-2.5 ms-2.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            <div id="dropdownHubspot" className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute ${MenuAberto === 'hubspot' ? "block":"hidden" } ` }>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownNavbarLinkHubspot">
                                    <li>
                                        <a href="/hubspot/all" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">TODOS</a>
                                    </li>
                                    <li>
                                        <a href="/hubspot/contatos" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CONTATOS</a>
                                    </li>
                                    <li>
                                        <a href="/hubspot/negocios" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">NEGOCIOS</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

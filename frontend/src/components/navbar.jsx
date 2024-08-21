import { useState } from "react";
import Contador from "./Contador";
import logo from "../images/logo-unisuam.jpg";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [MenuAberto, setMenuAberto] = useState(null);

  const toggleMenu = () => {
    setMenuAberto(MenuAberto === "hamburguer" ? null : "hamburguer");
  };

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto p-4">
       <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" title="Unisuam" alt="Unisuam" />
          <span className="hidden 2xl:block">
            ACOMPANHAMENTO PROJETOS UNISUAM
          </span>
        </Link>
        <div className="flex-grow flex items-center justify-center">
          <Contador />
        </div>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg 2xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded={MenuAberto === "hamburguer"}
        >
          <span className="sr-only">Abrir Menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className={`items-center justify-between ${
            MenuAberto === "hamburguer" ? "block" : "hidden"
          } w-full 2xl:flex 2xl:w-auto 2xl:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium 2xl:flex-row 2xl:mt-0 2xl:space-x-8 rtl:space-x-reverse">
            <Menu
              dados={[
                { titulo: "STATUS PROJETOS", url: "/status" },
                {
                  titulo: "WORKALOVE",
                  submenu: {
                    links: [
                      { url: "/workalove/all", label: "TODOS" },
                      { url: "/workalove/cursos", label: "CURSOS" },
                      {
                        url: "/workalove/cursos-disciplinas",
                        label: "CURSO DISCIPLINAS",
                      },
                      {
                        url: "/workalove/alunos-cancelados",
                        label: "ALUNOS CANCELADOS",
                      },
                      {
                        url: "/workalove/alunos-egressos",
                        label: "ALUNOS EGRESSOS",
                      },
                      {
                        url: "/workalove/alunos-graduacao",
                        label: "ALUNOS GRADUAÇÃO",
                      },
                      {
                        url: "/workalove/alunos-cursos-graduacao",
                        label: "ALUNOS CURSOS GRADUAÇÃO",
                      },
                      {
                        url: "/workalove/alunos-disciplinas-graduacao",
                        label: "ALUNOS DISCIPLINAS GRADUAÇÃO",
                      },
                    ],
                  },
                },
                {
                  titulo: "MOODLE",
                  submenu: {
                    links: [
                      { url: "#", label: "Matriculas-GRA" },
                      { url: "#", label: "Disciplinas-GRA" },
                      { url: "#", label: "Agendamentos-GRA" },
                      { url: "#", label: "Grupos-GRA" },
                      { url: "#", label: "Notas-GRA" },
                      { url: "#", label: "Usuários-GRA" },
                    ],
                  },
                },
                {
                  titulo: "HUBSPOT",
                  submenu: {
                    links: [
                      { url: "/hubspot/all", label: "TODOS" },
                      { url: "/hubspot/contatos", label: "CONTATOS" },
                      { url: "/hubspot/negocios", label: "NEGÓCIOS" },
                    ],
                  },
                },
                { titulo: "CLINICA NUVEM", url: "/clinica-nuvem" },
                { titulo: "CHAT GPT", url: "/chat-gpt" },
              ]}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

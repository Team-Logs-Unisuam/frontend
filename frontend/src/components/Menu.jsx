import { useState } from "react";
import { Link } from "react-router-dom";


const Menu = () => {
  const [MenuAberto, setMenuAberto] = useState(null);

  const toggleWorkalove = () => {
    setMenuAberto(MenuAberto === "workalove" ? null : "workalove");
  };

  const toggleMoodle = () => {
    setMenuAberto(MenuAberto === "moodle" ? null : "moodle");
  };


  const toggleHubspot = () => {
    setMenuAberto(MenuAberto === "hubspot" ? null : "hubspot");
  };
  return (
    <>
      {/* STATUS PROJETO*/}

      <li>
        <Link
          to="/"
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
          aria-current="page"
        >
          STATUS PROJETOS
        </Link>
      </li>

      {/* WORKALOVE */}
      <li>
        <button
          id="dropdownNavbarLinkWorkalove"
          className="flex items-center font-medium justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          onClick={toggleWorkalove}
          aria-expanded={MenuAberto === "workalove"}
        >
          WORKALOVE
          <svg
            className="w-2.5 h-2.5 ms-2.5 ml-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdownWorkalove"
          className={`z-10 ${
            MenuAberto === "workalove" ? "block" : "hidden"
          } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-400"
            aria-labelledby="dropdownNavbarLinkWorkalove"
          >
            <li>
              <Link
                to="/workalove/all"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                TODOS
              </Link>
            </li>
            <li>
              <Link
                to="/workalove/cursos"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                CURSOS
              </Link>
            </li>
            <li>
              <Link
                to="/workalove/cursos-disciplinas"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                CURSO DISCIPLINAS
              </Link>
            </li>
          </ul>
          <div className="py-1">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
              <li>
                <Link
                  to="/workalove/alunos-cancelados"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  ALUNOS CANCELADOS
                </Link>
              </li>
              <li>
                <Link
                  to="/workalove/alunos-egressos"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  ALUNOS EGRESSOS
                </Link>
              </li>
              <li>
                <Link
                  to="/workalove/alunos-graduacao"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  ALUNOS GRADUAÇÃO
                </Link>
              </li>
              <li>
                <Link
                  to="/workalove/alunos-cursos-graduacao"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  ALUNOS CURSOS GRADUAÇÃO
                </Link>
              </li>
              <li>
                <Link
                  to="/workalove/alunos-disciplinas-graduacao"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  ALUNOS DISCIPLINAS GRADUAÇÃO
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
      {/* GRUPO A */}
      <li>
        <Link
          to="/grupoa"
          className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          GRUPO A
        </Link>
      </li>

      {/* MODDLE */}
      <li>
        <button
          id="dropdownNavbarLink"
          data-dropdown-toggle="dropdownNavbar"
          className="flex items-center font-medium justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          aria-expanded={MenuAberto === "moodle"}
          onClick={toggleMoodle}
        >
          MOODLE
          <svg
            className="w-2.5 h-2.5 ms-2.5 ml-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdownNavbar"
          className={` z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
            MenuAberto === "moodle" ? "block" : "hidden"
          } absolute `}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-400"
            aria-labelledby="dropdownNavbarLink"
          >
            <li>
              <button
                to="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Matriculas-GRA
              </button>
            </li>
            <li>
              <button
                to="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Disciplinas-GRA
              </button>
            </li>
            <li>
              <button
                to="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Agendamentos-GRA
              </button>
            </li>
            <li>
              <button
                to="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Grupos-GRA
              </button>
            </li>
            <li>
              <button
                to="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Notas-GRA
              </button>
            </li>
            <li>
              <button
                to="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Usuários-GRA
              </button>
            </li>
          </ul>
        </div>
      </li>

      {/* HUBSPOT*/}

      <li>
        <button
          id="dropdownNavbarLinkHubspot"
          data-dropdown-toggle="dropdownHubspot"
          className="flex items-center font-medium justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          aria-expanded={MenuAberto === "hubspot"}
          onClick={toggleHubspot}
        >
          HUBSPOT
          <svg
            className="w-2.5 h-2.5 ms-2.5 ml-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdownHubspot"
          className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute ${
            MenuAberto === "hubspot" ? "block" : "hidden"
          } `}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-400"
            aria-labelledby="dropdownNavbarLinkHubspot"
          >
            <li>
              <Link
                to="/hubspot/all"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                TODOS
              </Link>
            </li>
            <li>
              <Link
                to="/hubspot/contatos"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                CONTATOS
              </Link>
            </li>
            <li>
              <Link
                to="/hubspot/negocios"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                NEGOCIOS
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default Menu;

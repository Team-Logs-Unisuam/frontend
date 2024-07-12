const Navbar = () => {

  return (
  <nav class="bg-gray-800 border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button href="#" class="flex items-center space-x-3 rtl:space-x-reverse text-white font-medium ">
            <img src="{{asset('images/logo-unisuam.png')}}" class="h-8" title="Unisuam" alt="Unisuam"/> ACOMPANHAMENTO PROJETOS UNISUAM
        </button>

        <div></div>

        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-800 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="/"
                       class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                       aria-current="page">STATUS PROJETOS</a>
                </li>
                <li>
                    <button id="dropdownNavbarLinkWorkalove" data-dropdown-toggle="dropdownWorkalove"
                            class="flex items-center font-medium justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                        WORKALOVE
                        <svg class="w-2.5 h-2.5 ms-2.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    <div id="dropdownWorkalove"
                         class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="/workalove/all"
                                   class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">TODOS</a>
                            </li>
                            <li>
                                <a href="/workalove/cursos"
                                   class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CURSOS</a>
                            </li>
                            <li>
                                <a href="/workalove/cursos-disciplinas"
                                   class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CURSO DISCIPLINAS</a>
                            </li>
                        </ul>
                        <div class="py-1">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="/workalove/alunos-cancelados"
                                       class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ALUNOS CANCELADOS</a>
                                </li>
                                <li>
                                    <a href="/workalove/alunos-egressos"
                                       class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ALUNOS EGRESSOS</a>
                                </li>
                                <li>
                                    <a href="/workalove/alunos-graduacao"
                                       class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ALUNOS GRADUAÇÃO</a>
                                </li>
                                <li>
                                    <a href="/workalove/alunos-cursos-graduacao"
                                       class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ALUNOS CURSOS GRADUAÇÃO</a>
                                </li>
                                <li>
                                    <a href="/workalove/alunos-disciplinas-graduacao"
                                       class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ALUNOS DISCIPLINAS GRADUAÇÃO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="/grupoa"
                       class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">GRUPO
                        A</a>
                </li>
                <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                            class="flex items-center font-medium justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                        MOODLE
                        <svg class="w-2.5 h-2.5 ms-2.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    <div id="dropdownNavbar"
                         class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                                <button href="#"
                                   class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Matriculas-GRA</button>
                            </li>
                            <li>
                                <button href="#"
                                   class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Disciplinas-GRA</button>
                            </li>
                            <li>
                                <button href="#"
                                   class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Agendamentos-GRA</button>
                            </li>
                            <li>
                                <button href="#"
                                   class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Grupos-GRA</button>
                            </li>
                            <li>
                                <button href="#"
                                   class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Notas-GRA</button>
                            </li>
                            <li>
                                <button href="#"
                                   class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Usuários-GRA</button>
                            </li>
                        </ul>
                        <div class="py-1">
                            <button href="#"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                out</button>
                        </div>
                    </div>
                </li>
                <li>
                    <button id="dropdownNavbarLinkHubspot" data-dropdown-toggle="dropdownHubspot"
                            class="flex items-center font-medium justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                        HUBSPOT
                        <svg class="w-2.5 h-2.5 ms-2.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    <div id="dropdownHubspot"
                         class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="/hubspot/all"
                                   class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">TODOS</a>
                            </li>
                            <li>
                                <a href="/hubspot/contatos"
                                   class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CONTATOS</a>
                            </li>
                            <li>
                                <a href="/hubspot/negocios"
                                   class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">NEGOCIOS</a>
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

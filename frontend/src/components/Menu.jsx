import { Link } from "react-router-dom";
import { useState } from "react";

const Menu = ({ dados }) => {
  const [menuAberto, setMenuAberto] = useState(null);

  if (!Array.isArray(dados)) {
    return null;
  }

  const toggleMenu = (titulo) => {
    setMenuAberto(menuAberto === titulo ? null : titulo);
  };

  return (
    <ul className="2xl:flex">
      {dados.map((item, index) => (
        <li
          key={index}
          className="flex flex-col mt-4 font-medium 2xl:flex-row 2xl:mt-0 2xl:space-x-8 rtl:space-x-reverse px-1"
        >
          <button
            id={`dropdownNavbarLink${item.titulo}`}
            className="flex items-center font-medium justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            onClick={item.submenu ? () => toggleMenu(item.titulo) : null}
            aria-expanded={menuAberto === item.titulo}
          >
            {item.titulo && !item.submenu && (
              <Link to={`/${item.titulo.toLowerCase().replace(/\s+/g, "-")}`}>
                {item.titulo}
              </Link>
            )}

            {item.titulo && item.submenu && (
              item.titulo
            )}
            {item.submenu && (
              <svg
                className="w-2.5 h-2.5 ms-2.5 ml-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            )}
          </button>

          {item.submenu && (
            <div
              id={`dropdown${item.titulo}`}
              className={`z-10 ${
                menuAberto === item.titulo ? "block" : "hidden"
              } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby={`dropdownNavbarLink${item.titulo}`}
              >
                {item.submenu.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;

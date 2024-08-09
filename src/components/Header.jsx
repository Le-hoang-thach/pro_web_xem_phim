import PropTypes from "prop-types";
import { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/outline'; 

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-[9999] shadow-md h-16">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between h-full">
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-2xl font-bold text-red-600 uppercase">Movie</h1>
          <button
            className="md:hidden text-white p-2 hover:bg-gray-700 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>

        <nav className={`absolute top-16 left-0 w-full bg-black/90 text-white md:static md:flex md:flex-row md:items-center md:space-x-6 md:bg-transparent md:text-white ${menuOpen ? "block" : "hidden"} md:flex`}>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 px-4 py-2">
            <a href="#" className="hover:text-red-600 transition-colors duration-300">Home</a>
            <a href="#" className="hover:text-red-600 transition-colors duration-300">About</a>
            <a href="#" className="hover:text-red-600 transition-colors duration-300">Contact</a>
          </div>

          <div className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 px-4 py-2 ${menuOpen ? "block" : "hidden"} md:flex`}>
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-600 rounded-lg p-2 text-black focus:border-red-600 focus:outline-none transition-colors duration-300 w-full md:w-auto"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
              onClick={() => onSearch(search)}
            >
              Search
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;

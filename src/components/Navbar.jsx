import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navigation = () => (
  <ul className="flex flex-col sm:flex-row sm:space-x-10 text-black text-lg font-bebas font-semibold ">
    <li>
      <a href="#home" className="hover:text-blue-800">
        Home
      </a>
    </li>
    <li>
      <a href="#routes" className="hover:text-blue-800">
        BusRoutes
      </a>
    </li>
    <li>
      <a href="#why-us" className="hover:text-blue-800">
        AboutUs
      </a>
    </li>
    <li>
      <a href="#whatsapp" className="hover:text-blue-800">
        Contact
      </a>
    </li>
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className=" bg-white w-full fixed top-0 left-0 right-0  shadow-lg z-50">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="/assets/navbar_logo.png"
            alt="Logo"
            className="w-16 h-16 cursor-pointer"
            onClick={() => navigate("/")}
          />

          <span className=" font-outfit text-black text-xl font-bold ">
            NandhiGhosh Bus
          </span>
        </div>

        <nav className="hidden sm:block">
          <Navigation />
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white sm:hidden focus:outline-none"
        >
          {isOpen ? (
            <img src="/assets/close.png" alt="Close" className="w-8 h-8" />
          ) : (
            <img src="/assets/menu.png" alt="Menu" className="w-8 h-8" />
          )}
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="sm:hidden bg-grey-300 px-8 py-3 text-center font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation />
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;

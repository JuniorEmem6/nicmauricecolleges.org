import React, { useState } from "react";
import { Link } from "react-router-dom";
import Maurice from "../assets/maurice.svg";
import { RiMenu2Fill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-around">
        {/* Logo */}
        <div className="ml-[-60px] lg:ml-[70px]">
          <img
            src={Maurice}
            alt="Logo"
            className="h-[190px] w-[160px] md:h-[200px] md:w-[200px]"
          />
        </div>

        {/* Menu Button for Mobile */}
        <button
          className="md:hidden block text-gray-500 focus:outline-none"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? (
            <MdCancel className="h-8 w-8" />
          ) : (
            <RiMenu2Fill className="h-8 w-8" />
          )}
        </button>

        {/* Navigation Links (large screens) */}

        <ul className="hidden lg:flex items-center justify-between w-[450px]">
          <li className="hover:text-blue-600 text-gray-500 text-[16px] md:text-[17px]">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-600 text-gray-500 text-[16px] md:text-[17px]">
            <Link to="/journal">Journals</Link>
          </li>
          <li className="hover:text-blue-600 text-gray-500 text-[16px] md:text-[17px]">
            <Link to="/institute">Institutes</Link>
          </li>
          <li className="hover:text-blue-600 text-gray-500 text-[16px] md:text-[17px]">
            <Link to="/archive">Geni-Nexus</Link>
          </li>
          <li className="hover:text-blue-600 text-gray-500 text-[16px] md:text-[17px]">
            <Link to="/about">About</Link>
          </li>
           <li className="hover:text-blue-600 text-gray-500 text-[16px] md:text-[17px]">
            <Link to="/academy">Academy</Link>
          </li>
        </ul>

        {/* Publish Button (visible on larger screens) */}
        <div className="hidden md:flex lg:mr-[60px]">
          <Link to="/publish">
            <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
              Publish
            </button>
          </Link>
        </div>
      </div>

      {/* Publish Button (visible in mobile navigation) */}
      {isNavOpen && (
        <div className="block md:hidden mt-[-20px] h-[1500px]">
          <ul>
            <li className="hover:text-blue-600 text-gray-500 text-[21px] font-semibold ml-[20px] md:text-[17px]">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-600 text-gray-500 text-[21px] font-semibold ml-[20px] mt-[6px] md:text-[17px]">
              <Link to="/journal">Journals</Link>
            </li>
            <li className="hover:text-blue-600 text-gray-500 text-[16px] md:text-[17px]">
            <Link to="/institute">Institutes</Link>
          </li>
            <li className="hover:text-blue-600 text-gray-500 text-[21px] font-semibold ml-[20px] mt-[6px] md:text-[17px]">
              <Link to="/archive">Geni-Nexus</Link>
            </li>
            <li className="hover:text-blue-600 text-gray-500 text-[21px] font-semibold ml-[20px] mt-[6px] md:text-[17px]">
              <Link to="/about">About</Link>
            </li>
          </ul>
          {/* <Link to="/publish">
            <button className="w-full text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
              Publish
            </button>
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Header;

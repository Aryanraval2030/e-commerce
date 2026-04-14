import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Header() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <nav className="text-xl flex items-center justify-between relative lg:h-[5rem] h-[4rem] px-5">
      <div>
        <p>logo</p>
      </div>
      <ul className="lg:flex hidden lg:gap-[9rem]">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
        <li>
          <Link to="/catagory">catagory</Link>
        </li>
        <li>
          <Link to="/service">service</Link>
        </li>
      </ul>
      <div className="lg:flex lg:gap-6 hidden">
        <FaOpencart className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
      </div>

      <div
        onClick={() => setHamburger(!hamburger)}
        className="lg:hidden flex flex-col justify-between w-7 h-5"
      >
        <span
          className={`h-[3px] bg-black duration-300 ${hamburger ? "rotate-45 translate-y-[10px]" : ""}`}
        ></span>
        <span
          className={`h-[3px] bg-black duration-300 ${hamburger ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`h-[3px] bg-black duration-300 ${hamburger ? "-rotate-45 -translate-y-[10px]" : ""}`}
        ></span>
      </div>

      {/* open and close using hambuger */}
      <div
        onClick={() => setHamburger(false)}
        className={`fixed inset-0 transition-opacity duration-300 ${hamburger ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-[70%] transform transition-transform duration-300 ease-in-out lg:hidden bg-white ${hamburger ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-end gap-6 mt-5 px-5">
          <div
            onClick={() => setHamburger(!hamburger)}
            className="lg:hidden flex flex-col justify-between w-7 h-5"
          >
            <span
              className={`h-[3px] bg-black duration-300 ${hamburger ? "rotate-45 translate-y-[10px]" : ""}`}
            ></span>
            <span
              className={`h-[3px] bg-black duration-300 ${hamburger ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`h-[3px] bg-black duration-300 ${hamburger ? "-rotate-45 -translate-y-[10px]" : ""}`}
            ></span>
          </div>

          <Link to="/" onClick={() => setHamburger(false)}>
            home
          </Link>
          <Link to="/products" onClick={() => setHamburger(false)}>
            products
          </Link>
          <Link to="/catagory" onClick={() => setHamburger(false)}>
            catagory
          </Link>
          <Link to="/service" onClick={() => setHamburger(false)}>
            service
          </Link>

          <div className="flex gap-6 mt-5">
            <FaOpencart className="cursor-pointer" />
            <FaUser className="cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

import { useState } from "react";

function Header() {
  const [navHidden, setNavHidden] = useState(true);

  const toggleNav = () => {
    setNavHidden(!navHidden);
  };

  return (
    <nav className="w-100pc flex flex-column md-flex-row md-px-10 py-5 bg-black">
      <div className="flex justify-between">
        <a href="#" className="logo flex items-center p-2 mr-4 no-underline">
          DexsFast
        </a>
        <a
          onClick={toggleNav}
          data-target="#nav-items"
          href="#"
          className="flex items-center ml-auto md-hidden black opacity-50 hover-opacity-100 ease-300 p-1 m-3"
        >
          <i className="fa-solid fa-bars"></i>
        </a>
      </div>
      <div
        id="nav-items"
        className={`flex sm-w-100pc flex-column orange md-flex md-flex-row md-justify-end items-center ${
          navHidden ? "hidden" : ""
        }`}
      >
        <a href="#home" className="fs-s1 mx-3 py-3   ">
          Home
        </a>
        <a href="#features" className="fs-s1 mx-3 py-3  ">
          Features
        </a>
        <a href="#price" className="fs-s1 mx-3 py-3 ">
          Pricing
        </a>

        <a href="#" className="button bg-white black fw-600 no-underline mx-5">
          Register
        </a>
      </div>
    </nav>
  );
}

export default Header;

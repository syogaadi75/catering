import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbars = () => {
  let Links = [
    { name: "Beranda", link: "/" },
    { name: "Menu", link: "/menu" },
    { name: "Toko Mitra Kami", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <img
            src="https://lelogama.go-jek.com/prime/upload/image/gofood-horizontal-logo-solid.svg"
            class="mr-3 h-8"
            alt="FlowBite Logo"
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="right-8 top-3 cursor-pointer md:hidden absolute"
        >
          <MenuIcon name={open ? "close" : "menu"} fontSize="large"></MenuIcon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-base md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="md:ml-5 bg-primary py-2 px-5 rounded-lg text-white ">
            Masuk/Daftar
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbars;

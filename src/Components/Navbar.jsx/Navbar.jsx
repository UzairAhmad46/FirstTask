import React, { useState } from 'react';
import { AlignJustify, X } from 'lucide-react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="md:flex flex-col md:flex-row md:justify-center md:items-center p-4 w-full sm:p-6 md:p-8 lg:p-10 sticky z-[20]">
        <div className=" flex justify-between items-center cursor-pointer">
          <span className="font-semibold text-[#7030F1] text-4xl ">Logo</span>
          <span className="text-3xl md:hidden block mx-2">
            {menu ? (
              <X onClick={handleMenu} />
            ) : (
              <AlignJustify onClick={handleMenu} />
            )}
          </span>
        </div>

        <ul
          className={`md:flex flex-col sm:flex-row gap-[40px] items-center cursor-pointer text-black text-xl leading-[60px] w-full md:w-[400px] ml-0 md:ml-96 z-[-1] md:z-auto md:static  absolute  bg-white  left-0 md:auto md:py-0 py-4 md:pl-0 pl-7  md:opacity-100 opacity-0 top-[-400px] transition-all ease-induration-500 ${
            menu ? 'opacity-100 top-[85px]' : 'opacity-0  '
          }`}
        >
          <li className="mx-4 my-6 md:my-0" id="Home">
            Home
          </li>
          <li className="mx-4 my-6 md:my-0" id="Menu">
            Menu
          </li>
          <li className="mx-4 my-6 md:my-0" id="About">
            About
          </li>
          <li className="mx-4 my-6 md:my-0" id="Contact">
            Contact
          </li>
          <div className="m-2 flex flex-col sm:flex-row gap-3 ml-0">
            <button className="border border-gray-300 py-4 px-5 rounded-xl cursor-pointer w-full sm:w-auto flex-shrink-0">
              Login
            </button>
            <button className="bg-[#7030F1] text-white py-[12px] px-[20px] font-semibold rounded-xl cursor-pointer w-full sm:w-auto flex-shrink-0">
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

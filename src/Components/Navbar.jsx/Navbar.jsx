import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center p-4 w-full sm:p-6 md:p-8 lg:p-10 sticky z-[20]">
        <div className="text-4xl font-semibold text-[#7030F1] cursor-pointer">
          Logo
        </div>
        <ul className="flex flex-col sm:flex-row gap-[40px] items-center cursor-pointer text-black text-xl leading-[60px] w-full md:w-[400px] ml-0 md:ml-96">
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className="m-2 flex flex-col sm:flex-row gap-3 ml-0 md:ml-2">
          <button className="border border-gray-300 py-4 px-5 text-center rounded-xl cursor-pointer w-full sm:w-auto">
            Login
          </button>
          <button className="bg-[#7030F1] text-white py-3 px-5 font-semibold text-center rounded-xl cursor-pointer w-full sm:w-auto">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

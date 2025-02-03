import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="w-full h-[688px] bg-[#101323]">
        <div className=" mx-auto flex justify-between text-white p-[60px] w-[1228px] h-[152px] ">
          <div>
            <h1 className="text-3xl font-bold">Start your 30-day free trial</h1>
            <p className="text-[#94969C]">
              Join over 4,000 users already growing with company name.
            </p>
          </div>
          <div>
            <button className="w-[127px] h-[48px] bg-[#7030F1] text-white font-semibold rounded-xl">
              Get Started
            </button>
          </div>
        </div>
        <hr className="text-gray-500 mt-[60px]   ml-[20%] w-[60%]" />

        <div className="conatiner2 w-[1228px] h-[240px] flex justify-between ml-[20%] items-center mt-[50px]">
          <div className="logo w-[320px] h-[132px]">
            <h1 className="text-3xl font-bold text-[#7030F1]">Logo</h1>
            <p className="text-gray-400 mt-2">
              Lorem Ipsum dolor set amit. Lorem is a dummy text used wordwide in
              websites.
            </p>
          </div>
          <div className="text-gray-400  space-y-2">
            <p>Product</p>
            <p>Overview</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Releases</p>
          </div>
          <div className="text-gray-400 space-y-2">
            <p>Services</p>
            <p>Category 1</p>
            <p>Category 2</p>
            <p>Category 3</p>
            <p>Category 4</p>
          </div>
          <div className="text-gray-400 space-y-2 ">
            <p>Company</p>
            <p>About</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="text-gray-400  space-y-2 mt-[10px]">
            <p>Resources</p>
            <p>Blog</p>
            <p>Events</p>
            <p>Help centres</p>
            <p>Tutorials</p>
            <p>Support</p>
          </div>
        </div>

        <div className="relative flex justify-between items-center">
          <div className="absolute  top-[8rem] left-[20%] text-white">
            <p>© 2025 company name. All rights reserved.</p>
          </div>
          <div className="icons text-white space-x-4 absolute top-[8rem] right-[20%]">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

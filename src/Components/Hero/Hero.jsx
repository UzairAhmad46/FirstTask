import React from 'react';
import img from '../../assets/Illustration.jpg';
import IconCard from '../IconCard/IconCard';
import icon1 from '../../assets/briefcase-duotone 1(2).png';
import icon2 from '../../assets/buildings-duotone 1.png';
import icon3 from '../../assets/users-duotone 1.png';
import pen from '../../assets/pen-nib-duotone 1.png';
import JopPost from '../JopPost/JopPost';
import Faq from '../FAQSection/Faq';
const Hero = () => {
  return (
    <div className="container mx-auto" id="Home">
      <div className=" container  flex justify-between mt-[100px]    max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:flex lg:item-center lg:gap-x-10 lg:px-8 lg:py-20">
        <div className="w-[600px]">
          <h1 className="font-bold text-[60px] font-weight:[700] leading-[72px]">
            Find a job that suits your
            <span className="text-[#7030F1] font-family:'DM Sans', sans-serif latter-spacing:-2% italic leading-[72px] p-1.5">
              interest & skills.
            </span>
          </h1>
          <p className="font-weight:[400] text-md leading-[24px] text-[16px] text-black">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </p>
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute top-[30px] text-blue-600 left-3"></i>
            <input
              type="text"
              placeholder="Job title, Keyword..."
              className="mt-1.5 p-5 border border-gray-300 rounded-xl w-full bg-[#E4E5E8] placeholder:text-black pl-10"
            />
            <button className="absolute top-[16px] right-3 bg-[#7030F1] text-white p-[2%] rounded-xl">
              Find Jobs
            </button>
          </div>

          <p className="mt-2">
            <span className="text-bold">Suggestion</span>: Designer,
            Programming,
            <span className="text-[#7030F1]"> Digital Marketer,</span> Video,
            Animation
          </p>
        </div>
        <div className="absolute top-[29%] right-[15%]">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="flex flex-col-reverse ">
        <IconCard
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
          text1="Job Offers"
          text2="Job Seekers"
          text3="Companies"
          title1="1,75,324"
          title2="1,75,324"
          title3="1,75,324"
        />
      </div>

      <h1 className="text-[#000000] text-[34px] leading-[44px] tracking-[-0.72px] font-semibold ml-[13.5%] mb-[30px] mt-[100px] ">
        Most Popular Vacancies
      </h1>
      <div className="flex  justify-evenly items-center  gap-[30px]">
        <div>
          <h2 className=" font-bold">Anesthesiologists</h2>
          <p>45,904 Open Positions</p>
          <div className="mt-[30px]">
            <h2 className=" font-bold">Maxillofacial Surgeons</h2>
            <p>74,875 Open Positions</p>
          </div>
          <div className="mt-[30px]">
            <h2 className=" font-bold">Financial Manager</h2>
            <p>61,391 Open Positions</p>
          </div>
        </div>
        <div>
          <h2 className=" font-bold">Surgeons</h2>
          <p>50,364 Open Positions</p>
          <div className="mt-[30px]">
            <h2 className=" font-bold">Financial Manager</h2>
            <p>61,391 Open Positions</p>
          </div>
          <div className="mt-[30px]">
            <h2 className=" font-bold">Financial Manager</h2>
            <p>61,391 Open Positions</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Obstetricians-Gynecologists</h2>
          <p>4,339 Open Positions</p>
          <div className="mt-[30px]">
            <h2 className=" font-bold">Financial Manager</h2>
            <p>61,391 Open Positions</p>
          </div>{' '}
          <div className="mt-[30px]">
            <h2 className=" font-bold">Financial Manager</h2>
            <p>61,391 Open Positions</p>
          </div>
        </div>
        <div>
          <h2 className=" font-bold">Orthodontists</h2>
          <p>20,079 Open Positions</p>
          <div className="mt-[30px]">
            <h2 className=" font-bold text-[#8526FF]">Financial Manager</h2>
            <p>61,391 Open Positions</p>
          </div>
          <div className="mt-[30px]">
            <h2 className=" font-bold">Financial Manager</h2>
            <p>61,391 Open Positions</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between m-auto items-center mt-[100px] w-[70%] mb-10">
        <h1 className="text-3xl font-bold">Popular category</h1>
        <button className="border border-gray-300 py-4 px-5 text-center rounded-xl cursor-pointer  ">
          View All
        </button>
      </div>

      <div className="flex justify-between m-auto  w-[70%] gap-[30px] ">
        <div className="w-[293.5px] h-[90px] bg-[#F2F4F7] rounded-xl flex justify-flex-start items-center p-[10px]">
          <div>
            <img src={pen} alt="" className="bg-[#C6ACF9] p-[10px] rounded" />
          </div>
          <div className="flex flex-col ml-[10px]">
            <h2>Graphics & Design</h2>
            <p>357 Open position</p>
          </div>
        </div>
        <div className="w-[293.5px] h-[90px] bg-[#F2F4F7] rounded-xl flex justify-flex-start items-center p-[10px]">
          <div>
            <img src={pen} alt="" className="bg-[#C6ACF9] p-[10px] rounded" />
          </div>
          <div className="flex flex-col ml-[10px]">
            <h2>Graphics & Design</h2>
            <p>357 Open position</p>
          </div>
        </div>
        <div className="w-[293.5px] h-[90px] bg-[#F2F4F7] rounded-xl flex justify-flex-start items-center p-[10px]">
          <div>
            <img src={pen} alt="" className="bg-[#C6ACF9] p-[10px] rounded" />
          </div>
          <div className="flex flex-col ml-[10px]">
            <h2>Graphics & Design</h2>
            <p>357 Open position</p>
          </div>
        </div>
        <div className="w-[293.5px] h-[90px] bg-[#F2F4F7] rounded-xl flex justify-flex-start items-center p-[10px]">
          <div>
            <img src={pen} alt="" className="bg-[#C6ACF9] p-[10px] rounded" />
          </div>
          <div className="flex flex-col ml-[10px]">
            <h2>Graphics & Design</h2>
            <p>357 Open position</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between m-auto  w-[70%] mt-[30px] gap-[30px] ">
        <div className="w-[293.5px] h-[90px] bg-[#F2F4F7] rounded-xl flex justify-flex-start items-center p-[10px]">
          <div>
            <img src={pen} alt="" className="bg-[#C6ACF9] p-[10px] rounded" />
          </div>
          <div className="flex flex-col ml-[10px]">
            <h2>Graphics & Design</h2>
            <p>357 Open position</p>
          </div>
        </div>
        <div className="w-[293.5px] h-[90px] bg-[#F2F4F7] rounded-xl flex justify-flex-start items-center p-[10px]">
          <div>
            <img src={pen} alt="" className="bg-[#C6ACF9] p-[10px] rounded" />
          </div>
          <div className="flex flex-col ml-[10px]">
            <h2>Graphics & Design</h2>
            <p>357 Open position</p>
          </div>
        </div>
        <div className="w-[293.5px] h-[90px] bg-[#F2F4F7] rounded-xl flex justify-flex-start items-center p-[10px]">
          <div>
            <img src={pen} alt="" className="bg-[#C6ACF9] p-[10px] rounded" />
          </div>
          <div className="flex flex-col ml-[10px]">
            <h2>Graphics & Design</h2>
            <p>357 Open position</p>
          </div>
        </div>
        <div className="w-[293.5px] h-[90px] bg-[#F2F4F7] rounded-xl flex justify-flex-start items-center p-[10px]">
          <div>
            <img src={pen} alt="" className="bg-[#C6ACF9] p-[10px] rounded" />
          </div>
          <div className="flex flex-col ml-[10px]">
            <h2>Graphics & Design</h2>
            <p>357 Open position</p>
          </div>
        </div>
      </div>

      <hr className="mt-[100px] text-gray-300 w-full" />

      <JopPost />
      <Faq />
    </div>
  );
};

export default Hero;

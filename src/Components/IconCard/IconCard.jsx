import React from 'react';

const IconCard = (props) => {
  return (
    <>
      <div className="flex justify-center items-center gap-10 w-full max-w-[1200px] mx-auto mt-[150px]">
        <div className="w-[234px] h-[84.5px] bg-[#F2F4F7] flex justify-flex-start pl-2 items-center gap-2">
          <img
            src={props.icon1}
            alt="Icon"
            className="w-[30px] h-[30px] bg-[#C6ACF9] p-2"
          />
          <div className="ml-1">
            <div>{props.title1}</div>
            <div>{props.text1}</div>
          </div>
        </div>
        <div className="w-[234px] h-[84.5px] bg-[#F2F4F7] flex justify-flex-start pl-2 items-center gap-2">
          <img
            src={props.icon2}
            alt="Icon"
            className="w-[30px] h-[30px] bg-[#8526FF] p-2"
          />
          <div className="ml-1">
            <div>{props.title2}</div>
            <div>{props.text2}</div>
          </div>
        </div>
        <div className="w-[234px] h-[84.5px] bg-[#F2F4F7] flex justify-flex-start pl-2 items-center gap-2">
          <img
            src={props.icon3}
            alt="Icon"
            className="w-[30px] h-[30px] bg-[#C6ACF9] p-2"
          />
          <div className="ml-1">
            <div>{props.title3}</div>
            <div>{props.text3}</div>
          </div>
        </div>
        <div className="w-[234px] h-[84.5px] bg-[#F2F4F7] flex justify-flex-start pl-2 items-center gap-2  ">
          <img
            src={props.icon1}
            alt="Icon"
            className="w-[30px] h-[30px] bg-[#C6ACF9] p-2 "
          />
          <div className="ml-1">
            <div>{props.title1}</div>
            <div>{props.text1}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconCard;

// import React from 'react';

// const IconCard = (props) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
//       <div className="bg-[#F2F4F7] p-4 flex items-center gap-4 rounded-xl">
//         <img
//           src={props.icon1}
//           alt="Icon"
//           className="bg-[#C6ACF9] p-2 rounded"
//         />
//         <div>
//           <div className="font-bold">{props.title1}</div>
//           <div>{props.text1}</div>
//         </div>
//       </div>
//       <div className="bg-[#F2F4F7] p-4 flex items-center gap-4 rounded-xl">
//         <img
//           src={props.icon1}
//           alt="Icon"
//           className="bg-[#C6ACF9] p-2 rounded"
//         />
//         <div>
//           <div className="font-bold">{props.title1}</div>
//           <div>{props.text1}</div>
//         </div>
//       </div>
//       <div className="bg-[#F2F4F7] p-4 flex items-center gap-4 rounded-xl">
//         <img
//           src={props.icon2}
//           alt="Icon"
//           className="bg-[#C6ACF9] p-2 rounded"
//         />
//         <div>
//           <div className="font-bold">{props.title2}</div>
//           <div>{props.text2}</div>
//         </div>
//       </div>
//       <div className="bg-[#F2F4F7] p-4 flex items-center gap-4 rounded-xl">
//         <img
//           src={props.icon2}
//           alt="Icon"
//           className="bg-[#C6ACF9] p-2 rounded"
//         />
//         <div>
//           <div className="font-bold">{props.title1}</div>
//           <div>{props.text1}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IconCard;

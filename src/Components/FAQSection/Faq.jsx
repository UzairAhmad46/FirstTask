// import React, { useState } from 'react';
// import minus from '../../assets/minus-circle(1).png';
// import plus from '../../assets/Icon(1).png';

// const Faq = () => {
//   const [openFQAId, setOpenFQAId] = useState(null);
//   const toggleFQAContent = (id) => {
//     setOpenFQAId((prevId) => (prevId === id ? null : id));
//   };

//   const faqs = [
//     {
//       id: 1,
//       question: 'Is there a free trial available?',
//       answer:
//         "Yes, you can try us out for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
//     },
//     {
//       id: 2,
//       question: 'Can I change my plan later?',
//       answer:
//         "Yes, you can try us out for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
//     },
//     {
//       id: 3,
//       question: 'What is your cancellation policy?',
//       answer:
//         "Yes, you can try us out for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
//     },
//     {
//       id: 4,
//       question: 'Can other info be added to the invoice?',
//       answer:
//         "Yes, you can try us out for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
//     },
//     {
//       id: 5,
//       question: 'How does billing work?',
//       answer:
//         "Yes, you can try us out for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
//     },
//   ];

//   return (
//     <>
//       <div className="mt-20 py-24 flex flex-col items-center">
//         <div className="lg:w-[60%]">
//           <div className="flex flex-col items-center gap-5 text-center">
//             <h1 className="text-xl lg:text-2xl font-[600]">
//               Frequently Asked Questions
//             </h1>
//             <p className="text-sm lg:text-base">
//               Everything you need to know about the product and billing
//             </p>
//           </div>
//         </div>
//         <div className="w-full lg:w-[60%] mt-10">
//           {faqs.map((faq) => (
//             <div
//               key={faq.id}
//               className="text-lg font-[500] border-b border-[#98a2b3] py-4"
//             >
//               <div className="flex justify-between items-center">
//                 <span className="text-sm lg:text-base">{faq.question}</span>
//                 <div
//                   className="size-6 rounded-full border border-[#98a2b3] text-[#98a2b3] flex justify-center items-center cursor-pointer"
//                   onClick={() => toggleFQAContent(faq.id)}
//                 >
//                   {openFQAId === faq.id ? (
//                     <img src={minus} alt="" className="size-4" />
//                   ) : (
//                     <img src={plus} alt="" className="size-4" />
//                   )}
//                 </div>
//               </div>
//               <div
//                 className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                   openFQAId === faq.id
//                     ? 'max-h-96 opacity-100 mt-4'
//                     : 'h-0 opacity-0'
//                 }`}
//               >
//                 <p className="text-[#667085] text-sm lg:text-base">
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Faq;

import React, { useState } from 'react';
import minus from '../../assets/minus-circle(1).png';
import plus from '../../assets/Icon(1).png';

const Faq = () => {
  const [openFQAId, setOpenFQAId] = useState(null);
  const toggleFQAContent = (id) => {
    setOpenFQAId((prevId) => (prevId === id ? null : id));
  };

  const faqs = [
    {
      id: 1,
      question: 'Is there a free trial available?',
      answer:
        "Yes, you can try us out for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 2,
      question: 'Can I change my plan later?',
      answer:
        "Yes, you can try us out for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 3,
      question: 'What is your cancellation policy?',
      answer:
        "Yes, you can try us out for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 4,
      question: 'Can other info be added to the invoice?',
      answer:
        "Yes, you can try us out for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 5,
      question: 'How does billing work?',
      answer:
        "Yes, you can try us out for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  return (
    <>
      <div className="mt-20 py-24 flex flex-col items-center">
        <div className="lg:w-[60%]">
          <div className="flex flex-col items-center gap-5 text-center">
            <h1 className="text-xl lg:text-2xl font-[600]">
              Frequently Asked Questions
            </h1>
            <p className="text-sm lg:text-base">
              Everything you need to know about the product and billing
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[60%] mt-10">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="text-lg font-[500] border-b border-[#98a2b3] py-4"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm lg:text-base">{faq.question}</span>
                <div
                  className="size-6 rounded-full text-[#98a2b3] flex justify-center items-center cursor-pointer"
                  onClick={() => toggleFQAContent(faq.id)}
                >
                  {openFQAId === faq.id ? (
                    <img src={minus} alt="" className="size-4" />
                  ) : (
                    <img src={plus} alt="" className="size-4" />
                  )}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFQAId === faq.id
                    ? 'max-h-96 opacity-100 mt-4'
                    : 'h-0 opacity-0'
                }`}
              >
                <p className="text-[#667085] text-sm lg:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;

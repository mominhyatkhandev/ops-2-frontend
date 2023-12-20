'use client';

import React, { useState } from 'react';
import arrowUp from '@/assets/icons/arrow-up.svg';
import arrowDown from '@/assets/icons/arrow-down.svg';
import Image from 'next/image';

const FAQ = () => {
  const faqs = [
    {
      question:
        'What modes of payment are available in easypaisa Online Payment Gateway?',
      answer:
        'We offer the following modes of payments. You may choose to integrate as many methods as you wish. • easypaisa Mobile Account • OTC (easypaisa token to be paid at 1link banks & franchise )'
    },
    {
      question:
        'What is the signing-up process for easypaisa Online Payment Gateway?',
      answer: 'CONTENT UNAVAILABLE'
    },
    {
      question: 'When will the amount be settled to the merchant?',
      answer: 'CONTENT UNAVAILABLE'
    },
    {
      question:
        'Are there any annual, monthly or setup charges to use the gateway service?',
      answer:
        'We offer the following modes of payments. You may choose to integrate as many methods as you wish. • easypaisa Mobile Account • OTC (easypaisa token to be paid at 1link banks & franchise )'
    },
    {
      question:
        'What modes of payment are available in easypaisa Online Payment Gateway?',
      answer:
        'We offer the following modes of payments. You may choose to integrate as many methods as you wish. • easypaisa Mobile Account • OTC (easypaisa token to be paid at 1link banks & franchise )'
    },
    {
      question:
        'Are there any annual, monthly or setup charges to use the gateway service?',
      answer:
        'We offer the following modes of payments. You may choose to integrate as many methods as you wish. • easypaisa Mobile Account • OTC (easypaisa token to be paid at 1link banks & franchise )'
    }
  ];
  const [activeTab, setActiveTab] = useState<string>('Online payment gateway');
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveQuestion(prevIndex => (prevIndex === index ? null : index));
  };
  return (
    <div className="flex flex-col pb-[120px] gap-20 justify-center items-center">
      <div
        id="NewRootRoot"
        className="flex flex-col w-full items-start justify-between"
      >
        <div className="bg-screen-grey flex flex-col justify-end w-full items-start">
          {/* <div className="flex flex-col gap-12 pb-[120px] items-start"> */}
          <div className="flex flex-col px-[150px] pt-[120px] w-full justify-end items-start gap-8">
            <div className="text-5xl font-semibold leading-tight text-secondary-base">
              How can we help you?
            </div>
            <div className="flex flex-row w-full items-center gap-8">
              <div
                className={`flex gap-9 items-center justify-center font-500 leading-tight cursor-pointer`}
                onClick={() => setActiveTab('Online payment gateway')}
              >
                <div className="flex items-start justify-center gap-9">
                  <span
                    className={`pb-2 flex items-center justify-center ${
                      activeTab === 'Online payment gateway'
                        ? 'text-primary-base border-primary-base border-b-2'
                        : 'text-secondary-base'
                    }`}
                  >
                    Online payments gateway
                  </span>
                  <div className="w-[1px] h-[10px] mt-[5px] bg-border-dark"></div>
                </div>
              </div>
              <div
                className={`flex items-start flex-col justify-start gap-9 font-500 leading-tight cursor-pointer  `}
                onClick={() => setActiveTab('QR payments')}
              >
                <div className="flex items-start justify-center gap-9">
                  <span
                    className={`pb-2 flex items-center justify-center ${
                      activeTab === 'QR payments'
                        ? 'text-primary-base border-primary-base border-b-2'
                        : 'text-secondary-base'
                    }`}
                  >
                    QR payments
                  </span>
                  <div className="w-[1px] h-[10px] mt-[5px] bg-border-dark"></div>
                </div>
              </div>

              <div
                className={`flex items-center justify-center font-500 leading-tight cursor-pointer`}
                onClick={() => setActiveTab('Mini apps')}
              >
                <div className="flex items-start justify-center gap-9">
                  <span
                    className={`pb-2 flex items-center justify-center ${
                      activeTab === 'Mini apps'
                        ? 'text-primary-base border-primary-base border-b-2'
                        : 'text-secondary-base'
                    }`}
                  >
                    Mini apps
                  </span>
                  {/* <div className="w-[1px] h-[10px] mt-[5px] bg-border-dark"></div> */}
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-8 px-[150px]">
        {faqs?.map((faq, index) => {
          return (
            <div
              key={index}
              className="w-full flex flex-col justify-between border-b-border-light border-b-[1px] items-center gap-8 pb-8"
            >
              <div className="w-full flex flex-col items-start">
                <div className="w-full ">
                  <div className="w-full flex flex-col justify-start items-start gap-3">
                    <div
                      onClick={() => handleToggle(index)}
                      className="font-medium leading-tight text-secondary-base cursor-pointer flex items-center justify-between gap-20 w-full"
                    >
                      <div>{faq.question}</div>
                      <div onClick={() => handleToggle(index)}>
                        {activeQuestion === index ? (
                          <Image
                            src={arrowUp}
                            alt={'arrow up'}
                            height={7}
                            width={12}
                            onClick={() => handleToggle(index)}
                          />
                        ) : (
                          <Image
                            src={arrowDown}
                            alt={'arrow down'}
                            height={7}
                            width={12}
                            onClick={() => handleToggle(index)}
                          />
                        )}
                      </div>
                    </div>
                    {activeQuestion === index && (
                      <div className="text-sm leading-tight text-secondary-500 w-4/5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;

// {
//   faqs.map((faq, index) => (
//     <div key={index} className="mb-4">
//       <div
//         className="cursor-pointer bg-blue-500 text-white p-3 rounded"
//         onClick={() => handleToggle(index)}
//       >
//         {faq.question}
//       </div>
//       {activeIndex === index && (
//         <div className="bg-gray-200 p-3 mt-2 rounded">{faq.answer}</div>
//       )}
//     </div>
//   ));
// }

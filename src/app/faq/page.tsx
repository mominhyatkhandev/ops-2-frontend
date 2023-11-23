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
    <div className="flex flex-col gap-20 justify-center items-center">
      <div
        id="NewRootRoot"
        className="flex flex-col w-full items-start h-min-screen gap-40"
      >
        <div className="bg-screen-grey flex flex-col justify-end w-full h-[313px] items-start">
          <div className="flex flex-col px-[150px] gap-12 items-start">
            <div className="flex flex-col w-full items-start">
              <div className="text-5xl font-semibold leading-[60px] text-secondary-base">
                How can we help you?
              </div>
            </div>
            <div className="flex flex-row w-full items-start gap-9">
              <div
                className={`font-500 leading-[20px] cursor-pointer pb-4 ${
                  activeTab === 'Online payment gateway' &&
                  'text-primary-base border-primary-base border-b-2'
                }`}
                onClick={() => setActiveTab('Online payment gateway')}
              >
                Online payment gateway
              </div>
              <div className="w-[1px] h-[15px] bg-border-dark"></div>
              <div
                className={`font-500 leading-[20px] cursor-pointer pb-4 ${
                  activeTab === 'QR payments' &&
                  'text-primary-base border-primary-base border-b-2'
                }`}
                onClick={() => setActiveTab('QR payments')}
              >
                QR payments
              </div>
              <div className="w-[1px] h-[15px] bg-border-dark"></div>

              <div
                className={`font-500 leading-[20px] cursor-pointer pb-4 ${
                  activeTab === 'Mini apps' &&
                  'text-primary-base border-primary-base border-b-2'
                }`}
                onClick={() => setActiveTab('Mini apps')}
              >
                Mini Apps
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start px-36">
        {faqs?.map((faq, index) => {
          return (
            <div
              key={index}
              className="w-full flex flex-col justify-between items-center gap-y-[36px]"
            >
              <div className="w-full flex gap-[80px] items-start justify-between">
                <div className="w-full flex flex-col justify-center items-start gap-4">
                  <div
                    onClick={() => handleToggle(index)}
                    className="font-medium leading-[20px] text-[#322c3c] cursor-pointer"
                  >
                    {faq.question}
                  </div>
                  {activeQuestion === index && (
                    <div className="text-sm leading-[18px] text-[#6f6b76] w-full">
                      {faq.answer}
                    </div>
                  )}
                </div>
                <div onClick={() => handleToggle(index)}>
                  {activeQuestion === index ? (
                    <Image
                      src={arrowDown}
                      alt={'arrow up'}
                      height={7}
                      width={12}
                    />
                  ) : (
                    <Image
                      src={arrowUp}
                      alt={'arrow up'}
                      height={7}
                      width={12}
                    />
                  )}
                </div>
              </div>
              <div
                id="Line"
                className="border-solid border-border-light w-full h-px border-t mb-[36px]"
              />
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

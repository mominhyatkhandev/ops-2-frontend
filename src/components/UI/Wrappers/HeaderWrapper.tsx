'use client';
import React from 'react';
import { useRouter } from 'next/router';
import { getHeaderTextForSegment } from '@/utils/helper';

interface IHeaderWrapper {
  heading: string;
  description?: string;
  show?: boolean;
}

function HeaderWrapper({
  heading,
  description,
  show = false
}: IHeaderWrapper): JSX.Element {
  // const router = useRouter();
  const currentURL: string[] = window.location.pathname.split('/');

  const getHeaderText = (urlSegments: string[]) => {
    console.log(currentURL, 'urlll');
    return currentURL.map((url, index, arr) => (
      <>
        {url && index > 0 && (
          <div key={index} className="flex gap-2">
            <span
              className={`${
                index !== arr.length - 1
                  ? 'text-secondary-base'
                  : 'text-secondary-400'
              }`}
            >
              {getHeaderTextForSegment(url)}
            </span>
            {index > 0 && index !== arr.length - 1 && (
              <span className="text-[10px] text-border-dark">/</span>
            )}
          </div>
        )}
      </>
    ));
  };
  return (
    <>
      <div className="px-[150px]">
        {show ? (
          <header className="text-secondary-base">
            <div className="pt-[24px] text-xs flex gap-2 font-normal">
              {getHeaderText(currentURL)}
            </div>
          </header>
        ) : // <div className="pt-[24px] text-xs flex gap-2 font-normal">
        //   Sign Up <span className="text-[10px] text-border-dark">/</span>
        //   <span className="text-secondary-400">Personal information</span>
        // </div>
        null}
        {show ? (
          <div className="flex flex-col pt-[36px] pb-[24px] gap-2">
            <div className="flex w-full text-5xl font-semibold text-secondary-base">
              {heading}
            </div>
            <div className="text-base font-normal text-secondary-600">
              {description}
            </div>
          </div>
        ) : (
          <div className={`flex flex-col pt-[76px] gap-2`}>
            <div className="flex w-full text-5xl font-semibold text-secondary-base">
              {heading}
            </div>
            <div className="text-base font-normal text-secondary-600">
              {description}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HeaderWrapper;

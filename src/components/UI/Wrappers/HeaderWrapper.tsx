import React from 'react';

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
  return (
    <>
      <div className="px-[150px]">
        {show ? (
          <div className="pt-[24px] text-xs flex gap-2 font-normal">
            Sign Up <span className="text-[10px] text-border-dark">/</span>
            <span className="text-secondary-400">Personal information</span>
          </div>
        ) : null}
        {show ? (
          <div className="flex flex-col pt-[36px] gap-2">
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

import React from 'react';

interface SignUpHeaderProps {
  label: string;
  description?: string;
  show: boolean;
}

function SignUpHeader({
  label,
  description,
  show
}: SignUpHeaderProps): JSX.Element {
  return (
    <>
      <div className="px-[150px]">
        {show ? (
          <div className="pt-[24px]">Sign Up / Personal information </div>
        ) : null}
        {show ? (
          <div className="flex flex-col pt-[36px] pb-[24px] gap-2">
            <div className="flex w-full text-5xl font-semibold text-secondary-base">
              {label}
            </div>
            <div className="text-base font-normal text-secondary-600">
              {description}
            </div>
          </div>
        ) : (
          <div className={`flex flex-col pt-[76px] pb-[24px] gap-2`}>
            <div className="flex w-full text-5xl font-semibold text-secondary-base">
              {label}
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

export default SignUpHeader;

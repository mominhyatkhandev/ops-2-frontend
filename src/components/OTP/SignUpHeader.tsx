import React from 'react';

interface SignUpHeaderProps {
  label: string;
  description?: string;
}

function SignUpHeader({ label, description }: SignUpHeaderProps): JSX.Element {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex w-full text-5xl font-semibold text-secondary-base">
          {label}
        </div>
        <div className="text-base font-normal text-secondary-600">
          {description}
        </div>
      </div>
    </>
  );
}

export default SignUpHeader;

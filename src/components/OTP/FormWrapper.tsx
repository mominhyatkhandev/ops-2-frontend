import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

interface IFormWrapper {
  children: ReactNode;
  className: string;
}

const FormWrapper = ({ children, className }: IFormWrapper) => {
  return (
    <div className="px-[150px]">
      <div
        className={`${className} border-[0.5px] rounded-lg border-border-light bg-screen-grey px-[290px] py-[60px]`}
      >
        {children}
      </div>
    </div>
  );
};

// FormWrapper.propTypes = {
//   children: PropTypes.node.isRequired
// };

export default FormWrapper;

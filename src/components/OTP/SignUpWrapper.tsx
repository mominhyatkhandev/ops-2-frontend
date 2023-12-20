import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

const WrapperComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-[150px]">
      <div className="border-[0.5px] rounded-lg border-border-light bg-screen-grey px-[290px] py-[60px]">
        {children}
      </div>
    </div>
  );
};

WrapperComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export default WrapperComponent;

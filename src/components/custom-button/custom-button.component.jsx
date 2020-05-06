import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  isFacebookSignIn,
  isAppleSignIn,
  ...otherProps
}) => (
  <button
    className={`${
      isGoogleSignIn
        ? 'google-sign-in'
        : isFacebookSignIn
        ? 'fb-sign-in'
        : isAppleSignIn
        ? 'apple-sign-in'
        : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

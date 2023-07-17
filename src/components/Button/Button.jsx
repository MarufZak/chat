import React from 'react';
import PurpleButton from './PurpleButton';

const Button = ({ colorScheme, children, ...props }, ref) => {
  let Component;
  if (colorScheme === 'purple') {
    Component = PurpleButton;
  } else {
    throw new Error(`Incorrect colorScheme for Button ${colorScheme}`);
  }

  return (
    <Component {...props} ref={ref}>
      {children}
    </Component>
  );
};

// ref passed for radix ui asChild prop for.
export default React.forwardRef(Button);

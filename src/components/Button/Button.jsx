import React from 'react';
import PurpleButton from './PurpleButton';
import { SIZES } from './Button.sizes';
import Icon from '../Icon';

const Button = ({ iconRight, colorScheme, children, size, ...props }, ref) => {
  let Component;
  if (colorScheme === 'purple') {
    Component = PurpleButton;
  } else {
    throw new Error(`Incorrect colorScheme for Button ${colorScheme}`);
  }

  const { fontSize, padding } = SIZES[size];

  return (
    <Component
      {...props}
      style={{ '--font-size': fontSize, '--padding': padding }}
      ref={ref}
    >
      {children}
      {iconRight && (
        <Icon width={fontSize} height={fontSize}>
          {iconRight}
        </Icon>
      )}
    </Component>
  );
};

// ref passed for radix ui asChild prop for.
export default React.forwardRef(Button);

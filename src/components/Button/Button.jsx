import React from 'react';
import PurpleButton from './PurpleButton';
import GrayButton from './GrayButton';
import { SIZES } from './Button.sizes';

const Button = (
  { iconRight: IconRight, colorScheme, children, size, ...props },
  ref
) => {
  let Component;
  if (colorScheme === 'purple') {
    Component = PurpleButton;
  } else if (colorScheme === 'gray') {
    Component = GrayButton;
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
      {IconRight && <IconRight size={fontSize} fontWeight={500} />}
    </Component>
  );
};

// ref passed for radix ui asChild prop for.
export default React.forwardRef(Button);

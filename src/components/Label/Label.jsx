import { Root } from '@radix-ui/react-label';
import React from 'react';

function Label({ children, asChild, htmlFor, ...props }) {
  return (
    <Root {...props} asChild={asChild} htmlFor={htmlFor}>
      {children}
    </Root>
  );
}

export default Label;

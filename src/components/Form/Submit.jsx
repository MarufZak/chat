import { Submit as RadixSubmit } from '@radix-ui/react-form';
import React from 'react';

const Submit = ({ children, ...props }) => {
  return (
    <RadixSubmit asChild {...props}>
      {children}
    </RadixSubmit>
  );
};

export default Submit;

import React from 'react';
import Submit from './Submit';
import Input from './Input';
import { Root } from '@radix-ui/react-form';

export const FormContext = React.createContext();

const Form = ({ isLoading, children, ...props }) => {
  return (
    <FormContext.Provider value={{ isLoading }}>
      <Root {...props}>{children}</Root>
    </FormContext.Provider>
  );
};

Form.Input = Input;
Form.Submit = Submit;
export default Form;

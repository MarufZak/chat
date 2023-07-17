import React from 'react';
import Submit from './Submit';
import Input from './Input';
import { Root } from '@radix-ui/react-form';

const Form = ({ children, ...props }) => {
  return <Root {...props}>{children}</Root>;
};

Form.Input = Input;
Form.Submit = Submit;
export default Form;

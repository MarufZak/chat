import React from 'react';
import { styled } from 'styled-components';
import Form from '../Form';
import Heading from '../Heading';
import Button from '../Button';

function Login() {
  return (
    <Wrapper>
      <Form className="form">
        <Heading level={3}>Log in to your account</Heading>
        <p className="subtitle">Welcome back! Please enter your details.</p>
        <Form.Input label="Email" placeholder="Enter your email" type="email" />
        <Form.Input
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <Button size="sm" colorScheme="purple" variant="text">
          Hello
        </Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20vh;
  text-align: center;

  .form {
    max-width: 360px;
    width: 100%;
  }

  .subtitle {
    margin: 12px 0 32px;
  }
`;

export default Login;

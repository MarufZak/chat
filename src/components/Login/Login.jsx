import React from 'react';
import { styled } from 'styled-components';
import Form from '../Form';
import Heading from '../Heading';
import { fadeOut } from './Login.animations';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { handleLogin } = React.useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin({
      id: 12345,
    });

    navigate('/dashboard');
  };

  return (
    <Wrapper>
      <Form className="form" onSubmit={handleSubmit}>
        <Heading level={3}>Log in to your account</Heading>
        <p className="subtitle">Welcome back! Please enter your details.</p>
        <Form.Input
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        <Form.Input
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <Form.Submit>Sign in</Form.Submit>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  animation: ${fadeOut} 0.3s;
  min-height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15vh;
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

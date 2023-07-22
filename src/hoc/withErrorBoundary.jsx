import React from 'react';
import Heading from '../components/Heading/Heading';
import { styled } from 'styled-components';

const withErrorBoundary = (Component, boundaryStyles) => {
  return class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

    componentDidCatch(error, info) {
      console.log(info);
    }

    render() {
      if (this.state.hasError) {
        return (
          <ErrorPage style={boundaryStyles}>
            <Heading level={6}>Something went wrong!</Heading>
          </ErrorPage>
        );
      }

      return <Component />;
    }
  };
};

const ErrorPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default withErrorBoundary;

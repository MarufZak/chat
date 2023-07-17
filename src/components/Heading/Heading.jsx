import React from 'react';
import styled from 'styled-components';

const BaseHeading = styled.div`
  font-weight: 600;
  line-height: 1.25;
  color: var(--color-gray-900);
`;

const H1 = styled(BaseHeading)`
  font-size: clamp(4.8rem, 5vw, 8rem);
`;

const H2 = styled(BaseHeading)`
  font-size: 3.6rem;
`;

const H3 = styled(BaseHeading)`
  font-size: 3rem;
`;

const H4 = styled(BaseHeading)`
  font-size: 2.4rem;
`;

const H5 = styled(BaseHeading)`
  font-size: 2rem;
`;

const H6 = styled(BaseHeading)`
  font-size: 1.6rem;
`;

const Heading = ({ level = 2, children, ...props }) => {
  let Component;
  if (level === 1) {
    Component = H1;
  } else if (level === 2) {
    Component = H2;
  } else if (level === 3) {
    Component = H3;
  } else if (level === 4) {
    Component = H4;
  } else if (level === 5) {
    Component = H5;
  } else if (level === 6) {
    Component = H6;
  } else {
    throw new Error(`Incorrect level for Heading ${level}`);
  }

  const tag = `h${level}`;

  return (
    <Component as={tag} {...props}>
      {children}
    </Component>
  );
};

export default Heading;

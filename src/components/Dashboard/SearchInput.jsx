import React from 'react';
import Form from '../Form/Form';
import { styled } from 'styled-components';
import { Search } from 'react-feather';

const SearchInput = (props) => {
  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <Form.Input
        {...props}
        label={<Search size={16} className="search-label" />}
        className="search-input"
        placeholder="Search"
      />
    </Wrapper>
  );
};

const Wrapper = styled(Form)`
  margin: 24px 0;

  .search-input {
    position: relative;
  }

  .search-input input {
    padding-left: 48px;
  }

  .search-label {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    color: var(--color-gray-500);
  }
`;

export default SearchInput;

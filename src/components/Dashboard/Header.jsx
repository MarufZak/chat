import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button';
import { Download, Trash2, Upload } from 'react-feather';
import { DashboardContext } from './Dashboard';

const Header = () => {
  const {
    handleImport: handleImportChats,
    handleExport,
    handleClear,
  } = React.useContext(DashboardContext);

  const handleImport = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();
    fileReader.addEventListener('load', (e) => {
      const result = JSON.parse(e.target.result);
      handleImportChats(result);
    });
    fileReader.readAsText(file);
  };

  return (
    <Wrapper>
      <Button
        onClick={handleClear}
        iconRight={Trash2}
        colorScheme="purple"
        size="xs"
        variant="contained"
      >
        Clear
      </Button>
      <div className="buttons-group">
        <label>
          <Button iconRight={Download} colorScheme="purple" size="xs" variant="text">
            Import
          </Button>
          <input onChange={handleImport} type="file" accept=".json" hidden={true} />
        </label>
        <Button
          onClick={handleExport}
          iconRight={Upload}
          colorScheme="purple"
          size="xs"
          variant="contained"
        >
          Export
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  grid-area: header;
  background-color: var(--color-white);
  display: flex;
  justify-content: space-between;
  padding: 18px 36px;
  border-bottom: 1px solid var(--color-gray-200);

  .buttons-group {
    display: flex;
    gap: 16px;
  }
`;

export default Header;

import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button';
import { Download, Upload } from 'react-feather';
import { DashboardContext } from './Dashboard';

const Header = () => {
  const { chats } = React.useContext(DashboardContext);

  const handleImport = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();
    fileReader.addEventListener('load', (e) => {
      console.log(e.target.result);
    });
    fileReader.readAsText(file);
  };

  const handleExport = () => {
    const data = JSON.stringify(chats);
    const file = new File([data], { type: 'application/json' });
    const anchorElement = document.createElement('a');

    anchorElement.href = URL.createObjectURL(file);
    anchorElement.download = 'file.json';
    anchorElement.click();

    URL.revokeObjectURL(file);
    anchorElement.remove();
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.header`
  grid-area: header;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  padding: 18px 48px;
  border-bottom: 1px solid var(--color-gray-200);
`;

export default Header;

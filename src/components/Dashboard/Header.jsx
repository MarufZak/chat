import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button';
import { DashboardContext } from './Dashboard';
import { fadeOut } from './Dashboard.animations';
import withErrorBoundary from '../../hoc/withErrorBoundary';
import { getFileFromFilePicker, readFileAsText } from '@utils/fileHelpers';

const Header = () => {
  const {
    chats,
    handleImport: handleImportChats,
    handleExport,
    handleClear,
  } = React.useContext(DashboardContext);

  const handleImport = async () => {
    const file = await getFileFromFilePicker();
    const chats = await readFileAsText(file);

    handleImportChats(chats);
  };

  const isChatsEmpty = chats.active.length === 0 && chats.archived.length === 0;
  const isArchivedChatsEmpty = chats.archived.length === 0;

  return (
    <Wrapper>
      <Button
        onClick={handleClear}
        iconRight="trash"
        colorScheme="purple"
        size="xs"
        variant="contained"
        disabled={isArchivedChatsEmpty}
      >
        Clear
      </Button>
      <div className="buttons-group">
        <Button
          onClick={handleImport}
          iconRight="download"
          colorScheme="purple"
          size="xs"
          variant="text"
        >
          Import
        </Button>
        <Button
          onClick={handleExport}
          iconRight="upload"
          colorScheme="purple"
          size="xs"
          variant="contained"
          disabled={isChatsEmpty}
        >
          Export
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  animation: ${fadeOut} 0.3s;
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

export default withErrorBoundary(Header, {
  gridArea: 'header',
});

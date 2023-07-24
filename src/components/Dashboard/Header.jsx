import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button';
import { DashboardContext } from './Dashboard';
import { fadeOut } from './Dashboard.animations';
import withErrorBoundary from '@hoc/withErrorBoundary';
import { getFileFromFilePicker, readFileAsText } from '@utils/fileHelpers';
import useWindowSize from '@hooks/useWindowSize';
import useToggle from '@hooks/useToggle';
import Logo from '../Logo/Logo';
import Icon from '../Icon/Icon';

const Header = () => {
  const {
    chats,
    handleImport: handleImportChats,
    handleExport,
    handleClear,
  } = React.useContext(DashboardContext);
  const { width: windowWidth } = useWindowSize();
  const [isMenuOpen, toggleMenuOpen] = useToggle(false);

  const handleImport = async () => {
    const file = await getFileFromFilePicker();
    const chats = await readFileAsText(file);

    handleImportChats(chats);
  };

  const isChatsEmpty = chats.active.length === 0 && chats.archived.length === 0;
  const isArchivedChatsEmpty = chats.archived.length === 0;

  return (
    <Wrapper>
      {windowWidth <= 768 && (
        <MenuToggleHeader>
          <Logo />
          <button onClick={toggleMenuOpen} className="burger" type="button">
            <Icon>more-vertical</Icon>
          </button>
        </MenuToggleHeader>
      )}
      <div
        className="control-buttons"
        style={{ '--top': isMenuOpen ? '100%' : '-100%' }}
      >
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
  position: relative;

  .buttons-group {
    display: flex;
    gap: 16px;
  }

  .control-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    row-gap: 12px;

    .control-buttons {
      padding: 9px 36px 18px;
      position: absolute;
      top: var(--top);
      left: 0;
      background-color: var(--color-white);
      border-bottom: 1px solid var(--color-gray-200);
    }
  }
`;

const MenuToggleHeader = styled.div`
  flex: 1 0 100%;
  display: flex;
  justify-content: space-between;

  .burger {
    padding-left: 6px; // easier to click
    cursor: pointer;
    color: var(--color-gray-900);
  }
`;

export default withErrorBoundary(Header, {
  gridArea: 'header',
});

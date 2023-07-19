import { styled } from 'styled-components';

const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: var(--font-size);
  padding: var(--padding);
  border-radius: 8px;
  transition: background 0.4s, color 0.4s;
  font-weight: 500;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export default ButtonBase;

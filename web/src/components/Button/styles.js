import styled from 'styled-components';

export const CustomButton = styled.button`
  background-color: #5FE122;
  border: none;
  min-width: 10.5rem;
  max-width: max-content;
  padding: 0 2rem;
  height: 2rem;
`;

CustomButton.Secondary = styled(CustomButton)`
  background-color: #C4C4C4;
`;

import styled from 'styled-components';

const Input = styled.input`
  height: 2rem;
  border: 1px solid #000;
  padding: 0 0.5rem;
`;

Input.Secondary = styled.span.attrs((props) => ({
  role: 'textbox',
  contentEditable: props.viewMode ? false : true,
}))`
  border: 1px solid #ccc;
  background-color: #C4C4C4;
  font-family: inherit;
  font-size: inherit;
  padding: 0.2rem 1rem;
`;

export default Input;

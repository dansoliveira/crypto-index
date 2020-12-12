import styled from 'styled-components';

export const Input = styled.input`
  width: 10.5rem;
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

export const Label = styled.p`
  margin-bottom: 0.2rem;
`;

Label.Secondary = styled(Label)`
  text-align: center;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
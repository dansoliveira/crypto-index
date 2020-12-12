import { Input, Label, FieldWrapper } from './styles';

function Field({ label, labelProps, inputProps }) {
  return (
    <FieldWrapper>
      <Label {...labelProps}>
        {label}
      </Label>
      <Input {...inputProps} />
    </FieldWrapper>
  );
}

export default Field;

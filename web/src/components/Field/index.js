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

Field.Secondary = function({ label, value, labelProps, inputProps }) {
  return (
    <FieldWrapper
      style={{
        width: 'auto',
      }}
    >
      <Label.Secondary
        {...labelProps}
      >
        {label}
      </Label.Secondary>
      <Input.Secondary
        style={{
          width: '100%',
          maxWidth: 'max-content',
        }}
        suppressContentEditableWarning={true}
        {...inputProps}
      >
        {value}
      </Input.Secondary>
    </FieldWrapper>
  )
}
export default Field;

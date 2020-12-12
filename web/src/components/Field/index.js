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

Field.InlineView = function({ label, value, labelProps, inputProps }) {
  return (
    <FieldWrapper
      style={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: '0.5rem',
      }}
    >
      <Label
        style={{
          fontWeight: 'bold',
        }}
        {...labelProps}
      >
        {label}
      </Label>
      <span>
        {value}
      </span>
    </FieldWrapper>
  )
}

Field.Select = function({ label, value, labelProps, inputProps }) {
  return (
    <FieldWrapper>
      <Label
        {...labelProps}
      >
        {label}
      </Label>
      <Input
        as='select'
        {...inputProps}
      >
        {inputProps.options.map((opt, index) => (
          <option key={index} value={opt.value}>{opt.label}</option>
        ))}
      </Input>
    </FieldWrapper>
  )
}

export default Field;

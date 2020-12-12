import { CustomButton } from './styles';

function Button(props) {
  return (
    <CustomButton
      {...props}
    />
  );
}

Button.Secondary = (props) => {
  return (
    <CustomButton.Secondary
      {...props}
    />
  );
}

export default Button;

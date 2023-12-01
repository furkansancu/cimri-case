import { ButtonElement, PrimaryButton, SecondaryButton } from "./Button.styles"

interface ButtonProps {
    icon?: JSX.Element;
    children?: React.ReactNode;
    className?: string;
    style?: {};
    variant?: string;
    onClick?: any;
    disabled?: boolean;
}

function Button (props: ButtonProps) {
  let ButtonComponent = PrimaryButton;
  
  if (props.variant?.toLowerCase() == "secondary")
    ButtonComponent = SecondaryButton;

  return (
    <ButtonComponent
        className={props.className}
        style={props.style}
        onClick={props.onClick}
        disabled={props.disabled}
        >
          {
            props.icon !== undefined ?
              <ButtonElement>{props.icon}</ButtonElement>
            : null
          }
          {
            props.children !== undefined ?
              <ButtonElement>{props.children}</ButtonElement>
            : null
          }
    </ButtonComponent>
  )
}

Button.defaultProps = {
  variant: "primary",
  disabled: false,
  classNames: [],
  onClick: () => {},
}

export default Button;

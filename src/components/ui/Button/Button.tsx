import { ButtonElement, PrimaryButton, SecondaryButton } from "./Button.styles"

interface ButtonProps {
    icon?: JSX.Element;
    children?: React.ReactNode;
    classNames?: string[];
    style?: {};
    width?: number | string;
    height?: number | string;
    fontSize?: string | number;
    flexShrink?: string;
    variant?: string;
}

function Button (props: ButtonProps) {
  let ButtonComponent = PrimaryButton;
  
  if (props.variant?.toLowerCase() == "secondary")
    ButtonComponent = SecondaryButton;

  return (
    <ButtonComponent
        className={props.classNames !== undefined ? props.classNames.join(" ") : ""}
        style={{
            width: props.width,
            height: props.height,
            fontSize: props.fontSize,
            flexShrink: props.flexShrink
        }}
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
  width: "inherit",
  height: "inherit",
  fontSize: "inherit",
  flexShrink: "inherit",
  classNames: []
}

export default Button;
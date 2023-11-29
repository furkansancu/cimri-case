import { StyledButton } from "./Button.styles"

interface ButtonProps {
    className?: string;
    text?: string;
    icon?: JSX.Element;
    width?: number | string;
    height?: number | string;
}

function Button (props: ButtonProps) {
  return (
    <StyledButton
        className={props.className || ""}
        style={{
            width: props.width !== undefined ? props.width : "inherit",
            height: props.height !== undefined ? props.height : "inherit",
        }}
        >
        {props.text !== undefined ? props.text : null}
        {props.icon !== undefined ? props.icon : null}
    </StyledButton>
  )
}

export default Button;

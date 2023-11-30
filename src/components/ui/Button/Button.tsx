import { StyledButton } from "./Button.styles"

interface ButtonProps {
    text?: string;
    icon?: JSX.Element;
    width?: number | string;
    height?: number | string;
    hideMobile?: boolean;
    hideDesktop?: boolean;
}

function Button (props: ButtonProps) {
  let classNames: string[] = [];
  if (props.hideMobile) classNames.push("hideMobile")
  if (props.hideDesktop) classNames.push("hideDesktop")

  return (
    <StyledButton
        className={classNames.join(" ")}
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

interface LogoProps {
    to: string;
    className?: string;
}

import { LogoLink } from "./Logo.styles";

function Logo (props: LogoProps) {
  return (
    <LogoLink
        className={props.className || ""}
        href={props.to}
        >
        <strong>cimri</strong> study case
    </LogoLink>
  )
}

export default Logo;
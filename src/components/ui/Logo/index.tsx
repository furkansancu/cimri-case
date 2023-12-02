import { LogoLink } from "./Logo.styles";

interface LogoProps {
    to: string;
    className?: string;
}

function Logo (props: LogoProps) {
  return (
    <LogoLink
        className={props.className}
        href={props.to}
        >
        <strong>cimri</strong> study case
    </LogoLink>
  )
}

export default Logo;
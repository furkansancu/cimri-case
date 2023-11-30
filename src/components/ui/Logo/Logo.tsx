import { LogoLink } from "./Logo.styles";

interface LogoProps {
    to: string;
    classNames?: string[];
}

function Logo (props: LogoProps) {
  const classNames = props.classNames !== undefined ? props.classNames : [];

  return (
    <LogoLink
        className={classNames.join(" ")}
        href={props.to}
        >
        <strong>cimri</strong> study case
    </LogoLink>
  )
}

export default Logo;
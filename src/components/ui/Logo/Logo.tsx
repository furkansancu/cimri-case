interface LogoProps {
    to: string;
    hideMobile?: boolean;
    hideDesktop?: boolean;
}

import { LogoLink } from "./Logo.styles";

function Logo (props: LogoProps) {
  let classNames: string[] = [];
  if (props.hideMobile) classNames.push("hideMobile")
  if (props.hideDesktop) classNames.push("hideDesktop")

  return (
    <LogoLink
        className={classNames.join(" ")}
        href={props.to}
        >
        <strong>cimri</strong> study case
    </LogoLink>
  )
}

Logo.defaultProps = {
  hideMobile: false
}

export default Logo;
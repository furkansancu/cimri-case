import { IconCheck } from '@tabler/icons-react';

import { StyledCheckbox } from "./Checkbox.styles";

interface CheckboxProps {
    checked: boolean;
}

function Checkbox(props: CheckboxProps) {
    return (
        <StyledCheckbox
            className={props.checked ? "active" : ""}
            >
            {
                props.checked ?
                    <IconCheck color='#fff' />
                    : null
            }
        </StyledCheckbox>
    )
}

Checkbox.defaultProps = {
    checked: false
}

export default Checkbox;
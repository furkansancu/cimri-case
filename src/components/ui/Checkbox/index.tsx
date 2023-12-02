import { IconCheck } from '@tabler/icons-react';

import { StyledCheckbox } from "./Checkbox.styles";

interface CheckboxProps {
    checked: boolean;
}

function Checkbox(props: CheckboxProps) {
    const { checked, rest } = props;

    return (
        <StyledCheckbox
            $active={checked}
            {...rest}
        >
            {
                checked ?
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
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { setFilter, findFilter, getFilterProducts } from "@/redux/productsReducer";
import { GlobalStatesType } from "@/components/commonTypes";

import { textPurple } from "@/components/sharedStyles";
import Checkbox from "@/components/ui/Checkbox";

interface CheckboxProps {
  name: string;
  type: string;
}

const Label = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  font-size: 1em;
  font-weight: 500;
  color: ${textPurple};
`;

const StyledCheckBox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const FilterName = styled.span`
  width: -webkit-fill-available;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 10px;
`

const FilterCount = styled.small`
  text-align: right;
  width: 40px;
`

function FilterCheckbox(props: CheckboxProps) {
  const dispatch = useDispatch();
  const linkedProducts = useSelector((state: GlobalStatesType) => getFilterProducts(state, props.type, props.name));
  const filter = useSelector((state: GlobalStatesType) => findFilter(state, props.type, props.name));

  const changeHandler = (e: { target: { checked: boolean } }) => {
    dispatch(
      setFilter({
        type: props.type,
        name: props.name,
        value: e.target.checked,
      })
    );
  };

  return (
    <Label>
      <StyledCheckBox
        type="checkbox"
        name={`${props.type}${props.name}`}
        checked={Boolean(filter?.value)}
        onChange={changeHandler}
      />
      <Checkbox checked={Boolean(filter?.value)} />
      <FilterName>
        {props.name}
      </FilterName>
      <FilterCount>
        {linkedProducts.length > 0 ? `(${linkedProducts.length})` : null}
      </FilterCount>
    </Label>
  );
}

export default FilterCheckbox;
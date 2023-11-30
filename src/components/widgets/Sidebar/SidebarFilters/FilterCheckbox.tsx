import styled from "styled-components";

// import { useDispatch, useSelector } from "react-redux";
// import { setFilter, findFilter, getFilterProducts } from "@/app/reducers/productReducer";
// import { ReduxStateType } from "@/components/commonTypes";

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
`;

const StyledCheckBox = styled.input`
  width: 16px;
  height: 16px;
  padding: 0;
  margin: 0;
  margin-right: 10px;
`;

const FilterName = styled.span`
  width: -webkit-fill-available;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const FilterCount = styled.small`
  text-align: right;
  width: 40px;
`

function FilterCheckbox(props: CheckboxProps) {
//   const dispatch = useDispatch();
//   const linkedProducts = useSelector((state: ReduxStateType) => getFilterProducts(state, props.type, props.name));
//   const filter = useSelector((state: ReduxStateType) => findFilter(state, props.type, props.name));

  const changeHandler = (e: { target: { checked: boolean } }) => {
    // dispatch(
    //   setFilter({
    //     type: props.type,
    //     name: props.name,
    //     value: e.target.checked,
    //   })
    // );
  };

  return (
    <Label>
      <StyledCheckBox
        type="checkbox"
        name={`${props.type}${props.name}`}
        checked={false}
        onChange={changeHandler}
      />
      <FilterName>
        {props.name}
      </FilterName>
      <FilterCount>
        (0)
      </FilterCount>
    </Label>
  );
}

export default FilterCheckbox;
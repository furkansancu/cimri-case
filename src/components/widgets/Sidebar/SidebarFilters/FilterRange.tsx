import { useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { textGray, themeColor } from "@/components/sharedStyles";
import Button from "@/components/ui/Button/Button";
// import { setFilter } from "@/app/reducers/productReducer";

interface RangeFilterProps {
    name: string;
    values: string[];
}

const Input = styled.input`
  height: 36px;
  width: 100%;
  padding: 8px 12px;
  border: 2px solid ${textGray}80;
  border-radius: 3px;
  &:focus {
    border: 2px solid ${themeColor};
    outline: none;
  }
`;

function FilterRange(props: RangeFilterProps) {
    const [min, setMin] = useState<number | undefined>();
    const [max, setMax] = useState<number | undefined>();

    // const dispatch = useDispatch();

    const applyFilter = () => {
        // dispatch(
        //     setFilter({
        //         type: "range",
        //         name: props.name,
        //         value: [min, max],
        //     })
        // );
    };

    return (
        <>
            <Input
                type="number"
                name={`range_min_${props.name}`}
                value={min || ""}
                placeholder={props.values[0]}
                onChange={(e: { target: { value: string } }) => {
                    setMin(parseInt(e.target.value));
                }}
                min="0"
            />
            <Input
                type="number"
                name={`range_min_${props.name}`}
                value={max || ""}
                placeholder={props.values[1]}
                onChange={(e: { target: { value: string } }) => {
                    setMax(parseInt(e.target.value));
                }}
                min="0"
            />
            <Button
                onClick={applyFilter}
                style={{
                    height: "35px"
                }}
                >
                UYGULA
            </Button>
        </>
    )
}

export default FilterRange;
import Button from "../Button";
import { Nav } from "./Pagination.styles";

interface PaginationProps {
    page: number;
    maxPage: number;
    setPage: (value: number) => void;
}

interface PaginationButton {
    to: number;
    name: string;
}

function Pagination(props: PaginationProps) {
    let buttons: PaginationButton[] = [];
    const length = props.maxPage > 3 ? 3 : props.maxPage;

    // PREVIOUS PAGE BUTTON
    buttons.push({to: props.page - 1 > 0 ? props.page - 1 : 1, name: "ÖNCEKİ"});

    // EXACT PAGE BUTTONS
    if (length < 3) {
        Array(length).fill(null).map((v, k) => {
            buttons.push({to: k + 1, name: String(k + 1)});
        });
    } else {
        Array(3).fill(null).map((v, k) => {
            const page_number =
                props.page == props.maxPage ?
                    props.page + k - 2 : props.page == 1 ?
                        props.page + k : props.page + k - 1;
            buttons.push({to: page_number, name: String(page_number)});
        });
    }

    // NEXT PAGE BUTTON
    buttons.push({to: props.page + 1 <= props.maxPage ? props.page + 1 : props.maxPage, name: "SONRAKİ"});

    return (
        <Nav>
            {
                buttons.map((button: PaginationButton, key: number) => 
                    <Button
                        key={key}
                        variant="secondary"
                        disabled={button.to == props.page}
                        onClick={() => { props.setPage(button.to) }}
                        style={{
                            height: "35px",
                            padding: "6px 12px",
                            fontSize: "0.75em"
                        }}
                    >
                        {button.name}
                    </Button>
                )
            }
        </Nav>
    )
}

export default Pagination
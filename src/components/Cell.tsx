

import {
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import Typography from "@mui/material/Typography";
import styles from "../styles/Cell.module.css";

interface CellProps {
    cellNumber: number;
    index: number;
    setCellNumber: Dispatch<SetStateAction<number>>;
    rowIndex: number;
    letter: string;
    rowNumber: number;
}

const Cell = ({ index, cellNumber, rowIndex, letter, setCellNumber, rowNumber }: CellProps) => {

    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {  
        // the cell we are operating on is before the cell we are in
        // or the row is before the one we are operating on
        if (index > cellNumber || rowIndex > rowNumber) {
            // leave it blank
            setShow(false);
            return;
        } else {
            // this is the first time we show
            // so now we are operating on the next cell
            if (!show){
                let cell: number = cellNumber;
                setCellNumber(cell + 1);
                setShow(true);
            }
        }

    }, [cellNumber])

    return (
        <div style={{ width: "60px", height: "60px", backgroundColor: "green", margin: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ marginBottom: "1px" }}>
                {(show) ?
                    <Typography color="white" variant="body1">{letter}</Typography>
                    : <></>
                }
            </div>
        </div>
    )
}

export default Cell;
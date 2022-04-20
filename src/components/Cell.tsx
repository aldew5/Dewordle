

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
    setRowNumber: Dispatch<SetStateAction<number>>;
}

const Cell = ({ index, cellNumber, rowIndex, letter, setCellNumber, setRowNumber, rowNumber }: CellProps) => {

    const [show, setShow] = useState<boolean>(true);

    console.log("LETTER", letter);
    useEffect(() => {

        // the cell we are operating on is before the cell we are in
        // or the row is before the one we are operating on
        console.log("HERE", rowIndex, rowNumber);
        if (rowIndex !== rowNumber) {
            // leave it blank
            setShow(false);
            console.log("SETTING FALSE");
        } else {
            setShow(true);
        }

    }, [rowNumber, rowIndex])

    return (
        <div style={{ width: "60px", height: "60px", borderStyle: "solid", margin: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ marginBottom: "1px" }}>
                {(show) ?
                    <div>
                        <Typography color="black" variant="body1">{letter}</Typography>
                    </div> : <></>
                }
            </div>
        </div>
    )
}

export default Cell;


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
    fill: number;
    index: number;
    setCellNumber: Dispatch<SetStateAction<number>>;
    input: string;
    rowIndex: number;
    letter: string;
}

const Cell = ({ input, index, cellNumber, fill, rowIndex, letter, setCellNumber }: CellProps) => {

    const [print, setPrint] = useState<boolean>(true);

    useEffect(() => {
        //console.log("Index is ", index, fill, input);
        console.log("CELL NYUMBER", cellNumber, index);
        if (index < cellNumber || rowIndex !== 0) {
            setPrint(false);
            return;
        }

        setPrint(true);
        if (input === "back") {
            console.log("back");
            let num: number = cellNumber;
            setCellNumber(num - 1);

        } else {
            let num: number = cellNumber;
            setCellNumber(num + 1);
        }


    }, [input, fill])

    return (
        <div style={{ width: "60px", height: "60px", backgroundColor: "green", margin: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ marginBottom: "1px" }}>
                {(print) ?
                    <Typography color="white" variant="body1">{letter}</Typography>
                    : <></>
                }
            </div>
        </div>
    )
}

export default Cell;
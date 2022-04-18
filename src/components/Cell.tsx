

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

    const [filled, setFilled] = useState<boolean>(false);

    useEffect(() => {
        //console.log("Index is ", index, fill, input);
        if (index !== cellNumber) {
            return;
        }
        // position in row is the cell number we're on
        console.log("IMPORTANT", index, cellNumber);
        if (index === cellNumber) {
            console.log("IN", input);
            if (input === "back" && letter !== "") {
                console.log("back");
                
                let num: number = cellNumber;
                setCellNumber(num - 1);

            } else {
                let num: number = cellNumber;
                setCellNumber(num + 1);
            }
        }
    }, [cellNumber, input, fill])

    return (
        <div style={{ width: "60px", height: "60px", backgroundColor: "green", margin: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ marginBottom: "1px" }}>
                {(letter !== "") ?
                    <Typography color="white" variant="body1">{letter}</Typography>
                    : <></>
                }
            </div>
        </div>
    )
}

export default Cell;
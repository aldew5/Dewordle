
   
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
}

const Cell = ({input, index, cellNumber, fill, rowIndex, setCellNumber}: CellProps) => {

    const [letter, setLetter] = useState<string>("");
    const [filled, setFilled] = useState<boolean>(false);

    useEffect(() => {
        if (fill !== index){
            return;
        }
        // position in row is the cell number we're on
        if (index === cellNumber){
            if (input === "back" && letter !== "") {
                setLetter("");
                let num: number = cellNumber;
                setCellNumber(num -1);

            } else {
                setLetter(input);
                let num: number = cellNumber;
                setCellNumber(num + 1);
            }
        }
    }, [cellNumber, input, fill])

    return (
        <div style={{width: "60px", height: "60px", backgroundColor:"green", margin:"5px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{marginBottom: "1px"}}>
                <Typography color="white" variant="body1">{letter.toUpperCase()}</Typography>
            </div>
        </div>
    )
}

export default Cell;
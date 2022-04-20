import {
    useEffect,
    useState,
} from "react";
import Typography from "@mui/material/Typography";
import styles from "../styles/Cell.module.css";

interface CompelteCellProps {
    value: string;
    required: string;
    word: string;
}


const CompleteCell = ({ value, required, word }: CompelteCellProps) => {

    const [color, setColor] = useState<string>("grey");

    useEffect (() => {

        if (value === required){
            setColor("green");
        } else {
            for (let i = 0; i < word.length; i++){
                if (word[i] === value){
                    setColor("orange");
                    break;
                }
            }
        }
    }, [color])
    
    return (
        <div style={{ width: "60px", height: "60px", backgroundColor: `${color}`, borderStyle: "solid", margin: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ marginBottom: "1px" }}>
                <Typography color="white" variant="body1">{value}</Typography>
            </div>
        </div>
    )
}

export default CompleteCell;
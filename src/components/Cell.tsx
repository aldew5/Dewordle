import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import styles from "../styles/Cell.module.css";

interface CellProps {
    rowIndex: number;
    letter: string;
    rowNumber: number;
}

const Cell = ({ rowIndex, letter, rowNumber }: CellProps) => {

    const [show, setShow] = useState<boolean>(true);

    useEffect(() => {
        // the cell we are operating on is before the cell we are in
        // or the row is before the one we are operating on
        if (rowIndex !== rowNumber) {
            // leave it blank
            setShow(false);
        } else {
            setShow(true);
        }

    }, [rowNumber, rowIndex])

    return (
        <div className={styles.main}>
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
import Cell from "./Cell";
import { useState, useEffect } from "react";

interface RowProps {
    rowNumber: number;
    index: number;
    input: string;
    fill: number;
    word: string;
}

const Row = ({ rowNumber, index, input, fill, word }: RowProps) => {

    const [number, setNumber] = useState<number>(0);
    const [cellNumber, setCellNumber] = useState<number>(-1);
    const [active, setActive] = useState<boolean>(false);
    //const [cellNumber, setCellNumber] = useState<number>(0);
    console.log("ROW", rowNumber);

    useEffect(() => {
        // index of the row is the row we are on
        if (index === rowNumber && !active) {
            setActive(true);
            setCellNumber(0);
        }
    })

    return (
        <div style={{ margin: "auto", width: "300px", display: "table" }}>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    index={0}
                    cellNumber={cellNumber}
                    setCellNumber={setCellNumber}
                    input={input}
                    fill={fill}
                    rowIndex={index}
                    letter={(word.length > 0) ? word[0] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    index={1}
                    cellNumber={cellNumber}
                    setCellNumber={setCellNumber}
                    input={input}
                    fill={fill}
                    rowIndex={index}
                    letter={(word.length > 1) ? word[1] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    index={2}
                    cellNumber={cellNumber}
                    setCellNumber={setCellNumber}
                    input={input}
                    fill={fill}
                    rowIndex={index}
                    letter={(word.length > 2) ? word[2] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    index={3}
                    cellNumber={cellNumber}
                    setCellNumber={setCellNumber}
                    input={input}
                    fill={fill}
                    rowIndex={index}
                    letter={(word.length > 3) ? word[3] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    index={4}
                    cellNumber={cellNumber}
                    setCellNumber={setCellNumber}
                    input={input}
                    fill={fill}
                    rowIndex={index}
                    letter={(word.length > 4) ? word[4] : ""}
                />
            </div>
            
        </div>
    )
}

export default Row;
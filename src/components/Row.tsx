import Cell from "./Cell";
import { useState, useEffect } from "react";

interface RowProps {
    rowNumber: number;
    index: number;
    input: string;
    numFilled: number;
}

const Row = ({ rowNumber, index, input, numFilled }: RowProps) => {

    const [number, setNumber] = useState<number>(0);
    const [cellNumber, setCellNumber] = useState<number>(-1);
    const [active, setActive] = useState<boolean>(false);
    //const [cellNumber, setCellNumber] = useState<number>(0);

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
                    numFilled={numFilled}
                    rowIndex={index}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    index={0}
                    cellNumber={cellNumber}
                    setCellNumber={setCellNumber}
                    input={input}
                    numFilled={numFilled}
                    rowIndex={index}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    index={2}
                    cellNumber={cellNumber}
                    setCellNumber={setCellNumber}
                    input={input}
                    numFilled={numFilled}
                    rowIndex={index}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    index={3}
                    cellNumber={cellNumber}
                    setCellNumber={setCellNumber}
                    input={input}
                    numFilled={numFilled}
                    rowIndex={index}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    index={4}
                    cellNumber={cellNumber}
                    setCellNumber={setCellNumber}
                    input={input}
                    numFilled={numFilled}
                    rowIndex={index}
                />
            </div>
            
        </div>
    )
}

export default Row;
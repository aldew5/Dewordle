import Cell from "./Cell";
import {
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react";

interface RowProps {
    rowNumber: number;
    index: number;
    word: string;
    setRowNumber: Dispatch<SetStateAction<number>>;
    cellNumber: number;
    setCellNumber: Dispatch<SetStateAction<number>>;
}

const Row = ({ setRowNumber, setCellNumber, cellNumber, rowNumber, index, word }: RowProps) => {

    return (
        <div style={{ margin: "auto", width: "300px", display: "table" }}>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    index={0}
                    cellNumber={cellNumber}
                    setCellNumber={setCellNumber}
                    rowIndex={index}
                    rowNumber={rowNumber}
                    setRowNumber={setRowNumber}
                    letter={(word.length > 0) ? word[0] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    index={1}
                    cellNumber={cellNumber}
                    setCellNumber={setCellNumber}
                    rowIndex={index}
                    rowNumber={rowNumber}
                    setRowNumber={setRowNumber}
                    letter={(word.length > 1) ? word[1] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    index={2}
                    cellNumber={cellNumber}
                    setCellNumber={setCellNumber}
                    rowIndex={index}
                    rowNumber={rowNumber}
                    setRowNumber={setRowNumber}
                    letter={(word.length > 2) ? word[2] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    index={3}
                    cellNumber={cellNumber}
                    setCellNumber={setCellNumber}
                    rowIndex={index}
                    rowNumber={rowNumber}
                    setRowNumber={setRowNumber}
                    letter={(word.length > 3) ? word[3] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    index={4}
                    cellNumber={cellNumber}
                    setCellNumber={setCellNumber}
                    rowIndex={index}
                    rowNumber={rowNumber}
                    setRowNumber={setRowNumber}
                    letter={(word.length > 4) ? word[4] : ""}
                />
            </div>
            
        </div>
    )
}

export default Row;
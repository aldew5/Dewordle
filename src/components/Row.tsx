import Cell from "./Cell";

interface RowProps {
    rowNumber: number;
    index: number;
    word: string;
}

const Row = ({ rowNumber, index, word }: RowProps) => {

    return (
        <div style={{ margin: "auto", width: "300px", display: "table" }}>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    rowIndex={index}
                    rowNumber={rowNumber}
                    letter={(word.length > 0) ? word[0] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    rowIndex={index}
                    rowNumber={rowNumber}
                    letter={(word.length > 1) ? word[1] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    rowIndex={index}
                    rowNumber={rowNumber}
                    letter={(word.length > 2) ? word[2] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    rowIndex={index}
                    rowNumber={rowNumber}
                    letter={(word.length > 3) ? word[3] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    rowIndex={index}
                    rowNumber={rowNumber}
                    letter={(word.length > 4) ? word[4] : ""}
                />
            </div>

        </div>
    )
}

export default Row;
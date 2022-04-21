import Cell from "./Cell";

interface RowProps {
    rowNumber: number;
    index: number;
    guess: string;
}

const Row = ({ rowNumber, index, guess }: RowProps) => {

    return (
        <div style={{ margin: "auto", width: "300px", display: "table" }}>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    rowIndex={index}
                    rowNumber={rowNumber}
                    letter={(guess.length > 0) ? guess[0] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    rowIndex={index}
                    rowNumber={rowNumber}
                    letter={(guess.length > 1) ? guess[1] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    rowIndex={index}
                    rowNumber={rowNumber}
                    letter={(guess.length > 2) ? guess[2] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    rowIndex={index}
                    rowNumber={rowNumber}
                    letter={(guess.length > 3) ? guess[3] : ""}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <Cell
                    rowIndex={index}
                    rowNumber={rowNumber}
                    letter={(guess.length > 4) ? guess[4] : ""}
                />
            </div>

        </div>
    )
}

export default Row;
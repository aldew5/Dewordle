import CompleteCell from "./CompleteCell";

interface CompleteRowProps {
    entered: string;
    word: string;
}

const CompleteRow = ({entered, word}: CompleteRowProps) => {
    return (
        <div style={{ margin: "auto", width: "300px", display: "table" }}>
            <div style={{ width: "50px", display: "table-cell" }}>
                <CompleteCell 
                    value={entered[0]}
                    required={word[0]}
                    word={word}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <CompleteCell 
                    value={entered[1]}
                    required={word[1]}
                    word={word}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <CompleteCell 
                    value={entered[2]}
                    required={word[2]}
                    word={word}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <CompleteCell 
                    value={entered[3]}
                    required={word[3]}
                    word={word}
                />
            </div>
            <div style={{ width: "50px", display: "table-cell" }}>
                <CompleteCell 
                    value={entered[4]}
                    required={word[4]}
                    word={word}
                />
            </div>
        </div>
    )

}

export default CompleteRow;
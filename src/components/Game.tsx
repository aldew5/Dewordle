import Row from "./Row";
import CompleteRow from "./CompleteRow";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

const Game = () => {
    // row we are currently operating on 
    const [rowNumber, setRowNumber] = useState<number>(0);
    // the current word
    const [word, setWord] = useState<string>("");
    const [save, setSave] = useState<string>("");
    const [cellNumber, setCellNumber] = useState<number>(0);

    let alph = "abcdefghijklmnopqrstuvwxyz";
    // handle any key press
    function handleKeyDown(event: any) {
        for (let i = 0; i < alph.length; i++) {
            if (event.key === alph[i] && word.length < 5) {
                let cur: string = word;
                //console.log(event.key);
                setWord(cur + event.key.toUpperCase());
                break;
            }
        }

        if (event.key === "Backspace") {
            let cur: string = "";
            for (let i = 0; i < word.length - 1; i++) {
                cur += word[i];
            }
            setWord(cur);
        } else if (event.key === "Enter" && word.length === 5) {
            let num: number = rowNumber;
            setRowNumber(num + 1);
            setCellNumber(0);
            setSave(word);
            setWord("");
        }
    }

    // add the event listener (for key presses)
    useEffect(() => {
        window.addEventListener('keyup', handleKeyDown);
        return () => {
            window.removeEventListener('keyup', handleKeyDown);
        };

    });

    return (
        <div>
            <Typography variant="h4">Alec's Wordle</Typography>
            <hr />
            <div style={{ marginTop: "5rem" }}>
                {(rowNumber > 0) ?
                    <CompleteRow
                        entered={save}
                        word={"SAMER"}
                    /> :
                    <Row
                        rowNumber={rowNumber}
                        index={0}
                        word={word}
                        setRowNumber={setRowNumber}
                        cellNumber={cellNumber}
                        setCellNumber={setCellNumber}
                    />
                }
            </div>
            <Row
                rowNumber={rowNumber}
                index={1}
                word={word}
                setRowNumber={setRowNumber}
                cellNumber={cellNumber}
                setCellNumber={setCellNumber}
            />
            <Row
                rowNumber={rowNumber}
                index={2}
                word={word}
                setRowNumber={setRowNumber}
                cellNumber={cellNumber}
                setCellNumber={setCellNumber}
            />
            <Row
                rowNumber={rowNumber}
                index={3}
                word={word}
                setRowNumber={setRowNumber}
                cellNumber={cellNumber}
                setCellNumber={setCellNumber}
            />
            <Row
                rowNumber={rowNumber}
                index={4}
                word={word}
                setRowNumber={setRowNumber}
                cellNumber={cellNumber}
                setCellNumber={setCellNumber}
            />
        </div>
    )
}

export default Game;
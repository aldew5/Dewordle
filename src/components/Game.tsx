import Row from "./Row";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

const Game = () => {
    // row we are currently operating on 
    const [rowNumber, setRowNumber] = useState<number>(0);
    // the current word
    const [word, setWord] = useState<string>("");

    let alph = "abcdefghijklmnopqrstuvwxyz";
    // handle any key press
    function handleKeyDown(event: any) {
        for (let i = 0; i < alph.length; i++) {
            if (event.key === alph[i]) {
                let cur: string = word;
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
                <Row
                    rowNumber={rowNumber}
                    index={0}
                    word={word}
                />
            </div>
            <Row
                rowNumber={rowNumber}
                index={1}
                word={word}
            />
            <Row
                rowNumber={rowNumber}
                index={2}
                word={word}
            />
            <Row
                rowNumber={rowNumber}
                index={3}
                word={word}
            />
            <Row
                rowNumber={rowNumber}
                index={4}
                word={word}
            />
        </div>
    )
}

export default Game;
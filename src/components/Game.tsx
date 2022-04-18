import Row from "./Row";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

const Game = () => {

    const [rowNumber, setRowNumber] = useState<number>(0);
    const [cellNumber, setCellNumber] = useState<number>(0);
    const [fill, setFill] = useState<number>(-1);
    const [input, setInput] = useState<string>("");
    const [word, setWord] = useState<string>("");

    let alph = "abcdefghijklmnopqrstuvwxyz";
    // handle any key press
    function handleKeyDown(event: any) {
        for (let i = 0; i < alph.length; i++) {
            if (event.key === alph[i]) {
                setInput(event.key);
                let cur: string = word;
                setWord(cur + event.key.toUpperCase());
                let filled: number = fill;
                setFill(filled+ 1);
                break;
            }
        }

        if (event.key === "Backspace") {
            setInput("back");
            let cur: string = "";
            for (let i = 0; i < word.length-1; i++){
                cur += word[i];
            }
            let filled: number = fill;
            setWord(cur);
            setFill(filled - 1);
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
                    input={input}
                    fill={fill}
                    word={word}
                />
            </div>
            <Row
                rowNumber={rowNumber}
                index={1}
                input={input}
                fill={fill}
                word={word}
            />
            <Row
                rowNumber={rowNumber}
                index={2}
                input={input}
                fill={fill}
                word={word}
            />
            <Row
                rowNumber={rowNumber}
                index={3}
                input={input}
                fill={fill}
                word={word}
            />
            <Row
                rowNumber={rowNumber}
                index={4}
                input={input}
                fill={fill}
                word={word}
            />
        </div>
    )
}

export default Game;
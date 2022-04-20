import Row from "./Row";
import CompleteRow from "./CompleteRow";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

const Game = () => {
    // row we are currently operating on 
    const [rowNumber, setRowNumber] = useState<number>(0);
    // the current word
    const [word, setWord] = useState<string>("");

    // save each row of guesses
    const [saveOne, setSaveOne] = useState<string>("");
    const [saveTwo, setSaveTwo] = useState<string>("");
    const [saveThree, setSaveThree] = useState<string>("");
    const [saveFour, setSaveFour] = useState<string>("");
    const [saveFive, setSaveFive] = useState<string>("");

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

            if (rowNumber === 0) {
                setSaveOne(word);
            } else if (rowNumber === 1) {
                setSaveTwo(word);
            } else if (rowNumber === 2) {
                setSaveThree(word);
            } else if (rowNumber === 3) {
                setSaveFour(word);
            } else if (rowNumber === 4) {
                setSaveFive(word);
            }
            setRowNumber(num + 1);
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
                        entered={saveOne}
                        word={"SAMER"}
                    /> :
                    <Row
                        rowNumber={rowNumber}
                        index={0}
                        word={word}
                    />
                }
            </div>
            <div>
                {(rowNumber > 1) ?
                    <CompleteRow
                        entered={saveTwo}
                        word={"SAMER"}
                    /> :
                    <Row
                        rowNumber={rowNumber}
                        index={1}
                        word={word}
                    />
                }
            </div>
            <div>
                {(rowNumber > 2) ?
                    <CompleteRow
                        entered={saveThree}
                        word={"SAMER"}
                    /> :
                    <Row
                        rowNumber={rowNumber}
                        index={2}
                        word={word}
                    />
                }
            </div>
            <div>
                {(rowNumber > 3) ?
                    <CompleteRow
                        entered={saveFour}
                        word={"SAMER"}
                    /> :
                    <Row
                        rowNumber={rowNumber}
                        index={3}
                        word={word}
                    />
                }
            </div>
            <div>
                {(rowNumber > 4) ?
                    <CompleteRow
                        entered={saveFive}
                        word={"SAMER"}
                    /> :
                    <Row
                        rowNumber={rowNumber}
                        index={4}
                        word={word}
                    />
                }
            </div>
        </div>
    )
}

export default Game;
import Row from "./Row";
import CompleteRow from "./CompleteRow";
import Typography from "@mui/material/Typography";
import Solved from "./Solved";
import { useState, useEffect } from "react";

const Game = () => {
    // row we are currently operating on 
    const [rowNumber, setRowNumber] = useState<number>(0);
    // the current word
    const [guess, setGuess] = useState<string>("");
    const [solved, setSolved] = useState<boolean>(false);
    const [showComplete, setShowComplete] = useState<boolean>(true);

    // save each row of guesses
    const [saveOne, setSaveOne] = useState<string>("");
    const [saveTwo, setSaveTwo] = useState<string>("");
    const [saveThree, setSaveThree] = useState<string>("");
    const [saveFour, setSaveFour] = useState<string>("");
    const [saveFive, setSaveFive] = useState<string>("");

    let words: string[] = ["SAMER"];

    let alph = "abcdefghijklmnopqrstuvwxyz";
    // handle any key press
    function handleKeyDown(event: any) {
        for (let i = 0; i < alph.length; i++) {
            if (event.key === alph[i] && guess.length < 5) {
                let cur: string = guess;
                //console.log(event.key);
                setGuess(cur + event.key.toUpperCase());
                break;
            }
        }

        if (event.key === "Backspace") {
            let cur: string = "";
            for (let i = 0; i < guess.length - 1; i++) {
                cur += guess[i];
            }
            setGuess(cur);
        } else if (event.key === "Enter" && guess.length === 5) {
            let num: number = rowNumber;

            if (guess === "SAMER") {
                setSolved(true);
            }

            if (rowNumber === 0) {
                setSaveOne(guess);
            } else if (rowNumber === 1) {
                setSaveTwo(guess);
            } else if (rowNumber === 2) {
                setSaveThree(guess);
            } else if (rowNumber === 3) {
                setSaveFour(guess);
            } else if (rowNumber === 4) {
                setSaveFive(guess);
            }
            setRowNumber(num + 1);
            setGuess("");
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
            <Typography variant="h4"><b>Alec's Wordle</b></Typography>
            <hr />
            <div style={{ marginTop: "5rem" }}>
                <div>
                    {(rowNumber > 0) ?
                        <CompleteRow
                            entered={saveOne}
                            word={"SAMER"}
                        /> :
                        <Row
                            rowNumber={rowNumber}
                            index={0}
                            word={guess}
                        />
                    }
                    <div>
                        {(rowNumber > 1) ?
                            <CompleteRow
                                entered={saveTwo}
                                word={"SAMER"}
                            /> :
                            <Row
                                rowNumber={rowNumber}
                                index={1}
                                word={guess}
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
                                word={guess}
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
                                word={guess}
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
                                word={guess}
                            />
                        }
                    </div>
                </div>
                {(solved && showComplete) ?
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "-15rem", marginLeft: "36rem", position: "absolute" }}>
                        <Solved setShowComplete={setShowComplete}/>
                    </div>
                    :
                    <div></div>
                }

            </div>
        </div>
    )
}

export default Game;
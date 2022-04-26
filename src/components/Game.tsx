import Row from "./Row";
import CompleteRow from "./CompleteRow";
import Typography from "@mui/material/Typography";
import Solved from "./Solved";
import Keyboard from "./Keyboard";
import { useState, useEffect } from "react";

const Game = () => {
    // row we are currently operating on 
    const [rowNumber, setRowNumber] = useState<number>(0);
    // the current word
    const [guess, setGuess] = useState<string>("");
    const [word, setWord] = useState<string>("");
    const [solved, setSolved] = useState<boolean>(false);
    const [showComplete, setShowComplete] = useState<boolean>(true);

    // save each row of guesses
    const [saveOne, setSaveOne] = useState<string>("");
    const [saveTwo, setSaveTwo] = useState<string>("");
    const [saveThree, setSaveThree] = useState<string>("");
    const [saveFour, setSaveFour] = useState<string>("");
    const [saveFive, setSaveFive] = useState<string>("");
    const [saveSix, setSaveSix] = useState<string>("");

    let words: string[] = ["SAMER"];

    let alph: string = "abcdefghijklmnopqrstuvwxyz";
    // handle any key press
    function handleKeyDown(event: any) {
        for (let i = 0; i < alph.length; i++) {
            if (event.key === alph[i] && guess.length < 5) {
                let cur: string = guess;
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

            if (guess === word) {
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
            } else if (rowNumber === 5) {
                setSaveSix(guess);
            }
            setRowNumber(num + 1);
            setGuess("");
        }
    }

    useEffect(() => {
        setWord(words[Math.floor(Math.random()*words.length)])
    }, [])

    // add the event listener (for key presses)
    useEffect(() => {
        window.addEventListener('keyup', handleKeyDown);
        return () => {
            window.removeEventListener('keyup', handleKeyDown);
        };
    });

    return (
        <div>
            <Typography variant="h4"><b>Ashbury Wordle</b></Typography>
            <hr />
            <div style={{ marginTop: "3rem"}}>
                <div>
                    {(rowNumber > 0) ?
                        <CompleteRow
                            entered={saveOne}
                            word={word}
                        /> :
                        <Row
                            rowNumber={rowNumber}
                            index={0}
                            guess={guess}
                        />
                    }
                    <div>
                        {(rowNumber > 1) ?
                            <CompleteRow
                                entered={saveTwo}
                                word={word}
                            /> :
                            <Row
                                rowNumber={rowNumber}
                                index={1}
                                guess={guess}
                            />
                        }
                    </div>
                    <div>
                        {(rowNumber > 2) ?
                            <CompleteRow
                                entered={saveThree}
                                word={word}
                            /> :
                            <Row
                                rowNumber={rowNumber}
                                index={2}
                                guess={guess}
                            />
                        }
                    </div>
                    <div>
                        {(rowNumber > 3) ?
                            <CompleteRow
                                entered={saveFour}
                                word={word}
                            /> :
                            <Row
                                rowNumber={rowNumber}
                                index={3}
                                guess={guess}
                            />
                        }
                    </div>
                    <div>
                        {(rowNumber > 4) ?
                            <CompleteRow
                                entered={saveFive}
                                word={word}
                            /> :
                            <Row
                                rowNumber={rowNumber}
                                index={4}
                                guess={guess}
                            />
                        }
                    </div>
                    <div>
                        {(rowNumber > 5) ?
                            <CompleteRow
                                entered={saveSix}
                                word={word}
                            /> :
                            <Row
                                rowNumber={rowNumber}
                                index={5}
                                guess={guess}
                            />
                        }
                    </div>
                </div>
                <div style={{marginTop: "4rem"}}>
                    <Keyboard setGuess={setGuess} guess={guess}/>
                </div>
                {(solved && showComplete) ?
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "-15rem", marginLeft: "36rem", position: "absolute" }}>
                        <Solved setShowComplete={setShowComplete} />
                    </div>
                    :
                    <div></div>
                }

            </div>
        </div>
    )
}

export default Game;
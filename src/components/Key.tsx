import {
    Dispatch,
    SetStateAction,
} from "react";
import styles from "../styles/Key.module.css";

interface KeyProps {
    value: string;
    guess: string;
    rowNumber: number;
    word: string;
    setGuess: Dispatch<SetStateAction<string>>;
    setSaveOne: Dispatch<SetStateAction<string>>;
    setSaveTwo: Dispatch<SetStateAction<string>>;
    setSaveThree: Dispatch<SetStateAction<string>>;
    setSaveFour: Dispatch<SetStateAction<string>>;
    setSaveFive: Dispatch<SetStateAction<string>>;
    setSaveSix: Dispatch<SetStateAction<string>>;
    setRowNumber: Dispatch<SetStateAction<number>>;
    setSolved: Dispatch<SetStateAction<boolean>>;
}

const Key = ({ word, value, guess, rowNumber, setGuess, setSaveOne,
    setSaveTwo, setSaveThree, setSaveFour, setSaveFive, setSaveSix, setSolved, setRowNumber }: KeyProps) => {

    const handleClick = () => {
        let val: string = "";
        if (value === "Delete") {
            for (let i = 0; i < guess.length - 1; i++) {
                val += guess[i];
            }
            setGuess(val);
        } else if (value === "Enter") {
            if (guess.length === 5) {
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
        else {
            val = guess + value;
            setGuess(val);
        }
    }

    return (
        <div className={(value !== "Enter" && value !== "Delete") ? styles.key : styles.command}
            onClick={handleClick}>
            {value}
        </div>
    )

}

export default Key;
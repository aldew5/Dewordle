import {
    Dispatch,
    SetStateAction,
} from "react";
import styles from "../styles/Key.module.css";

interface KeyProps {
    value: string;
    guess: string;
    setGuess: Dispatch<SetStateAction<string>>;
}

const Key = ({ value, guess, setGuess }: KeyProps) => {

    const handleClick = () => {
        let val: string = "";
        if (value === "Delete") {
            for (let i = 0; i < guess.length - 1; i++) {
                val += guess[i];
            }
            setGuess(val);
        } else {
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
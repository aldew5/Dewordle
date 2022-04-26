import Key from "./Key";
import {
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react";

interface Key {
    value: string;
}

interface KeyboardProps {
    setGuess: Dispatch<SetStateAction<string>>;
    setSaveOne: Dispatch<SetStateAction<string>>;
    setSaveTwo: Dispatch<SetStateAction<string>>;
    setSaveThree: Dispatch<SetStateAction<string>>;
    setSaveFour: Dispatch<SetStateAction<string>>;
    setSaveFive: Dispatch<SetStateAction<string>>;
    setSaveSix: Dispatch<SetStateAction<string>>;
    setRowNumber: Dispatch<SetStateAction<number>>;
    setSolved: Dispatch<SetStateAction<boolean>>;
    rowNumber: number;
    guess: string;
    word: string;
}

const Keyboard = ({ word, rowNumber, setGuess, setSaveOne, setSaveTwo, setSaveThree, setSaveFour, setSaveFive, setSaveSix, setRowNumber, setSolved, guess }: KeyboardProps) => {
    const [firstKeys, setFirstKeys] = useState<Key[]>([]);
    const [secondKeys, setSecondKeys] = useState<Key[]>([]);
    const [thirdKeys, setThirdKeys] = useState<Key[]>([]);

    let alph: string = "QWERTYUIOPASDFGHJKLZXCVBNM";

    useEffect(() => {
        let key_list: Key[] = [];
        for (let i = 0; i < 10; i++) {
            key_list.push({ value: alph[i] });
        }
        setFirstKeys(key_list);

        key_list = [];
        for (let i = 10; i < 19; i++) {
            key_list.push({ value: alph[i] })
        }
        setSecondKeys(key_list);

        key_list = [{ value: "Enter" }];
        for (let i = 19; i < 26; i++) {
            key_list.push({ value: alph[i] })
        }
        key_list.push({ value: "Delete" });
        setThirdKeys(key_list);

    }, [])

    return (
        <div>
            <div style={{ margin: "auto", width: "300px", display: "table" }}>
                {firstKeys.map((key) => (
                    <div style={{ width: "50px", display: "table-cell" }}>
                        <Key
                            value={key.value}
                            setGuess={setGuess}
                            guess={guess}
                            setSaveOne={setSaveOne}
                            setSaveTwo={setSaveTwo}
                            setSaveThree={setSaveThree}
                            setSaveFour={setSaveFour}
                            setSaveFive={setSaveFive}
                            setSaveSix={setSaveSix}
                            setRowNumber={setRowNumber}
                            setSolved={setSolved}
                            rowNumber={rowNumber}
                            word={word}
                        />
                    </div>

                ))}
            </div>
            <div style={{ margin: "auto", width: "300px", display: "table" }}>
                {secondKeys.map((key) => (
                    <div style={{ width: "50px", display: "table-cell" }}>
                        <Key
                            value={key.value}
                            setGuess={setGuess}
                            guess={guess}
                            setSaveOne={setSaveOne}
                            setSaveTwo={setSaveTwo}
                            setSaveThree={setSaveThree}
                            setSaveFour={setSaveFour}
                            setSaveFive={setSaveFive}
                            setSaveSix={setSaveSix}
                            setRowNumber={setRowNumber}
                            setSolved={setSolved}
                            rowNumber={rowNumber}
                            word={word}
                        />
                    </div>

                ))}
            </div>
            <div style={{ margin: "auto", width: "300px", display: "table" }}>
                {thirdKeys.map((key) => (
                    <div style={{ width: "50px", display: "table-cell" }}>
                        <Key
                            value={key.value}
                            setGuess={setGuess}
                            guess={guess}
                            setSaveOne={setSaveOne}
                            setSaveTwo={setSaveTwo}
                            setSaveThree={setSaveThree}
                            setSaveFour={setSaveFour}
                            setSaveFive={setSaveFive}
                            setSaveSix={setSaveSix}
                            setRowNumber={setRowNumber}
                            setSolved={setSolved}
                            rowNumber={rowNumber}
                            word={word}
                        />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Keyboard;
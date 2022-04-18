import Row from "./Row";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

const Game = () => {

    const [rowNumber, setRowNumber] = useState<number>(0);
    const [cellNumber, setCellNumber] = useState<number>(0);
    const [numFilled, setNumFilled] = useState<number>(0);
    const [input, setInput] = useState<string>("");

    let alph = "abcdefghijklmnopqrstuvwxyz";
    // handle any key press
    function handleKeyDown(event: any) {
        for (let i = 0; i < alph.length; i++){
            if (event.key === alph[i]) {
                setInput(event.key);
                console.log("HERE", event.key);
                let filled: number = numFilled;
                setNumFilled(filled + 1);
                break;
            }
        }
        
        if (event.key === "Backspace"){
            setInput("back");
            let filled: number = numFilled;
            setNumFilled(filled -1);
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
                numFilled = {numFilled}
            />
            </div>
            <Row 
                rowNumber={rowNumber}
                index={1}
                input={input}
                numFilled = {numFilled}
            />
           <Row 
                rowNumber={rowNumber}
                index={2}
                input={input}
                numFilled = {numFilled}
            />
            <Row 
                rowNumber={rowNumber}
                index={3}
                input={input}
                numFilled = {numFilled}
            />
            <Row 
                rowNumber={rowNumber}
                index={4}
                input={input}
                numFilled = {numFilled}
            />
        </div>
    )
}

export default Game;
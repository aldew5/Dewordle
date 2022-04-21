import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ClearIcon from "@mui/icons-material/Clear";
import { Box } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import {
    Dispatch,
    SetStateAction
}
    from "react";

interface SolvedProps {
    setShowComplete: Dispatch<SetStateAction<boolean>>;
}

const Solved = ({ setShowComplete }: SolvedProps) => {
    return (
        <Card sx={{ width: 275, border: 2 }}>
            <div style={{ alignContent: "center" }}>
                <CardContent>
                    <div style={{ float: "right" }}>
                        <ClearIcon onClick={() => {setShowComplete(false)}}/>
                    </div>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        style={{ margin: "auto" }}
                    >
                        Congratulations!
                    </Typography>
                    <Typography sx={{marginTop: "1rem"}}>
                        You have successfully beaten today's Wordle!
                    </Typography>

                </CardContent>
            </div>
        </Card >
    )
}

export default Solved;
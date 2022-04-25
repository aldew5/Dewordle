import styles from "../styles/Key.module.css";
import { useEffect } from "react";

interface KeyProps {
    value: string;
}

const Key = ({value}: KeyProps) => {
    useEffect(() => {
        console.log("HERE");
    }, [])
    return (
        <div className={styles.key}>
            {value}
        </div>
    )

}

export default Key;
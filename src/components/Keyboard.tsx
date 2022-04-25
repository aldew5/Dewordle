import Key from "./Key";
import { useEffect, useState } from "react";

interface Key {
    value: string;
}


const KeyBoard = () => {
    const [keys, setKeys] = useState<Key[]>([]);
    let alph: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    useEffect(() => {
        let key_list: Key[] = [];
        for (let i = 0; i < alph.length; i++){
            key_list.push({ value: alph[i] });
        }
        setKeys(key_list);
       
    }, [])

    return (
        <div>
            <div>
                {keys.map((key) => (
                    <Key value={key.value}/>
                
                ))}
            </div>
        </div>
    )
}

export default KeyBoard;
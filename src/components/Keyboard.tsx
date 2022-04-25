import Key from "./Key";
import { useEffect, useState } from "react";

interface Key {
    value: string;
}


const KeyBoard = () => {
    const [firstKeys, setFirstKeys] = useState<Key[]>([]);
    const [secondKeys, setSecondKeys] = useState<Key[]>([]);
    const [thirdKeys, setThirdKeys] = useState<Key[]>([]);

    let alph: string = "QWERTYUIOPASDFGHJKLZXCVBNM";

    useEffect(() => {
        let key_list: Key[] = [];
        for (let i = 0; i < 10; i++){
            key_list.push({ value: alph[i] });
        }
        setFirstKeys(key_list);

        key_list = [];
        for (let i = 10; i < 19; i++){
            key_list.push({ value: alph[i] })
        }
        setSecondKeys(key_list);

        key_list = [{ value:"Enter" }];
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
                        <Key value={key.value}/>
                    </div>
                
                ))}
            </div>
            <div style={{ margin: "auto", width: "300px", display: "table" }}>
                {secondKeys.map((key) => (
                    <div style={{ width: "50px", display: "table-cell" }}>
                        <Key value={key.value}/>
                    </div>
                
                ))}
            </div>
            <div style={{ margin: "auto", width: "300px", display: "table" }}>
                {thirdKeys.map((key) => (
                    <div style={{ width: "50px", display: "table-cell" }}>
                        <Key value={key.value}/>
                    </div>
                
                ))}
            </div>
        </div>
    )
}

export default KeyBoard;
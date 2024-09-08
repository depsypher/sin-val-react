import {useEffect, useState} from "react";
import css from "./SinInput.module.css";
import {SinDigit} from "./SinDigit.tsx";
import {luhnCheck} from "./LuhnCheck.tsx";

interface Props {
    id: string;
}

export function SinInput(props: Props) {
    const {id} = props;
    const storageKey = `SinInput-${id}`

    // set the digits to empty by default,
    // or pull from localstorage if they exist there
    const [digits, setDigits] = useState(() => {
        const existing = localStorage.getItem(storageKey);
        if (existing) {
            const data = JSON.parse(existing) as string[];
            if (data) {
                return data;
            }
        }
        return Array(9).fill("") as Array<string>;
    });
    const [valid, setValid] = useState(false);

    // listen for changes in other windows/tabs and keep in sync
    useEffect(() => {
        const storageEventCallback = (e: StorageEvent) => {
            if (e.key === storageKey) {
                setDigits(JSON.parse(e.newValue!) as string[]);
            }
        }
        window.addEventListener('storage', storageEventCallback);

        return () => {
            window.removeEventListener('storage', storageEventCallback)
        }
    }, [storageKey]);

    // save digits to localstorage whenever they change
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(digits));
    }, [storageKey, digits]);

    // check SIN validity whenever digits change
    useEffect(() => {
        const good = digits.filter(v => v.length === 1 && !Number.isNaN(parseInt(v)));
        setValid( good.length === 9 && luhnCheck(digits));
    }, [digits]);

    const onChange = (index: number, value: string) => {
        setDigits(prevState => {
            const newState = [...prevState];
            newState[index] = value.slice(0, 1);
            return newState;
        })
    };

    const inputs = digits.map((v, i) => <SinDigit key={i} index={i} value={v} onChange={onChange} />);

    return (
        <div className={css.sinInput}>
            {inputs}
            <div className={`hidden md:block ${css.verification} ${css.wide}`}>
                {valid ? "Valid SIN ✅" : "Invalid SIN ❌"}
            </div>
            <div className={`md:hidden ${css.verification}`}>
                {valid ? "✅" : "❌"}
            </div>
        </div>
    )
}

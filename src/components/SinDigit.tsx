import css from "./SinDigit.module.css";

interface Props {
    index: number;
    value: string;
    onChange: (index: number, value: string) => void;
}

export function SinDigit(props: Props) {
    const {index, value, onChange} = props;

    return (
      <input type="text"
             inputMode="numeric"
             className={`input input-bordered" w-full max-w-xs ${css.input}`}
             value={value}
             min={0}
             max={9}
             onKeyDown={(e) => {
                 const key = e.key
                 if (key === "Backspace") {
                     const val = e.currentTarget.value;
                     if (val.length === 0) {
                         const prevInput = e.currentTarget.previousElementSibling as HTMLElement;
                         if (prevInput) {
                             onChange(index - 1, "");
                             prevInput.focus();
                         }
                     } else {
                         onChange(index, val.slice(0, val.length - 1));
                     }
                 }
             }}
             onChange={(e) => {
                 const val = e.currentTarget.value;
                 if (val.match(/[0-9]/)) {
                     onChange(index, val);
                     const nextInput = e.currentTarget.nextElementSibling as HTMLElement;
                     if (nextInput) {
                         nextInput.focus();
                     }
                 }
             }}
             onSelect={(e) => {
                 const nextInput = e.currentTarget.nextElementSibling as HTMLElement;
                 if (nextInput.nodeName == "INPUT") {
                     onChange(index, "")
                 } else {
                     onChange(index, e.currentTarget.value);
                 }
             }}
      />
    );
}

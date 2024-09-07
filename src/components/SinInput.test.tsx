import {describe, expect, test} from "vitest";
import {fireEvent, render} from "@testing-library/react";
import {SinInput} from "./SinInput.tsx";

const VALID_SIN = [0, 4, 6, 4, 5, 4, 2, 8, 6];
const INVALID_SIN = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("SinInput", () => {
   test("Empty SIN is marked invalid", () => {
       const rendered = render(<SinInput id="person1"/>);

       // all inputs start empty
       const inputs = rendered.getAllByRole("textbox") as HTMLInputElement[];
       for (const input of inputs) {
           expect(input.value).toBe("");
       }

       const invalid = rendered.queryByText("Invalid SIN ❌");
       expect(invalid).not.toBeNull()
   })

    test("Valid SIN is marked valid", () => {
        const rendered = render(<SinInput id="person1"/>);

        // fill inputs with valid SIN digits
        const inputs = rendered.getAllByRole("textbox") as HTMLInputElement[];
        inputs.map((val, i) => {
            const digit = VALID_SIN[i].toString();
            fireEvent.change(val, { target: { value: digit } });
        })

        const valid = rendered.queryByText("Valid SIN ✅");
        expect(valid).not.toBeNull()
    })

    test("Invalid SIN is marked invalid", () => {
        const rendered = render(<SinInput id="person1"/>);

        // fill inputs with valid SIN digits
        const inputs = rendered.getAllByRole("textbox") as HTMLInputElement[];
        inputs.map((val, i) => {
            const digit = INVALID_SIN[i].toString();
            fireEvent.change(val, { target: { value: digit } });
        })

        const invalid = rendered.queryByText("Invalid SIN ❌");
        expect(invalid).not.toBeNull()
    })
});

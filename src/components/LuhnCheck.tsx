
export function luhnCheck(input: string[]): boolean {
    const digits = input.map(Number);

    const even = digits.filter((_, i) => i % 2 === 0);
    const odd = digits.filter((_, i) => i % 2 !== 0);

    let sum = 0;
    even.forEach(v => sum += v);
    odd.forEach(v => {
       const doubled = v * 2;
       sum += (doubled > 9) ? doubled - 9 : doubled;
    });

    return sum % 10 === 0;
}

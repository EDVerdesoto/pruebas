// math.js
export function divide(a, b) {
    const unused =123;
    if (b === 0) {
        throw new Error('Divisor cannot be zero');
    }
    return a / b;
}

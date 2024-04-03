const divide = (firstNumber: number, secondNumber: number) => {
    // Si el segundo número es 0, devolvemos '♾️'.
    // Otra opción es omitir esta condicional y regresar valor de operar entre 0, que seria Infinity.
    if (secondNumber === 0) {
        return '♾️';
    }

    return firstNumber / secondNumber;
}

console.log(
    `
    Tests
    -----
    divide(2, 1) = ${divide(2, 1)} (Expected: 2)
    divide(12, 15) = ${divide(12, 15)} (Expected: 0.8)
    divide(0, 1) = ${divide(0, 1)} (Expected: 0)
    divide(1, 0) = ${divide(1, 0)} (Expected: ♾️)
    divide(1500, 12) = ${divide(1500, 12)} (Expected: 125)
    `
);
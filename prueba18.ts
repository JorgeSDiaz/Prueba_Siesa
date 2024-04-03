const changeNumberBase = (number: number, baseTo: number) => {
  // Si el número es menor o igual a la base, significa que ya no se puede dividir más, después de esta operación.
  if (number <= baseTo) {
    // Retorna la concatenación del cociente de la división y el residuo de la división.
    return (
      Math.round(number / baseTo).toString() + (number % baseTo).toString()
    );
  }

  // El residuo de la división siempre es el último dígito.
  return (
    changeNumberBase(Math.floor(number / baseTo), baseTo) +
    (number % baseTo).toString()
  );
};

console.log(
  `
    Tests
    -----
    287 en base 4: ${changeNumberBase(287, 4)} (Expected: 10133)
    10 en base 2: ${changeNumberBase(10, 2)} (Expected: 1010)
    2 en base 2: ${changeNumberBase(2, 2)} (Expected: 10)
    287 en base 2: ${changeNumberBase(287, 2)} (Expected: 100011100)
 `
);

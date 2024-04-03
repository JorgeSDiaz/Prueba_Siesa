const changeNumberBase = (number: number, baseTo: number) => {
  if (number <= baseTo) {
    return (
      Math.round(number / baseTo).toString() + (number % baseTo).toString()
    );
  }

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

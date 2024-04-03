# Pruebas Siesa

Los ejercicios los desarrolle con Typescript, asi que hice uso de tsc para hacer la transpilación a Javascript y poderlos ejecutar con Node.

## Pre-requisitos

- [Instalar Node](https://nodejs.org/en/download)
- Instalar Typescript

  ```bash
  npm install -g typescript
  ```

## Ejercicio 17

***Realice un algoritmo que reciba como parámetro dos números enteros y retorne la división de ambos números.***

- Tome a consideración el caso de cuando se divide entre 0, aunque la operación retornara Infinity, preferí hacerlo más evidente con el emoji de ♾️.

- Agregue algunos test para asegurarme de que funciona correctamente.

```bash
tsc prueba17.ts && node.prueba17.js
```

```typescript
const divide = (firstNumber: number, secondNumber: number) => {
  if (secondNumber === 0) {
    return "♾️";
  }

  return firstNumber / secondNumber;
};

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
```

## Ejercicio 18

***Implemente una función que reciba como parámetros un número X y una base K. Devuelva la representación en base K del número X***

- Use recursividad, asi que definí una guarda de salida para: Cuando el número es igual o menor a la base, retorne el concatenación del cociente y el residuo de la division (En ese orden).
- El retorno de la función debe ser el resultado de operar el cociente (hasta ser 0 o 1), concatenado a los residuos de cada operación.

```bash
tsc prueba18.ts && node.prueba18.js
```

```typescript
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
```

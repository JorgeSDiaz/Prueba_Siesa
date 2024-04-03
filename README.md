# Pruebas Siesa

Los ejercicios los desarrolle con Typescript, asi que hice uso de tsc para hacer la transpilación a Javascript y poderlos ejecutar con Node.

## Pre-requisitos

- [Instalar Node](https://nodejs.org/en/download)
- Instalar Typescript

  ```bash
  npm install -g typescript
  ```

## Ejercicio 17

**_Realice un algoritmo que reciba como parámetro dos números enteros y retorne la división de ambos números._**

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

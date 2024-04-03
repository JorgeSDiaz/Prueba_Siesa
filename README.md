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

---

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

---

- Use recursividad, asi que definí una guarda de salida para: Cuando el número es igual o menor a la base, retorna la concatenación del cociente y el residuo de la division (En ese orden).
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

## Ejercicio 19

***Implementar un programa con las características:***

1. ***Una estructura que represente un árbol.***
2. ***Una función que reciba un árbol y devuelva su peso.***
3. ***Una función que reciba un árbol y devuelva su peso promedio.***
4. ***Una función que reciba un árbol y devuelva su altura.***

---

- Use recursividad, asi que definí una guarda de salida para: Cuando el número es igual o menor a la base, retorna la concatenación del cociente y el residuo de la division (En ese orden).
- El retorno de la función debe ser el resultado de operar el cociente (hasta ser 0 o 1), concatenado a los residuos de cada operación.

```bash
tsc prueba19.ts && node.prueba19.js
```

```typescript
class Tree {
  value: number;
  left: Tree | null;
  right: Tree | null;

  constructor(value: number, left: Tree | null, right: Tree | null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const getTreeWeight = (tree: Tree): number => {
  if (tree.left === null && tree.right === null) {
    return tree.value;
  }

  return (
    tree.value +
    (tree.left === null ? 0 : getTreeWeight(tree.left) +
    (tree.right === null ? 0 : getTreeWeight(tree.right)))
  );
};

const getTreeNodesCount = (tree: Tree): number => {
  if (tree.left === null && tree.right === null) {
    return 1;
  }

  return (
    1 +
    (tree.left === null ? 0 : getTreeNodesCount(tree.left)) +
    (tree.right === null ? 0 : getTreeNodesCount(tree.right))
  );
};

const getAverageWeight = (tree: Tree): number => {
  return Number((getTreeWeight(tree) / getTreeNodesCount(tree)).toFixed(5));
};

const getTreeHeight = (tree: Tree): number => {
  if (tree.left === null && tree.right === null) {
    return 1;
  }

  return (
    1 +
    Math.max(
      tree.left === null ? 0 : getTreeHeight(tree.left),
      tree.right === null ? 0 : getTreeHeight(tree.right)
    )
  );
};

const tree_one = new Tree(4, null, null);
const tree_two = new Tree(4, new Tree(2, null, null), new Tree(1, null, null));

console.log(
  `
  Tree One:
    Weight: ${getTreeWeight(tree_one)},
    Average: ${getAverageWeight(tree_one)},
    Height: ${getTreeHeight(tree_one)}\n
    ` +
    `
  Tree Two:
    Weight: ${getTreeWeight(tree_two)},
    Average: ${getAverageWeight(tree_two)},
    Height: ${getTreeHeight(tree_two)}
    `
);

```

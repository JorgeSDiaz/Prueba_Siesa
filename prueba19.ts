// Peso/Valor del nodo raiz
// Subárboles o arreglo de arboles
class Tree {
  value: number;
  subTree: Tree[];

  constructor(value: number, subTree: Tree[] = []) {
    this.value = value;
    this.subTree = subTree;
  }

  // No tiene sub arboles si el tamaño del arreglo de sub arboles es 0
  notSubTree(): boolean {
    return this.subTree.length === 0;
  }
}

// Una función que recibe un árbol y devuelve el peso total del árbol. 💚
const getTreeWeight = (tree: Tree): number => {
  if (tree.notSubTree()) {
    return tree.value;
  }

  let mid = Math.floor(tree.subTree.length / 2);

  return (
    tree.value +
    tree.subTree
      .slice(0, mid)
      .reduce((acc, node) => acc + getTreeWeight(node!), 0) +
    tree.subTree.slice(mid).reduce((acc, node) => acc + getTreeWeight(node!), 0)
  );
};

// Una función que recibe un árbol y devuelve el promedio de los pesos de los nodos del árbol. 💚
const getTreeNodesCount = (tree: Tree): number => {
  if (tree.notSubTree()) {
    return 1;
  }

  let mid = Math.floor(tree.subTree.length / 2);

  return (
    1 +
    tree.subTree
      .slice(0, mid)
      .reduce((acc, node) => acc + getTreeNodesCount(node!), 0) +
    tree.subTree
      .slice(mid)
      .reduce((acc, node) => acc + getTreeNodesCount(node!), 0)
  );
};

const getAverageWeight = (tree: Tree): number => {
    // Peso del árbol / Cantidad de Nodos
  return Number((getTreeWeight(tree) / getTreeNodesCount(tree)).toFixed(7));
};

// Una función que recibe un árbol y devuelve su altura. 💚
const getTreeHeight = (tree: Tree): number => {
  if (tree.notSubTree()) {
    return 1;
  }

  let mid = Math.floor(tree.subTree.length / 2);

  return (
    1 +
    Math.max(
      tree.subTree
        .slice(0, mid)
        .reduce((acc, node) => Math.max(acc, getTreeHeight(node!)), 0),
      tree.subTree
        .slice(mid)
        .reduce((acc, node) => Math.max(acc, getTreeHeight(node!)), 0)
    )
  );
};

const tree_one = new Tree(4);
const tree_two = new Tree(4, [new Tree(2), new Tree(1)]);
const tree_three = new Tree(4, [
  new Tree(1),
  new Tree(2, [new Tree(3)]),
  new Tree(5, [new Tree(1), new Tree(4)]),
]);

console.log(
  `
      Tests
      ------
      ` +
    `
    Tree One:
      Weight: ${getTreeWeight(tree_one)},
      Average: ${getAverageWeight(tree_one)},
      Height: ${getTreeHeight(tree_one)}
      ` +
    `
    Tree Two:
      Weight: ${getTreeWeight(tree_two)},
      Average: ${getAverageWeight(tree_two)},
      Height: ${getTreeHeight(tree_two)}
      ` +
    `
    Tree Three:
      Weight: ${getTreeWeight(tree_three)},
      Average: ${getAverageWeight(tree_three)},
      Height: ${getTreeHeight(tree_three)}
      `
);

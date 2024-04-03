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

// Una función que recibe un árbol y devuelve el peso total del árbol. 💚
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

// Una función que recibe un árbol y devuelve el promedio de los pesos de los nodos del árbol. 💚
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

// Una función que recibe un árbol y devuelve su altura. 💚
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

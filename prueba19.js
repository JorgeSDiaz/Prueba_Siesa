var Tree = /** @class */ (function () {
    function Tree(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
    return Tree;
}());
// Una función que recibe un árbol y devuelve el peso total del árbol. 💚
var getTreeWeight = function (tree) {
    if (tree.left === null && tree.right === null) {
        return tree.value;
    }
    return (tree.value +
        (tree.left === null ? 0 : getTreeWeight(tree.left) +
            (tree.right === null ? 0 : getTreeWeight(tree.right))));
};
// Una función que recibe un árbol y devuelve el promedio de los pesos de los nodos del árbol. 💚
var getTreeNodesCount = function (tree) {
    if (tree.left === null && tree.right === null) {
        return 1;
    }
    return (1 +
        (tree.left === null ? 0 : getTreeNodesCount(tree.left)) +
        (tree.right === null ? 0 : getTreeNodesCount(tree.right)));
};
var getAverageWeight = function (tree) {
    return Number((getTreeWeight(tree) / getTreeNodesCount(tree)).toFixed(5));
};
// Una función que recibe un árbol y devuelve su altura. 💚
var getTreeHeight = function (tree) {
    if (tree.left === null && tree.right === null) {
        return 1;
    }
    return (1 +
        Math.max(tree.left === null ? 0 : getTreeHeight(tree.left), tree.right === null ? 0 : getTreeHeight(tree.right)));
};
var tree_one = new Tree(4, null, null);
var tree_two = new Tree(4, new Tree(2, null, null), new Tree(1, null, null));
console.log("\n  Tree One:\n    Weight: ".concat(getTreeWeight(tree_one), ",\n    Average: ").concat(getAverageWeight(tree_one), ",\n    Height: ").concat(getTreeHeight(tree_one), "\n\n    ") +
    "\n  Tree Two:\n    Weight: ".concat(getTreeWeight(tree_two), ",\n    Average: ").concat(getAverageWeight(tree_two), ",\n    Height: ").concat(getTreeHeight(tree_two), "\n    "));

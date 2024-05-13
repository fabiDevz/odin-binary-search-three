import Tree from './Arbol.js';





let vector2 = [10, 12, 11, 5, 1, 2, 3, 25, 44, 33, 27, 99, 100];

let arbol = new Tree(vector2, 0, vector2.length-1);




const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 
  prettyPrint(arbol.root);

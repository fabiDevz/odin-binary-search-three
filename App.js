import Tree from './Arbol.js';





let vector2 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

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
 
  //prettyPrint(arbol.root);

  arbol.insert(arbol.root, 100);
  arbol.insert(arbol.root, 200);
  arbol.insert(arbol.root, 300);
  arbol.insert(arbol.root, 400);
 // prettyPrint(arbol.root);

  //arbol.deleteItem(arbol.root, 8);

  prettyPrint(arbol.root);

 // console.log(arbol.find(arbol.root,8));

console.log(arbol.levelOrder(arbol.root));

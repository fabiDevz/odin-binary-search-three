import Tree from './Arbol.js';
import Node from './Nodo.js';




/**
 * Matriz de numeros < 100 aleatorios 
 */
let vector2 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67];
let arbol = new Tree(vector2, 0, vector2.length-1);

/**
 * Confirmamos que el arbol esta balanceado
 *  */ 
if(arbol.isBalanced(arbol.root))
  {
    console.log('El arbol esta equilibrado');
  }else{
    console.log('El arbol no esta equilibrado');
  }

  /*Imprimir en OrderLevel, Preorder, PostOrder, Inorder */
console.log('Level Order : ');
  arbol.levelOrder(arbol.root);

  console.log('Pre Order : ');
  arbol.preOrder(arbol.root);

  console.log('Post Order : ');
  arbol.postOrder(arbol.root);

  console.log('In Order : ');
  arbol.inOrder(arbol.root);

/**Desbalanceando el arbol */
  arbol.insert(arbol.root, 101);
  arbol.insert(arbol.root, 200);
  arbol.insert(arbol.root, 300);
  arbol.insert(arbol.root, 400);  

  /**Confirmamos que el arbol esta desbalanceado
   * 
   */
  if(arbol.isBalanced(arbol.root))
    {
      console.log('El arbol esta equilibrado');
    }else{
      console.log('El arbol no esta equilibrado');
    }

/*
    Rebalanceamos el arbol y confirmamos 
*/

arbol.rebalance();

if(arbol.isBalanced(arbol.root))
  {
    console.log('El arbol esta equilibrado');
  }else{
    console.log('El arbol no esta equilibrado');
  }

  /*Imprimir en OrderLevel, Preorder, PostOrder, Inorder */
  console.log('Level Order : ');
  arbol.levelOrder(arbol.root);

  console.log('Pre Order : ');
  arbol.preOrder(arbol.root);

  console.log('Post Order : ');
  arbol.postOrder(arbol.root);

  console.log('In Order : ');
  arbol.inOrder(arbol.root);


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

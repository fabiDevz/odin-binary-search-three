import Node from './Nodo.js';

class Tree {

  constructor(array, start, end) {
    this.root = this.buildTree(array,start,end);
  }

  buildTree(array, start, end) {
    // verificamos si el arreglo esta ordenado
    if (!this.ordenAscendente(array)) {
      array.sort(function (a, b) { return a - b });
    }

    //caso base

    if (start > end) {
      return null;
    }

   

    let med = parseInt((start + end) / 2); // escogemos el elemento del medio

    let node = new Node(array[med]); // lo inicializamos como Nodo raiz
    
    // recursivamente se construye en ambos sentidos

    node.left = this.buildTree(array, start, med - 1);
    node.right = this.buildTree(array, med + 1, end);

    return node;


  }

  ordenAscendente(array) {
    for (let i = 0; i < array.length - 1; i++) {
      if (!(array[i] <= array[i + 1])) {
        return false;
      }
    }
    return true;
  }

 


}

export default Tree;
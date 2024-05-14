import Node from './Nodo.js';

class Tree {

  constructor(array, start, end) {
    this.root = this.buildTree(array, start, end);
  }

  buildTree(array, start, end = 10) {
    // verificamos si el arreglo esta ordenado
    if (!this.ordenAscendente(array)) {
      array.sort(function (a, b) { return a - b });
    }

    if(this.tieneDuplicados(array))
      {
       array = this.eliminarDuplicados(array);
       end = array.length-1;
       
      }

    if (start > end) {
      return null;
    }

    let mid = Math.floor((start + end) / 2);
    let node = new Node(array[mid]);

    node.left = this.buildTree(array, start, mid - 1);

    node.right = this.buildTree(array, mid + 1, end);

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

  eliminarDuplicados(array) {

    let unicos = [];

    let valoresVistos = {};

    // Iteramos sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
      let elemento = array[i];
      if (!(elemento in valoresVistos)) {

        unicos.push(elemento);

        valoresVistos[elemento] = true;
      }
    }


    return unicos;
  }

   tieneDuplicados(array) {

    let elementosUnicos = {};
    for (let i = 0; i < array.length; i++) {
       
        if (elementosUnicos[array[i]]) {
            return true;
        } else {
        
            elementosUnicos[array[i]] = true;
        }
    }

    return false;
}






}

export default Tree;
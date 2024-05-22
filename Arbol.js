import Node from './Nodo.js';

class Tree {

  constructor(array, start, end) {
    this.root = this.buildTree(array, start, end);
  }

  buildTree(array, start, end ) {
    // verificamos si el arreglo esta ordenado
    if (!this.ordenAscendente(array)) {
      array.sort(function (a, b) { return a - b });
    }

    if (this.tieneDuplicados(array)) {
      array = this.eliminarDuplicados(array);
      end = array.length - 1;

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

  insert(root, valor) {
    if (root == null) {
      root = new Node(valor);
      return root;
    }

    if (valor < root.data)
      root.left = this.insert(root.left, valor);
    else if (valor > root.data)
      root.right = this.insert(root.right, valor);

    return root;
  }

  deleteItem(root, valor) {
    // caso base 
    if (root === null)
      return root;

    if (valor < root.data)
      root.left = this.deleteItem(root.left, valor);

    else if (valor > root.data)
      root.right = this.deleteItem(root.right, valor);
    else {
      // Nodo con un hijo o sin hijos
      if (root.left === null)
        return root.right;
      else if (root.right === null)
        return root.left;


      root.data = this.minValue(root.right);


      root.right = this.deleteItem(root.right, root.data);
    }
    return root;
  }


  find(node, value) {
    // Si el nodo actual es nulo, significa que no se encontró el valor
    if (node === null) {
      return null;
    }

    // Si el valor del nodo actual coincide con el valor buscado, retornar el nodo
    if (node.data === value) {
      return node;
    }

    // Si el valor buscado es menor que el valor del nodo actual, buscar en el subárbol izquierdo
    if (value < node.data) {
      return this.find(node.left, value);
    }

    // Si el valor buscado es mayor que el valor del nodo actual, buscar en el subárbol derecho
    if (value > node.data) {
      return this.find(node.right, value);
    }

  }

  minValue(node) {
    let minv = node.data;
    while (node.left !== null) {
      minv = node.left.data;
      node = node.left;
    }
    return minv;
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

  levelOrder(root) {
    if (!root) {
      return [];
    }

    const que = [];
    const res = [];
    que.push(root);

    while (que.length) {
      const temp = [];
      const size = que.length;

      for (let i = 0; i < size; i++) {
        const node = que.shift();
        temp.push(node.data);
        if (node.left) {
          que.push(node.left);
        }
        if (node.right) {
          que.push(node.right);
        }
      }
      res.push(temp);
    }
    return res;
  };

  inOrder(root, values=[])
  {
    if (root) {

      this.inOrder(root.left, values);
      console.log(root.data);
      values.push(root.data);
      this.inOrder(root.right, values);
    }

    return values;
  }

  preOrder(root)
  {
    if (root) {

      console.log(root.data);
      this.preOrder(root.left);
      
      this.preOrder(root.right);
    }
  }

  postOrder(root)
  {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.data);
    }
  }  

  height(node) {
    if (node === null) {
      return 0; 
    } else {
    
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);

      

      const maxHeight = Math.max(leftHeight, rightHeight) + 1;
     // console.log("Altura del subárbol con raíz", node.data, ":", maxHeight);
      return maxHeight;
    }
  }

  depth(value, root = this.root, currentDepth = 0) {
    if (root === null) {
      return -1; // Si el nodo actual es nulo, el valor no se encuentra en el árbol
    }

    if (root.data === value) {
      return currentDepth; // Si el nodo actual contiene el valor, devuelve la profundidad actual
    }

    // Busca en los subárboles izquierdo y derecho
    const leftDepth = this.depth(value, root.left, currentDepth + 1);
    const rightDepth = this.depth(value, root.right, currentDepth + 1);

    // Si el nodo no se encuentra en ninguno de los subárboles, devuelve -1
    if (leftDepth === -1 && rightDepth === -1) {
      return -1;
    }

    // Retorna la profundidad máxima encontrada en los subárboles
    return Math.max(leftDepth, rightDepth);
  }

  isBalanced(root = this.root) {
    if (root === null) {
      return true;
    }

    const leftHeight = this.height(root.left);
    const rightHeight = this.height(root.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }

    return this.isBalanced(root.left) && this.isBalanced(root.right);
  }

  rebalance()
  {
      // Obtener todos los valores en orden
      const values = this.inOrder(this.root);

      // Reconstruir el árbol balanceado
      this.root = this.buildTree(values, 0, values.length - 1);
  }
}
  


  








export default Tree;
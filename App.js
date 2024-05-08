import Arbol from './Arbol.js';

// caso 1 arreglo ordenado [1,23,45,67]

let arbol = new Arbol([]);


let vector = [1,23,45,67];

arbol.buildThree(vector);

console.log(arbol.ordenAscendente(vector));


// caso 2 arreglo desordenado [1,2,3,6,4,12,99,1,1,2,3]
let vector2 = [1,2,3,6,4,12,99,1,1,2,3];
console.log(arbol.ordenAscendente(vector2));

arbol.buildThree(vector2);

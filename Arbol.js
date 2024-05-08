import Nodo from './Nodo.js';

class Three {

    constructor(array) {
        this.root = this.buildThree(array);
    }

    buildThree(array)
    {
      // verificamos si el arreglo esta ordenado
      if(!this.ordenAscendente(array))
        {
          console.log('antes');
          console.log(array);
          array.sort(function(a,b){return a - b});

          console.log('despues');
          console.log(array);
        }

    }

    ordenAscendente(array)
    {
      for (let i = 0 ; i < array.length-1 ; i ++)
        {
          if(!(array[i] <= array[i+1]))
            {
              return false;
            }
        }
        return true;
    }

    // numeros.sort(function(a, b){return a - b});

    //[1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
    // construye recursivamente de izquierda a derecha 
    

}

export default Three;
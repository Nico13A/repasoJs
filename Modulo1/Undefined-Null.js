/*

5) ¿Cuál es la diferencia entre undefined y null en JavaScript?

** undefined **
Es un tipo de dato primitivo que indica que una variable ha sido declarada pero no ha sido inicializada 
con un valor.
También es el valor que devuelve una función que no retorna nada explícitamente.

** null ** 
Es un valor asignado a una variable que indica la ausencia intencional de un valor.
Es un objeto especial en JavaScript.
Es importante destacar que null es un valor asignado, mientras que undefined es un estado de una variable
que no ha sido inicializada.

Por ejemplo:
let x; // x es undefined
let y = null; // y es null
console.log(x); // undefined
console.log(y); // null
console.log(typeof x); // undefined
console.log(typeof y); // object
console.log(x == y); // false
console.log(x === y); // false
console.log(x == null); // true
console.log(y == null); // true
console.log(x === null); // false
console.log(y === null); // true
console.log(x == undefined); // true
console.log(y == undefined); // false
console.log(x === undefined); // true
console.log(y === undefined); // false

*/
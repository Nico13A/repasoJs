/*

1) ¿Qué significan los conceptos de scope, hoisting y mutabilidad en JavaScript? 
Explicá con ejemplos simples.

El scope (ambito o alcance) es el contexto donde las variables existen y pueden ser accedidas. 
JavaScript tiene 2 tipos:
    Global scope (alcance global)
    Local scope (alcance dentro de funciones o bloques)
*/

// Ejemplo de scope global
let x = 10; // Variable global
function mostrarX() {
    console.log(x); // Accede a la variable global
}
mostrarX(); // Imprime 10

// Ejemplo de scope local
function mostrarY() {
    let y = 20; // Variable local
    console.log(y); // Accede a la variable local
}
mostrarY(); // Imprime 20
//console.log(y); 
// Error: y is not defined (no se puede acceder a la variable local desde fuera de la función)

/*
Hoisting significa que las declaraciones de variables y funciones se "elevan" al principio 
de su scope antes de ejecutar el código.
*/

// Ejemplo de hoisting
console.log(a); // undefined
var a = 5; // Inicialización
console.log(a); // 5
/*
Esto es lo que hace js en el ejemplo de arriba.
var x;
console.log(x); // undefined
x = 5;
*/
// Ejemplo de hoisting con funciones (NO pasa con las funciones flecha)
saludar(); // ¡Hola!
function saludar() {
  console.log("¡Hola!");
}

/*
La mutabilidad en js se refiere a la capacidad de cambiar el valor de una variable 
después de su declaración.
Por ejemplo, las variables declaradas con var, let y const tienen diferentes niveles de mutabilidad:
    var permite la redeclaración y la reasignación de valores.
    let permite la reasignación pero no la redeclaración en el mismo scope.
    const no permite la redeclaración ni la reasignación de valores.
Ejemplo de mutabilidad con var
var x = 10;
x = 20; // Reasignación
console.log(x); // 20
// Ejemplo de mutabilidad con let
let y = 30;
y = 40; // Reasignación
console.log(y); // 40
// Ejemplo de mutabilidad con const 
const z = 50;
// z = 60; // Error: Assignment to constant variable
// console.log(z); // 50

// Ejemplo de mutabilidad con objetos
const obj = { a: 1, b: 2 };
obj.a = 3; // Reasignación de propiedad
console.log(obj); // { a: 3, b: 2 }
// obj = { a: 4, b: 5 }; // Error: Assignment to constant variable
// console.log(obj); // { a: 3, b: 2 }
// Ejemplo de mutabilidad con arrays
const arr = [1, 2, 3];
arr[0] = 4; // Reasignación de elemento
console.log(arr); // [4, 2, 3]
// arr = [5, 6, 7]; // Error: Assignment to constant variable
// console.log(arr); // [4, 2, 3]
*/
/*
3) ¿Qué pasa si intentás usar una variable declarada con let antes de su declaración? ¿Y con var?
*/

/*
Ejemplo de uso de let antes de su declaración       
console.log(a); ReferenceError: Cannot access 'a' before initialization
let a = 5; Inicialización
console.log(a); 5
*/

/*
// Ejemplo de uso de var antes de su declaración
// console.log(b); // undefined
// var b = 10; // Inicialización
// console.log(b); // 10
//
*/
// En el caso de let, se produce un error de referencia (ReferenceError) porque la variable
// no está definida antes de su declaración. Esto se debe a la "zona temporal muerta" (temporal dead zone)
// que existe entre la declaración y la inicialización de la variable.
// En el caso de var, se produce un comportamiento de hoisting, lo que significa que la declaración
// se eleva al inicio del contexto de ejecución, pero la variable se inicializa como undefined.
// Por lo tanto, al intentar acceder a la variable antes de su declaración, se obtiene undefined.

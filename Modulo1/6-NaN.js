/*

6) ¿Qué tipo de valor es NaN y en qué situaciones puede aparecer?

NaN (Not a Number) es un valor especial en JavaScript que representa un valor que no es un número válido.
NaN es un valor de tipo number, pero no es igual a ningún otro valor, ni siquiera a sí mismo.
Es un valor especial que indica que una operación que debería devolver un número, 
no pudo hacerlo correctamente.

NaN puede aparecer en varias situaciones, como:
- Al intentar realizar una operación matemática con un valor no numérico.
- Al intentar convertir un valor no numérico a un número usando la función Number() o parseInt().
- Al dividir un número por cero (en algunos casos).
- Al intentar realizar operaciones matemáticas con valores indefinidos o nulos.
- Al intentar realizar operaciones matemáticas con cadenas de texto que no representan números válidos.

Por ejemplo:
let x = "abc"; // cadena de texto no numérica
let y = 10;
let z = x * y; // NaN (multiplicación de cadena no numérica por número)
console.log(z); // NaN
console.log(typeof z); // number
console.log(z === NaN); // false (NaN no es igual a sí mismo)
console.log(isNaN(z)); // true (isNaN() devuelve true si el valor es NaN)
console.log(isNaN("abc")); // true (isNaN() devuelve true si el valor no es un número válido)
console.log(isNaN(undefined)); // true (isNaN() devuelve true si el valor es undefined)
console.log(isNaN(null)); // false (isNaN() devuelve false si el valor es null)
console.log(isNaN(NaN)); // true (isNaN() devuelve true si el valor es NaN)
console.log(isNaN(10)); // false (isNaN() devuelve false si el valor es un número válido)

*/
/*

9) ¿Por qué typeof null devuelve "object" y por qué se considera un bug histórico?

El operador typeof devuelve "object" para null debido a un error en la implementación original de 
JavaScript.

Este error se remonta a los primeros días de JavaScript, cuando el tipo null fue representado
como un puntero nulo en la memoria.
En JavaScript, los tipos de datos son representados por números en la memoria, y el valor null
fue asignado al mismo valor numérico que el tipo object.
Por lo tanto, cuando se usa el operador typeof en null, devuelve "object" en lugar de "null".
Esto se considera un bug histórico porque es un comportamiento inesperado y confuso.
A pesar de que se ha reconocido como un error, no se ha corregido para mantener la compatibilidad
con versiones anteriores de JavaScript.

Es importante tener en cuenta que, aunque typeof null devuelve "object", el valor null
es un tipo de dato primitivo en JavaScript que representa la ausencia intencional de un valor.
Por lo tanto, aunque typeof null devuelve "object", el valor null no es un objeto en sí mismo.
Es un valor especial que indica la ausencia de un valor.

*/
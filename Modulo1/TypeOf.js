/*

7) ¿Qué hace el operador typeof y qué valores puede devolver?

El operador typeof en JavaScript se usa para saber qué tipo de dato tiene una variable o un valor.

Los valores que puede devolver son:
- "undefined": Indica que la variable no ha sido declarada o no tiene un valor asignado.
- "boolean": Indica que la variable es de tipo booleano (true o false).
- "number": Indica que la variable es de tipo numérico (entero o decimal).
- "string": Indica que la variable es de tipo cadena de texto.
- "object": Indica que la variable es de tipo objeto (incluyendo arrays y null).
- "function": Indica que la variable es de tipo función.
- "bigint": Indica que la variable es de tipo BigInt (números enteros grandes).
- "symbol": Indica que la variable es de tipo símbolo (valores únicos e inmutables).
- "null": Indica que la variable es de tipo null (ausencia intencional de valor).

El operador typeof devuelve un string que representa el tipo de dato de la variable o valor.
Por ejemplo:
let x; // variable no inicializada
console.log(typeof x); // "undefined"

*/
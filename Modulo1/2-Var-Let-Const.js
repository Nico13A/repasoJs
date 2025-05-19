/*
2) ¿Qué diferencias hay entre var, let y const en cuanto a scope, hoisting y mutabilidad? 
¿Cuándo usarías uno y cuándo otro?

var:
- Scope: global o local (de función)
- Hoisting: sí, se eleva la declaración y se inicializa como undefined.
- Mutabilidad: permite redeclaración y reasignación.

let:
- Scope: local (de bloque)
- Hoisting: sí, se eleva la declaración pero no se inicializa (zona temporal muerta).
- Mutabilidad: permite reasignación pero no redeclaración en el mismo scope.

const:
- Scope: local (de bloque)
- Hoisting: sí, se eleva la declaración pero no se inicializa (zona temporal muerta).
- Mutabilidad: no permite redeclaración ni reasignación de referencia.
  Sin embargo, los objetos o arrays declarados con const **sí pueden ser mutables internamente**.

Usar var es menos recomendable debido a su comportamiento de hoisting y su alcance de función.
let es más seguro y predecible, ya que tiene un alcance de bloque.
const es útil para declarar referencias que no deben cambiar (aunque su contenido pueda mutar).

Usar const es una buena práctica para variables que no se espera que cambien,
ya que mejora la legibilidad y evita errores de reasignación.
*/



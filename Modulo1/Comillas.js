/*

8) ¿Qué diferencias hay entre usar comillas simples, dobles o backticks para strings?

Las comillas simples (' '), dobles (" ") y backticks (` `) son tres formas de definir 
cadenas de texto (strings) en JavaScript.

Las diferencias son las siguientes:
1. Comillas simples (' '):
   - Se utilizan para definir cadenas de texto simples.
   - No permiten interpolación de variables o expresiones.
   - Si se necesita incluir una comilla simple dentro de la cadena, se debe escapar con 
     una barra invertida (\).
   - Ejemplo:
        let mensaje = 'Hola, soy un string con comillas simples';
        let mensajeConComilla = 'Hola, soy un string con una comilla simple: \'';
        console.log(mensaje); // Hola, soy un string con comillas simples
        console.log(mensajeConComilla); // Hola, soy un string con una comilla simple: '

2. Comillas dobles (" "):
   - Se utilizan para definir cadenas de texto simples.
   - No permiten interpolación de variables o expresiones.
   - Si se necesita incluir una comilla doble dentro de la cadena, se debe escapar con 
     una barra invertida (\).
   - Ejemplo:
        let mensaje = "Hola, soy un string con comillas dobles";
        let mensajeConComilla = "Hola, soy un string con una comilla doble: \"";
        console.log(mensaje); // Hola, soy un string con comillas dobles
        console.log(mensajeConComilla); // Hola, soy un string con una comilla doble: "

3. Backticks (` `):
   - Se utilizan para definir cadenas de texto que pueden contener múltiples líneas.
   - Permiten la interpolación de variables y expresiones utilizando la sintaxis ${}.
   - No es necesario escapar las comillas simples o dobles dentro de la cadena.
   - Ejemplo:
        let nombre = "Juan";
        let mensaje = `Hola, soy ${nombre} y estoy aprendiendo JavaScript`;
        console.log(mensaje); // Hola, soy Juan y estoy aprendiendo JavaScript
        let mensajeMultilinea = `Hola,
        soy un string
        con múltiples líneas`;
        console.log(mensajeMultilinea);
        // Hola,
        // soy un string
        // con múltiples líneas
        
*/
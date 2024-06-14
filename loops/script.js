// 1. Usa el bucle for para mostrar números pares del 2 al 30.



/*2. Escribe un bucle que solicite un número mayor que 250. Si el usuario ingresa otro número debes pedirle que ingrese un valor nuevo

El bucle debe pedir un número hasta que el usuario ingrese un número mayor que 250 o lo cancele

Aquí podemos asumir que el usuario solo ingresará números.*/



/*3. Un número entero mayor que 1 es llamado primo si no puede ser dividido sin un resto por ningún número excepto 1 y él mismo.

En otras palabras, n > 1 es un primo si no puede ser divido exactamente por ningún número excepto 1 y n.

Por ejemplo, 5 es un primo, porque no puede ser divido exactamente por 2, 3 y 4.

Escribe el código que muestre números primos en el intervalo de 2 a n.

Ejemplo: Para n = 10 el resultado será 2, 3, 5, 7. */



/*4. Ingrese un número y mostrar su potencia n^2, repetir este proceso hasta que se ingrese un número negativo */


/*5. Pedir un numero hasta que se ingrese el numero 0 o negativo, luego mostrar la suma de todos los números ingresados */ 

/* Crea un objeto con algunas propiedades y utiliza un bucle for...in para imprimir cada propiedad y su valor en la consola. */

const persona = {
    nombre: 'Luis',
    edad: 30,
    ciudad: 'Madrid'
  }
  
  for (const propiedad in persona) {
    console.log(propiedad + ': ' + persona[propiedad])
  }

/*Utiliza un bucle do...while para pedir al usuario que ingrese un número positivo. Continúa pidiendo hasta que ingrese un número positivo.

Ejecutar ejercicio en consola navegador para poder usar prompt. */

let numero

do {
  numero = parseInt(prompt('Ingresa un número positivo:'))
} while (numero <= 0) 

/* for-of: Tienes un array de nombres. Utiliza un bucle for-of para imprimir cada nombre en la consola. */

let nombres = ['Anna', 'Bernat', 'Clara'];

let contador = 1;

for (let nombre of nombres) {
  console.log(`Posicion numero ${contador} de la lista ${nombre}`);
  contador++;
}

/* for-of con break: Tienes un array de números. Utiliza un bucle for-of para imprimir en la consola los números hasta encontrar el número 5, luego detén el bucle. */

let numeros = [1, 2, 3, 4, 5, 6];

for (let numero of numeros) {
  console.log(numero);
  
  if (numero === 5) {
    console.log("Se encontró el número 5. El bucle se detiene.");
    break;
  }
}

console.log("*El número 6* :,(");


/* for-of con índice: Utiliza un bucle for-of para imprimir en la consola cada elemento del array y su posición (índice). */

let nombres2 = ['Anna', 'Bernat', 'Clara'];

for (let [indice, nombre] of nombres2.entries()) {
  console.log(`Índice: ${indice}, Nombre: ${nombre}`);
}

/*6. ❗️ Factorial

Crear un programa que pida ingresar un número, y muestre su factorial. 
Este se calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 * 3 * 2 * 1 = 2. */

/*7. 🔐 Múltiples intentos

Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos.
 Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida.
 Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables. */

 /* 
 * 8. Array of Multiples
 
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 */

const arrayMultiplos = (a , b) => {
    let arr = [];
    let x = 1;
    for (let i = 1; i <= b; i++) {
      arr.push(a * x);
      x++;
    }
    return arr;
  };
  console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 6));
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



function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    for (let i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
        return true;
      }
    }
    return false;
  }
  
  function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    let suma = 0;
  
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma;
  }
  
  function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let suma = 0;
  
    for (let i = 0; i < resultadosTest.length; i++) {
      suma += resultadosTest[i];
    }
    return suma / resultadosTest.length;
  }
  
  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    let numero_mas_grande = 0;
  
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] > numero_mas_grande) {
        numero_mas_grande = numeros[i];
      }
    }
    return numero_mas_grande;
  }

  
  function cuentoElementos(arreglo) {
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    let cantidad_elementos = 0;
  
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] > 18) {
        cantidad_elementos++;
      }
    }
    return cantidad_elementos;
  }
  
  
  function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] != arreglo[i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    let array_meses = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre") {
        array_meses.push(array[i]);
      }
    }
    if (array_meses.length > 2) {
      return array_meses;
    } else {
      return "No se encontraron los meses pedidos";
    }
  }
  
  function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    nuevo_array = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 100) {
        nuevo_array.push(array[i]);
      }
    }
    return nuevo_array;
  }
  
  function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    let iteraciones = 0;
    let array = [];
    valor_de_la_suma = 0;
  
    for (let i = 0; i < 10; i++) {
      array.push(parseInt(numero) + 2);
      numero = array[i];
      valor_de_la_suma = valor_de_la_suma + array[i];
      iteraciones++;
  
      if (iteraciones == valor_de_la_suma) {
        return "Se interrumpió la ejecución";
      }
    }
    return array;
  }
  
  function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    let array = [];
  
    for (let i = 0; i < 10; i++) {
      if (i != 5) {
        array.push(numero + 2);
        numero = numero + 2;
      } else {
        continue;
      }
    }
    return array;
  }
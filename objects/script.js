// --- Ejercicios de Manipulación de Objetos en JavaScript ---

// 1. Crear objeto a partir de prototipo:
// Define una función constructora llamada `crearProducto` que tenga las propiedades `nombre`, `precio` y `cantidad`.
// Luego, utiliza `Object.create` para crear dos objetos a partir de un prototipo creado con esta función constructora.

function crearProducto(nombre, precio, cantidad) {
  return Object.create({
    nombre: nombre,
    precio: precio,
    cantidad: cantidad,
  });
}

let producto1 = crearProducto("Producto 1", 10, 5);
let producto2 = crearProducto("Producto 2", 15, 3);

// 2. Agregar propiedades a un objeto:
// Define un objeto llamado `estudiante` con las propiedades `nombre` y `edad`. Utiliza `Object.assign` para agregar las propiedades `carrera` y `universidad` a este objeto.

let estudiante = {
  nombre: "Juan",
  edad: 20,
};

Object.assign(estudiante, {
  carrera: "Ingeniería",
  universidad: "Universidad XYZ",
});

// 3. Obtener claves de un objeto:
// Crea una función llamada `obtenerClaves` que tome un objeto como argumento y devuelva un array con todas las claves del objeto utilizando `Object.keys`.

function obtenerClaves(objeto) {
  return Object.keys(objeto);
}

// 4. Obtener valores de un objeto:
// Define una función llamada `obtenerValores` que tome un objeto como argumento y devuelva un array con todos los valores del objeto utilizando `Object.values`.

function obtenerValores(objeto) {
  return Object.values(objeto);
}

// 5. Obtener pares clave-valor de un objeto:
// Crea una función llamada `obtenerParesClaveValor` que tome un objeto como argumento y devuelva un array de arrays,
// donde cada subarray contenga un par clave-valor del objeto utilizando `Object.entries`.

function obtenerParesClaveValor(objeto) {
  return Object.entries(objeto);
}

// 6. Modificar un objeto con Object.create:
// Define un objeto llamado `forma` con las propiedades `alto` y `ancho`. Luego, utiliza `Object.create` para crear un nuevo objeto
// llamado `rectangulo` con la propiedad `color`. Agrega la propiedad `area` al objeto `rectangulo` que calcule el área del rectángulo.

let forma = {
  alto: 10,
  ancho: 5,
};

let rectangulo = Object.create(forma, {
  color: { value: "azul" },
  area: {
    value: function () {
      return this.alto * this.ancho;
    },
  },
});

// 7. Agregar múltiples propiedades a un objeto:
// Define una función llamada `agregarPropiedades` que tome dos objetos como argumentos y agregue todas las propiedades del
// segundo objeto al primero utilizando `Object.assign`.

function agregarPropiedades(objeto1, objeto2) {
  Object.assign(objeto1, objeto2);
}

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

agregarPropiedades(obj1, obj2);

// 8. Eliminar propiedades de un objeto:
// Crea una función llamada `eliminarPropiedades` que tome un objeto y un array de strings como argumentos y
// elimine del objeto todas las propiedades especificadas en el array utilizando el operador de desestructuración (`...`) y la sintaxis de objetos literales.

function eliminarPropiedades(objeto, propiedades) {
  return (({ [propiedades[0]]: _, ...rest }) => rest)(objeto);
}

let objeto = { a: 1, b: 2, c: 3 };
eliminarPropiedades(objeto, ["b", "c"]);

// 9. Buscar valores en un objeto:
// Define una función llamada `buscarValor` que tome un objeto y un valor como argumentos y utilice `Object.entries`
// y `Array.prototype.find` para buscar y devolver la primera clave que coincida con ese valor en el objeto.

function buscarValor(objeto, valor) {
  return Object.entries(objeto).find(([clave, v]) => v === valor)[0];
}

buscarValor({ a: 1, b: 2, c: 3 }, 2); // Devuelve "b"

// 10. Contar ocurrencias de valores en un objeto:
// Crea una función llamada `contarOcurrencias` que tome un objeto como argumento y utilice `Object.values`,
// `Array.prototype.reduce` y `Object.entries` para contar y devolver un objeto donde las claves sean los valores
// del objeto original y los valores sean la cantidad de veces que aparecen esos valores en el objeto original.

function contarOcurrencias(objeto) {
  return Object.entries(objeto).reduce((acc, [clave, valor]) => {
    acc[valor] = (acc[valor] || 0) + 1;
    return acc;
  }, {});
}

contarOcurrencias({ a: 1, b: 2, c: 1, d: 2, e: 3 }); // Devuelve { 1: 2, 2: 2, 3: 1 }

// Exercise 2: Favorite Book
// Write a “Book” object. Your book object should have the book’s title, author, the number of pages, and whether or not you have read the book
// Declare a variable named book, and assign an object ({}) to the variable.
// Using dot notation:
// assign the title of your favorite book to a property named title,
// assign the number of pages to a property named pages,
// and assign the number of times you've read the book to a property named readCount
// Using dot notation, add a method named info to the book object that returns a string that combines the title, pages, and readCount as an informational string. Ex: The Hobbit by J.R.R Tolkien, 295 pages, read 3 times.
// After you have added the properties and method to the object, call the book.info() method inside console.log to print out the returned string.

// Volumen de caja
// Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma,
// correspondientes al ancho, alto, y largo. El volumen se calcula multiplicando entre sí dichos valores.
const size = { width: 2, length: 5, height: 1 };
getBoxVolume(size); // returns 10

// Redondeo
// Hacer una función que dado un número, devuelva un objeto con el número redondeado hacia abajo (Math.floor),
// hacia arriba (Math.ceil) y dependiendo de su punto flotante (Math.round)
round(13.3); // returns { floor: 13, ceil: 14, round: 13 }

// Unión de objetos
// Crear una función que dos objetos como argumentos, y devuelva un objeto que sea la unión de ambos.
// Es decir, debe contener las propiedades de ambos objetos. Para aquellas propiedades que están compartidas entre ambos,
// como un objeto no puede tener propiedades repetidas, se debe priorizar el objeto del primer parámetro.
const info1 = { a: 1, b: 2, c: 3 };
const info2 = { d: 4, b: 5 };
merge(info1, info2); // returns {a: 1, b: 2, c: 3, d: 4}

// Diferencia de objetos
// Igual que el anterior, pero debe devolver un objeto con las propiedades que no se repiten entre ambos objetos
const info3 = { a: 1, b: 2, c: 3 };
const info4 = { d: 4, b: 5 };
differentiate(info1, info2); // returns {a: 1, c: 3, d: 4}

// Eliminar propiedades
// Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto sin las propiedades especificadas en el array
const data = { a: 1, b: 2, c: 3 };
const props = ["c"];
removeProperties(data, props); // returns {a: 1}

// Filtrar propiedades
// Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto con solo las propiedades especificadas en el array
const data1 = { a: 1, b: 2, c: 3 };
const props1 = ["c", "b"];
filterProperties(data, props); // returns {b: 2, c: 3}

// Comprar productos
// Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos,
// teniendo como valor true si puede comprarlo o false sino
const products = { cookies: 60, chocolate: 110, soda: 120 };
const money = 115;
buyProducts(money, products); // returns { cookies: true, chocolate: true, soda: false}

// Comprar lista de productos
// Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, true si puede comprarlos a todos o false si no
const products1 = { cookies: 60, chocolate: 110, soda: 120 };
const money1 = 300;
canBuyAllProduct(money, products); // returns true

// Obtener experiencia
// Crear una función que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto con la cantidad de desafíos realizados por cada nivel,
// devuelva la cantidad total de experiencia obtenida
const score = { EASY: 10, MEDIUM: 50, HARD: 100 };
const challenges = { EASY: 3, MEDIUM: 4, HARD: 2 };
getXP(challenges, score); // returns 630 (3 * 10 + 4 * 50 + 2 * 100)

// Analizando strings
// Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene.
// Cualquier cosa que no sea un número o un espacio cuenta como una letra
getStringInfo("H3ll0 Wor1d"); // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }

// Analizando párrafos
// Crear una función que dado un string devuelva un objeto con la cantidad de letras, palabras y oraciones.
getParagraphInfo("Do. Or do not. There is no try."); // returns { LETTERS:  21, WORDS: 8, SENTENCE: 3 }

// Contar palabras
// Crear una función que dado un string devuelva un objeto con cada palabra que hay y la cantidad de veces que aparece.
// La función debe ignorar el caso ("JavaScript" y "javascript" cuentan como una misma palabra) y el objeto devuelto debe tener todas sus propiedades en minúscula
countWords("El que compra pocas capas pocas capas paga"); // returns { el: 1, que: 1, compra: 1, pocas: 2, capas: 2, paga: 1 }

// Parámetros de búsqueda
// Los parámetros de búsqueda en una URL son aquellos que vienen después del signo ? y se escriben como parametro=valor, separados por el signo &.
// Crear una función que dada una URL, devuelva un objeto con cada parámetro como clave con su respectivo valor.
parseQueryParams(
  "http://www.exercises.com?keyword=objects&language=javascript&level=intermediate"
); // returns { keyword: "objects", language: "javascript", level: "intermediate" }

// Ocurrencias en palabra
// Crear una función que dado un string y un array de letras, devuelva un objeto con la cantidad de dichas letras que hay en cada palabra.
// La función debería tener un parámetro opcional que permite definir si va a ser sensible al caso o no (si "A" y "a" cuentan como dos letras distintas o no)
findOcurrencies("Hello World", ["o", "l"]);

// Batalla
// Crear una función que acepte dos combatientes.
// Cada combatiente debe tener: nombre, vida, defensa y ataque.
// Por ronda, se atacan una vez cada uno, usando la siguiente fórmula: daño = ataque - defensaEnemigo y restando a la vida el daño generado.
// La batalla termina cuando la vida de cualquiera llegue a 0 o menos. Devolver un objeto que indique la cantidad de rondas de duración y quién ganó.
const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 };
const fighterB = { name: "Cammy", life: 50, attack: 20, defense: 20 };
fight(fighterA, fighterB); // returns { rounds: 3, winner: "Chun-Li"}s

// Búsqueda laboral
// Crear una función que dada una persona y una búsqueda de empleo, devuelva true si la persona se ajusta a dicha búsqueda. Ambos objetos tienen la siguiente estructura:
{
  experience: 1;
  languages: ["JavaScript", "HTML"];
  location: ["Buenos Aires"];
  remuneration: 40000;
}
// La persona es adecuada si:
// - tiene igual o más años de experiencia que la búsqueda
// - los lenguajes que conoce son los que contiene la búsqueda (puede conocer más, pero no afecta en nada)
// - su locación está incluida dentro de las locaciones posibles de la búsqueda
// - su remuneración (pretendida) es igual o menor a la de la búsqueda

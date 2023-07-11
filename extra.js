// Paso 1: Crear un nuevo archivo extra.js en la carpeta raíz del proyecto.

// Paso 2: Crear un array de números.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Paso 3: Utilizar destructuring y el operador spread para obtener valores específicos y el resto de los valores en un nuevo array.
const [posicion0, , posicion2, , posicion4, ...restoNumeros] = numeros;

// Paso 4: Crear un objeto literal para almacenar los datos de la mascota.
const mascota = {
  nombre: "Bony",
  tipo: "Perro",
  color: "Dorado",
  raza: "Golden retriever",
};

// Hacer uso de la desestructuración para crear variables por cada clave del objeto literal.
const { nombre, tipo, color, raza } = mascota;

// Mostrar el mensaje al usuario.
console.log(`Hola, les presento a mi mascota. Su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}.`);

const fs = require('fs');

const hotToys = fs.readFileSync('./figuras1.json', 'utf-8');
const bandai = fs.readFileSync('./figuras2.json', 'utf-8');
const starWars = fs.readFileSync('./figuras3.json', 'utd-8');


const importar = function(marca) {
  let rutaArchivo;
  
  if (marca === "Hot Toys") {
    rutaArchivo = './figuras1.json';
  } else if (marca === "Bandai") {
    rutaArchivo = './figuras2.json';
  } else if (marca === "Star Wars") {
    rutaArchivo = './figuras3.json';
  } else {
    throw new Error("Marca inválida");
  }

  const contenido = fs.readFileSync(rutaArchivo, 'utf-8');
  return JSON.parse(contenido);
};

module.exports = importar;

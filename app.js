const { importar } = require('./collectibles');
const hotToys = importar('Hot Toys');
const bandai = importar('Bandai');
const starWars = importar('Star Wars');
const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];
const collectibles = {
    figuras: unifiedCollectibles,
  };
  collectibles.listFigures = function () {
    for (const figura of this.figuras) {
      console.log(figura);
    }
  };
  collectibles.figuresByBrand = function (marca) {
    return this.figuras.filter((figura) => figura.marca === marca);
  };


  console.log("----- Listado de todas las figuras -----");
  collectibles.listFigures();
  
  console.log("----- Listado de figuras de Hot Toys -----");
  const hotToysFigures = collectibles.figuresByBrand('Hot Toys');
  console.log(hotToysFigures);
  
  console.log("----- Listado de figuras de Bandai -----");
  const bandaiFigures = collectibles.figuresByBrand('Bandai');
  console.log(bandaiFigures);
  
  console.log("----- Listado de figuras de Star Wars -----");
  const starWarsFigures = collectibles.figuresByBrand('Star Wars');
  console.log(starWarsFigures);
  

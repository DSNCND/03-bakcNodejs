const colors = require('colors');
const fs = require('fs');
const {logica} = require('./logica');


const multiplicar = (base,limite,visualizar) =>
{

const resultado = logica(base,limite)
  
if(visualizar)
{
  console.log(`=============`.rainbow)
  console.log(` Tabla del ${base}`.red)
  console.log(`=============`.rainbow)
  console.log(resultado.rainbow)
}

/*
fs.writeFileSync(`tablas/tabla-del-${base}` , resultado)
*/
const nombreArchivo = `tabla-del-${base}`
fs.writeFile(`tablas/${nombreArchivo}` , resultado, (err) => {
  if(err) throw err;
  console.log(`El archivo ${nombreArchivo} fue creado!`);
});
return resultado

}

module.exports = 
{
    multiplicar
}

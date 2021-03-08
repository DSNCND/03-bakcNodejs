const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;
const {multiplicar} = require('./multiplicador');

let base = 2;
//tiene que ser un argumento argv.base
//document.base != argv.base //tiene distinta raiz
console.log(argv);
console.log(argv.base);
console.log(argv.numero);

const resultado = multiplicar(argv.base);

console.log(resultado)



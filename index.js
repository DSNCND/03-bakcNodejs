const {multiplicar} = require('./multiplicador');
const argv = require('yargs')
    
    .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe:'Es la base de la tabla de multiplicar'})
    
    .option('l', {
    alias: 'limite',
    type: 'number',
    demandOption: false,
    default: 10,
    describe:'Es el valor limite de la tabla de multiplicar'})
    
    .option('v', {
    alias: 'visualizar',
    type: 'boolean',
    demandOption: false,
    default: false,
    describe:'Muestra la tabla en la consola',
})
.check((argv, options) => {
    if(isNaN(argv.b))
    {
        throw new Error('La base tiene que ser un numero.')
    }return true;
})
.help()
.version()
.argv;


multiplicar(argv.base, argv.limite, argv.visualizar);

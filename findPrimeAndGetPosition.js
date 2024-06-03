const Decimal = require('decimal.js');
const args = process.argv.slice(2);

const n = parseInt(args[0]);


function retornaPrimoUsandoFuncDePerimetroPrime(value) {
    return ( ( value * parseInt(42) ) - parseInt(13))
}


function pegaPosicao(value, num) {
    const perimeterBase = parseInt(59) + (num + num);
    const diameterBase = parseInt(17);
    return Math.floor(((value * diameterBase) / perimeterBase))
}

const pd = retornaPrimoUsandoFuncDePerimetroPrime(n);
const gd = pegaPosicao(pd,n);

console.log(pd, gd)
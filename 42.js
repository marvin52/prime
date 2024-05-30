const args = process.argv.slice(2);
const n = parseInt(args[0]);

function estimatePrimesInRange(a, b) {
    // Função para calcular a quantidade aproximada de números primos até n
    function pi(n) {
        if (n < 2) return 0; // Não há números primos menores que 2
        return n / Math.log(n);
    }

    // Calcular a quantidade aproximada de números primos até b
    const piB = pi(b);
    
    // Calcular a quantidade aproximada de números primos até a
    const piA = pi(a);
    
    // A quantidade de números primos no intervalo [a, b] é pi(b) - pi(a)
    const primesInRange = piB - piA;
    
    return primesInRange;
}

// Exemplo de uso:
const a = 10;
const b = 100;
const estimatedPrimes = estimatePrimesInRange(a, b);
console.log(`Quantidade aproximada de números primos no intervalo [${a}, ${b}]: ${estimatedPrimes.toFixed(2)}`);


function selecionaCandidatos(inicio, fim) {
    const resultado = [];
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0 && i % 5 !== 0) {
            resultado.push(i);
        }
    }
    return resultado;
}

const Decimal = require('decimal.js');

const numero = new Decimal(n * 42);
const pi = new Decimal(Math.PI);

const resultado3 = Math.round((n * 42) * (42 / 13))

console.log(resultado3)

// perimetro = 42 cm
// equivalente ao numero total da soma de todos
// os numeros primos utilizado, nesse caso utilizei até 13
//diametro = 13cm equivalente ao último número primo usado
//
// quando perimetro é igual à 100
// diametro(100) =  (13 * 100) / 42
// d = diametro e p = perimetro
// d = (13 * p) / 42
// p = ( d * 42 ) / 13
// 
// essa formula se extende à todos os números primos,
// colocados em ordem, como se fossem "réguas"
//
//
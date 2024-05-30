const Decimal = require('decimal.js');

function sumPrimesUpTo(prime) {
    const primes = [1, 2, 3, 5, 7, 11, 13, 17]; // Lista de primos conhecida, pode ser expandida conforme necessário
    let sum = 0;
    for (let i = 0; i < primes.length; i++) {
        if (primes[i] > prime) break;
        sum += primes[i];
    }
    return sum;
}

// Função para calcular o n-ésimo número primo usando sua função original ajustada
function approximateNthPrimeNewMetric2(n, piPrime) {
    const perimeter = sumPrimesUpTo(13); // Para manter a soma dos primeiros primos até 13, conforme especificado originalmente
    const diameter = 13;
    n = (n * piPrime) - (diameter + ((n + diameter) / (perimeter - 1)));
    return (n * Math.log(n) / piPrime);
}

// Função de contagem de números primos até x usando piPrime
function primeCountWithPiPrime(x, piPrime) {
    return x / (Math.log(x) / piPrime);
}

// Experimentando com diferentes valores de piPrime
const primeIntervals = [11, 13, 17]; // Lista dos primos a serem testados
const n = 100; // Exemplo: calcula o 100º número primo
console.log('O 100° número primo é 541! < essa informação eu estou colocando aqui para comparação!');

let approximations = [];
let piPrimes = [];

primeIntervals.forEach(prime => {
    const perimeter = sumPrimesUpTo(prime);
    const piPrime = perimeter / prime;
    piPrimes.push(piPrime);
    console.log(`Para piPrime calculado com o primo ${prime}:`);

    // Usando sua função original de aproximação, agora ajustada para usar piPrime variável
    const approximation2 = approximateNthPrimeNewMetric2(n, piPrime); // Exemplo: calcula o 100º número primo
    console.log(`A aproximação do 100º número primo usando sua função original ajustada é aproximadamente: ${approximation2}`);
    approximations.push(approximation2);
});

if (approximations.length >= 2) {
    for (let i = 1; i < approximations.length; i++) {
        const lowerBound = approximations[i - 1];
        const upperBound = approximations[i];
        const primeCountLower = primeCountWithPiPrime(lowerBound, piPrimes[i]);
        const primeCountUpper = primeCountWithPiPrime(upperBound, piPrimes[i]);
        const primeCountInRange = primeCountUpper - primeCountLower;

        console.log(`Quantidade estimada de números primos entre ${lowerBound} e ${upperBound} usando piPrime (${piPrimes[i]}): ${primeCountInRange}`);
        console.log(`primeCountLower (${lowerBound}, ${piPrimes[i]}) = ${primeCountLower}`);
        console.log(`primeCountUpper (${upperBound}, ${piPrimes[i]}) = ${primeCountUpper}`);
    }
}

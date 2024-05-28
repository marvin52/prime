const args = process.argv.slice(2);

const minPrime = parseInt(args[0]);
const maxPrime = parseInt(args[1]);

function sieveOfEratosthenes(limit) {
    let isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;
            }
        }
    }

    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

function generatePrimes(min, max) {
    let limit = max * 10; // Definindo um limite inicial maior
    let primes = [];
    let count = 0;

    while (primes.length < max) {
        primes = sieveOfEratosthenes(limit);
        limit *= 2; // Aumenta o limite exponencialmente para garantir que encontramos primos suficientes
    }

    // Filtra os números primos dentro do intervalo desejado
    return primes.filter(prime => {
        if (prime >= min && prime <= max) {
            count++;
            return true;
        }
        return false;
    });
}

console.time('Execution Time');

let primes = generatePrimes(minPrime, maxPrime);

console.timeEnd('Execution Time');

console.log(JSON.stringify(primes));
console.log(`Os números primos entre ${minPrime} e ${maxPrime} são esses:`);

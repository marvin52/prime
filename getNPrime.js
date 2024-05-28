const args = process.argv.slice(2);

const primeLimit = parseInt(args[0]);

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

function generatePrimes(primeLimit) {
    // Estimativa inicial de limite, podemos ajustar isso se necessário
    let limit = 100;
    let primes = [];

    while (primes.length < primeLimit) {
        primes = sieveOfEratosthenes(limit);
        limit *= 2; // Aumenta o limite exponencialmente para garantir que encontramos primos suficientes
    }

    return primes.slice(0, primeLimit);
}

console.time('Execution Time');

let primes = generatePrimes(primeLimit);

console.timeEnd('Execution Time');

console.log(JSON.stringify(primes));
console.log(`Os primeiros ${primeLimit} números primos são esses:`);
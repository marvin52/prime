const args = process.argv.slice(2);

const targetPrimeIndex = parseInt(args[0]);

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

function generateNthPrime(targetIndex) {
    let limit = targetIndex * 15; // Definindo um limite inicial maior
    let primes = [];
    let count = 0;

    while (count < targetIndex) {
        primes = sieveOfEratosthenes(limit);
        limit *= 2; // Aumenta o limite exponencialmente para garantir que encontramos primos suficientes
        count = primes.length;
    }

    return primes[targetIndex - 1];
}

console.time('Execution Time');

let nthPrime = generateNthPrime(targetPrimeIndex);

console.timeEnd('Execution Time');

console.log(`O ${targetPrimeIndex}º número primo é: ${nthPrime}`);

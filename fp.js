const args = process.argv.slice(2);

const targetPrimeIndex = parseInt(args[0]);

function sieveOfEratosthenes(limit) {
    const isPrime = new Uint8Array(limit + 1).fill(1);
    isPrime[0] = isPrime[1] = 0;

    for (let i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = 0;
            }
        }
    }

    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

function estimateUpperLimit(n) {
    if (n < 6) {
        return 15;
    }
    return Math.floor(n * (Math.log(n) + Math.log(Math.log(n))));
}

function generateNthPrime(targetIndex) {
    let limit = estimateUpperLimit(targetIndex);
    let primes = [];

    while (primes.length < targetIndex) {
        primes = sieveOfEratosthenes(limit);
        limit = Math.floor(limit * 1.5);
    }

    return primes[targetIndex - 1];
}

console.time('Execution Time');

const nthPrime = generateNthPrime(targetPrimeIndex);

console.timeEnd('Execution Time');

console.log(`O ${targetPrimeIndex}º número primo é: ${nthPrime}`);

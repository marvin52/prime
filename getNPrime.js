const isPrime = require('is-prime-number');
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

console.log(`Os primeiros ${primeLimit} números primos são:`);
console.log(primes);

let certo = [];
let errado = [];
console.log('Iniciando Checagem')

for(let i = 0; i < primes.length; i++){
    if(isPrime(primes[i])){
        certo.push(primes[i])
    } else {
        errado.push(primes[i])
    }
}
console.log('FIM DA CHECAGEM');
console.log('PRECISÃO DE ', (certo.length * 100) / (certo.length + errado.length ) , '%' )
console.log(JSON.stringify(errado))

console.log('TESTE DE ABRANGENCIA')
let naLista = [];
let foraDalista = [];

for(let i = 2; i <= primes[primes.length - 1]; i++){
    let temp = isPrime(i);
    if(temp){
        if(primes.includes(i)){
            naLista.push(i)
        } else {
            foraDalista.push(i)
        }

    }    
}
console.log('ABRANGÊNCIA DE ', (naLista.length * 100) / (naLista.length + foraDalista.length ) , '%' )

console.log(JSON.stringify(foraDalista))

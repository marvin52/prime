const isPrime = require('is-prime-number');
const args = process.argv.slice(2);

const iterations = parseInt(args[0]);

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

console.time('tempo');

const limit = iterations * 12 + 11; // Estimativa para encontrar primos na faixa necessária
let primes = sieveOfEratosthenes(limit);

console.timeEnd('tempo');

console.log(`\n`)
console.log(`De ${primes[0]} até ${primes[primes.length - 1]} existem ${primes.length} números primos`);
console.log(`\n`)

let certo = [];
let errado = [];
console.log('# TESTE DE PRECISÃO #')

for(let i = 0; i < primes.length - 1; i++){
    if(isPrime(primes[i])){
        certo.push(primes[i])
    } else {
        errado.push(primes[i])
    }
}
console.log('PRECISÃO DE ', (certo.length * 100) / (certo.length + errado.length ) , '%' )
//console.log(JSON.stringify(errado))
console.log(`\n`)

console.log('# TESTE DE ABRANGÊNCIA #')
let naLista = [];
let foraDalista = [];

for(let i = 2; i <= primes.length; i++){
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
console.log(`\n`)
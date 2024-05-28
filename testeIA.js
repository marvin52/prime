const isPrime = require('is-prime-number');
const args = process.argv.slice(2);

const iterations = parseInt(args[0]);

function generatePrimes(times) {
    // Base de números primos até 11, usado para cálculos
    let basePrimes = [1, 2, 3, 5, 7, 11];

    // Array para armazenar múltiplos de 12
    let multiplesOf12 = [];

    // Preenche o array com múltiplos de 12 baseados na quantidade de iterações
    for (let i = 1; i <= times; i++) {
        multiplesOf12.push(12 * i);
    }

    // Array para armazenar números primos encontrados
    let foundPrimes = [];

    // Itera sobre cada múltiplo de 12
    for (let multiple of multiplesOf12) {

        // Itera sobre cada número primo base
        for (let basePrime of basePrimes) {

            // Soma o múltiplo de 12 com o primo base
            let sum = multiple + basePrime;

            // Converte a soma para string para calcular a soma dos dígitos
            let sumString = sum.toString();

            // Calcula a soma de todos os dígitos
            let digitSum = sumString.split('').reduce((a, b) => Number(a) + Number(b), 0);

            // Verifica se o número é divisível por algum primo encontrado anteriormente
            let isDivisibleByFoundPrimes = foundPrimes.some(prime => sum % prime === 0);

            // Realiza as checagens para ver se o número deve ser adicionado à lista de números primos encontrados
            if (sum % 2 !== 0 &&
                sum % 7 !== 0 &&
                sum % 11 !== 0 &&
                !isDivisibleByFoundPrimes &&
                sumString.slice(-1) !== "5" &&
                digitSum % 3 !== 0) {

                foundPrimes.push(sum);
            }
        }
    }

    // Junta o array de primos base com os primos encontrados, removendo o 1
    let allPrimes = basePrimes.concat(foundPrimes).filter(n => n !== 1);

    return allPrimes;
}

console.time('Execution Time');

let primes = generatePrimes(iterations);

console.timeEnd('Execution Time');

console.log(`De ${primes[0]} até ${primes[primes.length - 1]} existem ${primes.length} números primos`);

let certo = [];
let errado = [];
console.log('Iniciando Checagem')

for(let i = 0; i < primes.length - 1; i++){
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

console.log(JSON.stringify(foraDalista))
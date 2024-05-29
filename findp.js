const args = process.argv.slice(2);
const p = parseInt(args[0]);

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function millerRabinTest(n, k) {
    if (n <= 1 || n === 4) return false;
    if (n <= 3) return true;

    // Encontrando r e d
    let d = n - 1;
    let r = 0;
    while (d % 2 === 0) {
        d /= 2;
        r++;
    }

    // Teste de Miller-Rabin
    for (let i = 0; i < k; i++) {
        let a = 2 + Math.floor(Math.random() * (n - 4));
        let x = Math.pow(a, d) % n;

        if (x === 1 || x === n - 1) continue;

        let prime = false;
        for (let j = 0; j < r - 1; j++) {
            x = Math.pow(x, 2) % n;
            if (x === n - 1) {
                prime = true;
                break;
            }
        }
        if (!prime) return false;
    }
    return true;
}


// //179424673

// function aproximacaoEnesimoPrimo(n) {
//     if (n < 2) {
//         throw new Error("n deve ser um número inteiro maior ou igual a 2");
//     }
//     const aproximacao = n * Math.log(n);
//     const resultado = aproximacao / 12;
//     const parteInteira = Math.floor(resultado);
//     const parteFracionaria = resultado - parteInteira;
//     //console.log(`(parteInteira * parteFracionaria * 12)/ 1`2)
//     return aproximacao;
// }

// // Exemplo de uso:

// console.log(``O valor aproximado do ${n}º número primo é: ${aproximacaoEnesimoPrimo(n)}``);






// Função para calcular a posição aproximada de um número primo X
function approximatePrimePosition(X) {
    return X / Math.log(X);
}

// Função para calcular o n-ésimo número primo usando a aproximação básica
function approximateNthPrime(n) {
    return n * Math.log(n);
}

// Função para calcular o n-ésimo número primo usando a aproximação refinada
function refinedApproximateNthPrime(n) {
    return n * (Math.log(n) + Math.log(Math.log(n)));
}

// Exemplos de uso:

// Encontrar a posição aproximada de um número primo X
let X = 541;
let position = approximatePrimePosition(X);
console.log(`A posição aproximada do número primo ${X} é ${position.toFixed(2)}`);

// Encontrar o 100º número primo usando a fórmula básica
let n = parseInt(p);
let gabarito = 104729;


let nthPrimeBasic = Math.round(approximateNthPrime(n));
//console.log(`Aproximação básica do ${n}º número primo: ${nthPrimeBasic.toFixed(2)}`);

// Encontrar o 100º número primo usando a fórmula refinada
let nthPrimeRefined = Math.round(refinedApproximateNthPrime(n));
//console.log(`Aproximação refinada do ${n}º número primo: ${nthPrimeRefined.toFixed(2)}`);

let test = Math.log(n)


let calcN = (nthPrimeBasic + ((nthPrimeRefined - nthPrimeBasic) / 2))

// let calcB = ((nthPrimeRefined) + (nthPrimeBasic - nthPrimeRefined))
calcN -= calcN % 1
// console.log(calcB)
// console.log('---------')
// console.log(gabarito)
// console.log((gabarito / 12) - gabarito / 12 % 1)
// console.log( Math.round(gabarito / 12 % 1 * 12) )
// console.log('---------')

// console.log(nthPrimeBasic / 12)
// console.log((gabarito / 12) - gabarito / 12 % 1)
// console.log( Math.round(gabarito / 12 % 1 * 12) )

// console.log(nthPrimeRefined / 12)
// console.log((gabarito / 12) - gabarito / 12 % 1)
// console.log( Math.round(gabarito / 12 % 1 * 12) )
let A = calcN / 12;
//console.log(calcN);
//console.log((A ) - (A  % 1))
//console.log( Math.round(A % 1 * 12) )

let calc_A = (A ) - (A  % 1)
let calc_B =  Math.round(A % 1 * 12) 

switch(true){
    case calc_B == 9:
        calc_A += 1;
        calc_B = 1;
    break;
}
console.log(gabarito)

console.log(calc_A * 12 + calc_B)
console.log(approximatePrimePosition(calc_A * 12 + calc_B))
//nthPrimeBasic, nthPrimeRefined
console.log(approximatePrimePosition(nthPrimeBasic))
console.log(approximatePrimePosition(nthPrimeRefined))
console.log(approximatePrimePosition(gabarito))

//console.log(gabarito - (calc_A * 12 + calc_B) )
//console.log(isPrime(calc_A * 12 + calc_B) && millerRabinTest(calc_A * 12 + calc_B, 10))
//isPrime(numberToTest) && millerRabinTest(numberToTest, iterations)



// let tempM = calcN / 12;
// let tempB = (tempM - (tempM % 1)) * 12 

// console.log( (tempB + (nthPrimeRefined - tempB)) );
//console.log(test)
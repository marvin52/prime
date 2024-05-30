const args = process.argv.slice(2);
const n = parseInt(args[0]);


const { exec } = require('child_process');
const { findSourceMap } = require('module');

function resultado(numero) {
    return new Promise((resolve, reject) => {
        exec(`python getP.py ${numero}`, (error, stdout, stderr) => {
            if (error) {
                reject(`Erro ao executar o comando: ${error}`);
                return;
            }
            if (stderr) {
                reject(`Erro de saída padrão: ${stderr}`);
                return;
            }

            // Valor retornado pelo comando Python
            const pythonResponse = stdout.trim();
            resolve(pythonResponse);
        });
    });
}





function ehPrimo(n) {
    if (n < 1) return false;
    if (n === 1) return true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function verificarNumero(X) {
    // Obter o resto da divisão de X por 12
    let resto = X % 12;

    // Verificar se o resto é um número primo menor ou igual a 11
    if(X === 15485863){
        console.log(">>>>>>>>>> ", resto, !ehPrimo(resto) || resto > 11)
    }
    if (!ehPrimo(resto) || resto > 11) {
        return false;
    }

    // Se o resto for um número primo, verificar se X é divisível por 12
    return (X - resto) % 12 === 0;
}

// // Exemplos de uso
// console.log(verificarNumero(541));  // Deve retornar true, pois 541 = 45 * 12 + 1, e 1 é primo
// console.log(verificarNumero(542));  // Deve retornar false, pois 542 = 45 * 12 + 2, e 2 não é primo













function calcula(num){
    // Função para calcular o n-ésimo número primo usando a aproximação básica
    function approximateNthPrime(num) {
        return Math.floor(num * Math.log(num));
    }

    // Função para calcular o n-ésimo número primo usando a aproximação refinada
    function refinedApproximateNthPrime(num) {
        return num * (Math.log(num) + Math.log(Math.log(num)));
    }

    // Função para encontrar o n-ésimo número primo usando aproximação
    function approximateAndFindNthPrime(num) {
        const approx = approximateNthPrime(num);
        const refinedApprox = refinedApproximateNthPrime(num);
        return Math.floor((approx + refinedApprox) / 2);
    }

    const fatorVar = 2;
    const fator = num / fatorVar + num / (num.toString().length - 1);

    let a = approximateNthPrime(num);
    let b = refinedApproximateNthPrime(num);

    const nthPrimeLow = approximateAndFindNthPrime(num - fator);
    const nthPrime = approximateAndFindNthPrime(num);
    const nthPrimeHigh = approximateAndFindNthPrime(num + fator);

    const ko = (nthPrimeHigh - nthPrime) - (nthPrime - nthPrimeLow);

    // Calcula o número aproximado com o fator de ajuste
    const numeroAproximado = nthPrime + ko;
    return {
        menorA: a,
        maiorA: b,
        menorB: nthPrime,
        maiorB: isNaN(numeroAproximado)? b : numeroAproximado
    }
}
function contarParesEMultiplosDe5(x) {
    let totalPares = Math.floor(x / 2);
    let totalMultiplosDe5 = Math.floor(x / 5);
    let totalMultiplosDe10 = Math.floor(x / 10);

    // Soma de pares e múltiplos de 5, subtraindo múltiplos de 10
    let total = totalPares + (totalMultiplosDe5 - totalMultiplosDe10);

    return total;
}

function encontrarDescartaveis(min, max) {
    let diferenca = max - min;
    let numerosDescartaveis = [];
    let numerosCandidatos = [];

    // Calcular o número total de números descartáveis
    let totalDescartaveis = Math.floor(diferenca / 2) + (Math.floor(diferenca / 5) - Math.floor(diferenca / 10));

    // Adicionar números descartáveis ao array
    for (let i = 1; i <= totalDescartaveis; i++) {
        let numero = min + i;
        if (numero % 2 === 0 || numero % 5 === 0) {
            numerosDescartaveis.push(numero);
        } else {
            if(verificarNumero(numero)){
                let digitSum = numero.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);
                if(digitSum % 3 !== 0){
                    numerosCandidatos.push(numero);
                }
            }
        }
    }

    return numerosCandidatos;
}

let calcA = calcula(n)
resultado(n)
    .then(_ => {
        let gabarito = parseInt(_)
        console.log(gabarito)
        console.log(calcA)
        
        let menorProximo = calcA.menorA > calcA.menorB ? calcA.menorA : calcA.menorB;
        let maiorProximo = calcA.maiorA < calcA.maiorB ? calcA.maiorA : calcA.maiorB;
        let diffProximos = maiorProximo - menorProximo
        //let qtDeCandidatos = diffProximos - contarParesEMultiplosDe5(diffProximos)
        let AGORAVAI = encontrarDescartaveis(menorProximo, maiorProximo)

        console.log(menorProximo, maiorProximo, ' = ', diffProximos, ', sobra um total de ', AGORAVAI.length)
        
        console.log(`\n\n`, AGORAVAI.indexOf(gabarito))

        //console.log(`\n\n`, JSON.stringify(AGORAVAI))

    })


//console.log(`O número aproximado é ${calcA}`);
//179415469

//                3.14
//                3.15
//                3 0.01
//                  0,01 / 12  *  2
//                3 + x = pi
//                0,01 = 10⁻2
//
//                        10 ^ -2
//                        _____
//                          12
//
//            0.01 / 12          (((2 * (2 + 3)) ^ - 2)/ (2 * 2 * 3)) * 2
//            0.14        ((2 * 3 * 2) + 2) * ((2 * (2 + 3)) ^ - (2))
/////
/////       3 + (   ((2 * 3 * 2) + 2) * ((2 * (2 + 3)) ^ - (2))      +        ((((2 * (2 + 3)) ^ - 2)/ (2 * 2 * 3)) * 2)          )
/////
/////
////
//        F(A) =  A + ((((A - 1) * A * (A - 1)) + (A - 1)) * (((A - 1) * ((A - 1) + A)) ^ - ((A - 1)))      +        (((((A - 1) * ((A - 1) + A)) ^ - (A - 1))/ ((A - 1) * (A - 1) * A)) * (A - 1)))
//
//
// Explicação:
// 1. A função `approximateAndFindNthPrime` agora retorna uma média das aproximações básica e refinada para maior precisão.
// 2. Reduzimos as chamadas desnecessárias às funções de aproximação.
// 3. A variável `ko` calcula a diferença de forma eficiente, e `numeroAproximado` aplica o ajuste para obter um número mais preciso.


/*

como fazer para saber se um numero X, dividido por 12, é igual à 12 vezes numero n mais um número primo?

por exemplo, o número 541
dividido por 12 dá
aproximadamente 45,083333333

se dividirmos a parte inteira da parte decimal, fica
parte Inteira 
45

parte decimal
0,08333333...

se você multiplicar 45 x 12
vai dar 540

e se você multiplicar 0,0833333... x 12
vai dar igual à 1

quer dizer que 
541 = (45 x 12) + 1

aí que está a questão, se a parte decimal
multiplicada por 12 for igual à um número primo
menor ou igual à 11

então a função deve retornar true
caso contrário false

*/
const args = process.argv.slice(2);
const n = parseInt(args[0]);


const { exec } = require('child_process');

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

const nthPrimeLow = approximateAndFindNthPrime(num - fator);
const nthPrime = approximateAndFindNthPrime(num);
const nthPrimeHigh = approximateAndFindNthPrime(num + fator);

const ko = (nthPrimeHigh - nthPrime) - (nthPrime - nthPrimeLow);

// Calcula o número aproximado com o fator de ajuste
const numeroAproximado = nthPrime + ko;
    return numeroAproximado;
}

let calcA = calcula(n)



function F(A) {
    let result = A + ((((A - 1) * A * (A - 1)) + (A - 1)) * Math.pow(((A - 1) * ((A - 1) + A)), - (A - 1)) + (((Math.pow(((A - 1) * ((A - 1) + A)), - (A - 1))) / ((A - 1) * (A - 1) * A)) * (A - 1)));
    return result;
}

console.log(F(3))


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

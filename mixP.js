const args = process.argv.slice(2);
const n = parseInt(args[0]);

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
console.log(`O número aproximado é ${calcA}`);
179415469

// Explicação:
// 1. A função `approximateAndFindNthPrime` agora retorna uma média das aproximações básica e refinada para maior precisão.
// 2. Reduzimos as chamadas desnecessárias às funções de aproximação.
// 3. A variável `ko` calcula a diferença de forma eficiente, e `numeroAproximado` aplica o ajuste para obter um número mais preciso.

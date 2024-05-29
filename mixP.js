const args = process.argv.slice(2);
const n = parseInt(args[0]);

// Função para calcular o n-ésimo número primo usando a aproximação básica
function approximateNthPrime(n) {
    return Math.floor(n * Math.log(n));
}

// Função para calcular o n-ésimo número primo usando a aproximação refinada
function refinedApproximateNthPrime(n) {
    return n * (Math.log(n) + Math.log(Math.log(n)));
}

// Função para encontrar o n-ésimo número primo usando aproximação
function approximateAndFindNthPrime(n) {
    const approx = approximateNthPrime(n);
    const refinedApprox = refinedApproximateNthPrime(n);
    return Math.floor((approx + refinedApprox) / 2);
}

const fatorVar = 2;
const fator = n / fatorVar + n / (fatorVar ** 3);

const nthPrimeLow = approximateAndFindNthPrime(n - fator);
const nthPrime = approximateAndFindNthPrime(n);
const nthPrimeHigh = approximateAndFindNthPrime(n + fator);

const ko = (nthPrimeHigh - nthPrime) - (nthPrime - nthPrimeLow);

// Calcula o número aproximado com o fator de ajuste
const numeroAproximado = nthPrime + ko;

console.log(`O número aproximado é ${numeroAproximado}`);

// Explicação:
// 1. A função `approximateAndFindNthPrime` agora retorna uma média das aproximações básica e refinada para maior precisão.
// 2. Reduzimos as chamadas desnecessárias às funções de aproximação.
// 3. A variável `ko` calcula a diferença de forma eficiente, e `numeroAproximado` aplica o ajuste para obter um número mais preciso.

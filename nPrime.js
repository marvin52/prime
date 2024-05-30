const Decimal = require('decimal.js');
const args = process.argv.slice(2);
const t = args[0];

// Função para calcular o n-ésimo número primo usando a aproximação básica com o piPrime
function approximateNthPrimeNewMetric(n) {
    const perimeter = 42;
    const diameter = 13;
    const piPrime = (perimeter - 1) / diameter;
    n = (n * piPrime) - (diameter + ( (n + diameter )  ) / (perimeter - 1))
    return (n * Math.log(n) / piPrime);
}

// Função para calcular o n-ésimo número primo usando a aproximação refinada com o piPrime
function refinedApproximateNthPrimeNewMetric(n) {
    const perimeter = 42;
    const diameter = 13;
    const piPrime = perimeter / diameter;
    n = (n * piPrime) - diameter
    return n * (Math.log(n) + Math.log(Math.log(n))) / piPrime;
}

// Testando as funções
const nthPrime = parseFloat(t); // Altere para o número do primo que deseja aproximar

// Usando a aproximação básica com o piPrime
const approximationBasicNewMetric = approximateNthPrimeNewMetric(nthPrime);
console.log(`A aproximação básica do ${nthPrime}º número primo usando a nova métrica é aproximadamente: ${approximationBasicNewMetric}`);

// Usando a aproximação refinada com o piPrime
// const approximationRefinedNewMetric = refinedApproximateNthPrimeNewMetric(nthPrime);
// console.log(`A aproximação refinada do ${nthPrime}º número primo usando a nova métrica é aproximadamente: ${approximationRefinedNewMetric}`);

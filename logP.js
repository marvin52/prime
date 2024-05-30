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
let X = 1000;
let position = approximatePrimePosition(X);
//console.log(`A posição aproximada do número primo ${X} é ${position.toFixed(2)}`);

// Encontrar o 100º número primo usando a fórmula básica
let n = 100;
let nthPrimeBasic = approximateNthPrime(n);
//console.log(`Aproximação básica do ${n}º número primo: ${nthPrimeBasic.toFixed(2)}`);

// Encontrar o 100º número primo usando a fórmula refinada
let nthPrimeRefined = refinedApproximateNthPrime(n);
//console.log(`Aproximação refinada do ${n}º número primo: ${nthPrimeRefined.toFixed(2)}`);

function approximations(n) {
    // Função para calcular o enésimo número primo aproximado
    function primeApproxSimple(n) {
        return n * Math.log(n);
    }

    function primeApproxRefined(n) {
        return n * (Math.log(n) + Math.log(Math.log(n)));
    }

    // Função para calcular a posição aproximada do número primo
    function positionApproxSimple(p) {
        return p / Math.log(p);
    }

    function positionApproxRefined(p) {
        return p / (Math.log(p) - 1);
    }

    // Calculando as aproximações simples e refinadas para o enésimo número primo
    let pSimple = primeApproxSimple(n);
    let pRefined = primeApproxRefined(n);

    // Calculando as posições aproximadas para os valores obtidos
    let nSimple = positionApproxSimple(pSimple);
    let nRefined = positionApproxRefined(pRefined);

    return {
        pSimple: pSimple,
        pRefined: pRefined,
        nSimple: nSimple,
        nRefined: nRefined
    };
}

// Testando a função com n = 100
let results = approximations(1000);
console.log(`Aproximação simples do 100º primo: ${results.pSimple}`);
console.log(`Aproximação refinada do 100º primo: ${results.pRefined}`);
console.log(`Posição aproximada usando a aproximação simples: ${results.nSimple}`);
console.log(`Posição aproximada usando a aproximação refinada: ${results.nRefined}`);
console.log('---------------------------------------------')
let results2 = approximations(parseInt(results.nSimple));
console.log(`Aproximação simples do 100º primo: ${results2.pSimple}`);
console.log(`Aproximação refinada do 100º primo: ${results2.pRefined}`);
console.log(`Posição aproximada usando a aproximação simples: ${results2.nSimple}`);
console.log(`Posição aproximada usando a aproximação refinada: ${results2.nRefined}`);

console.log('---------------------------------------------')
let results3 = approximations(parseInt(results.nRefined));
console.log(`Aproximação simples do 100º primo: ${results3.pSimple}`);
console.log(`Aproximação refinada do 100º primo: ${results3.pRefined}`);
console.log(`Posição aproximada usando a aproximação simples: ${results3.nSimple}`);
console.log(`Posição aproximada usando a aproximação refinada: ${results3.nRefined}`);
// console.log('---------------------------------------------')
// let results3 = approximations(parseInt(results2.nSimple));
// console.log(`Aproximação simples do 100º primo: ${results3.pSimple}`);
// console.log(`Aproximação refinada do 100º primo: ${results3.pRefined}`);
// console.log(`Posição aproximada usando a aproximação simples: ${results3.nSimple}`);
// console.log(`Posição aproximada usando a aproximação refinada: ${results3.nRefined}`);

// console.log('---------------------------------------------')
// let results4 = approximations(parseInt(results3.nRefined));
// console.log(`Aproximação simples do 100º primo: ${results4.pSimple}`);
// console.log(`Aproximação refinada do 100º primo: ${results4.pRefined}`);
// console.log(`Posição aproximada usando a aproximação simples: ${results4.nSimple}`);
// console.log(`Posição aproximada usando a aproximação refinada: ${results4.nRefined}`);
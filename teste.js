const isPrime = require('is-prime-number');
const args = process.argv.slice(2);

const q = args[0];

function geraPrimos12(quantidadeDeIteracoes){
    let numerosPrimosBase = [1, 2, 3, 5, 7, 11]
    let arrayNumerosPrimosMultiplicadoPor12 = [];
    for(let i = 1; i <= quantidadeDeIteracoes; i++){
            arrayNumerosPrimosMultiplicadoPor12.push(12 * i);
    }
    let arrayDeNumerosPrimosEncontrados = [];
    for(numeroPrimoMultiplicadoPor12 of arrayNumerosPrimosMultiplicadoPor12){
        for(numeroPrimo of numerosPrimosBase){
            let somaNPrimoMultiplicadoPor12ComNumeroPrimo = numeroPrimoMultiplicadoPor12 + numeroPrimo;
            let resultadoDaSomaEmString = somaNPrimoMultiplicadoPor12ComNumeroPrimo.toString();
            let somaTodosOsDigitos = parseInt(resultadoDaSomaEmString.split('').reduce((a,b) => Number(a)+Number(b)));


            let primoEncontradoNaSomaEDivisivelPorAlgumPrimoJaEncontrado= false;
            for(primeNumber of arrayDeNumerosPrimosEncontrados){
                if(somaNPrimoMultiplicadoPor12ComNumeroPrimo % primeNumber === 0){
                    primoEncontradoNaSomaEDivisivelPorAlgumPrimoJaEncontrado= true;
                    break;
                }
            }
            switch(true){
                case
                somaNPrimoMultiplicadoPor12ComNumeroPrimo % 2 !== 0 &&
                somaNPrimoMultiplicadoPor12ComNumeroPrimo % 7 !== 0 &&
                somaNPrimoMultiplicadoPor12ComNumeroPrimo % 11 !== 0 &&
                primoEncontradoNaSomaEDivisivelPorAlgumPrimoJaEncontrado=== false &&
                resultadoDaSomaEmString.slice(-1) !== "5" &&
                somaTodosOsDigitos % 3 !== 0:
                    arrayDeNumerosPrimosEncontrados.push(somaNPrimoMultiplicadoPor12ComNumeroPrimo)
                break;
            }
        }
    }

    let UneArrayDePrimosBaseComArrayDePrimosEncontrados = numerosPrimosBase.concat(arrayDeNumerosPrimosEncontrados)

    let RemovePrimeiroItemDoArrayPoisEleEIgualA1EUtilizadoApenasParaOsCalculos = UneArrayDePrimosBaseComArrayDePrimosEncontrados.shift();

    return UneArrayDePrimosBaseComArrayDePrimosEncontrados;
}



console.time('CONTA');

let primos = geraPrimos12(parseFloat(q));

console.timeEnd('CONTA');

console.log(`De ${primos[0] - 1} até ${primos[primos.length - 1] + 1} existem ${primos.length} números primos`)
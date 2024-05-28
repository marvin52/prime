const isPrime = require('is-prime-number');
const args = process.argv.slice(2);

//const command_ = parseFloat(args[0]);
const q = args[0];

function agoraVai(){

    let num = 1;
    let arrayPrimos = [1];

    let pp = num + num;
    arrayPrimos.push(pp);

    let teste = (arr) => {
        for(i in arr){
            if(i > 0 && !arr.includes(arr[i] + arr[i - 1])){
                if((arr[i] + arr[i - 1]) % (arr[1])){
                    //console.log(arr[1], (arr[i] + arr[i - 1]) % (arr[1]) , arr[i] + arr[i - 1])
                    arr.push(arr[i] + arr[i - 1])
                } else if((arr[i] + arr[i - 2]) % (arr[1]) && !arr.includes(arr[i] + arr[i - 2])){
                    //console.log(arr[1], (arr[i] + arr[i - 1]) % (arr[1]) , arr[i] + arr[i - 1])
                    arr.push(arr[i] + arr[i - 2])
                }
            }
        }
        return arr;
    }

    arrayPrimos = teste(arrayPrimos)
    arrayPrimos = teste(arrayPrimos)
    arrayPrimos = teste(arrayPrimos)
    arrayPrimos = teste(arrayPrimos)
    


    console.log(arrayPrimos)

}

//agoraVai()

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
// let correct = 0;
// let wrong = 0;
// for(primo of primos){
//     if(isPrime(primo)){
//         correct++;
//     } else {
//         wrong++;
//     }
// }
 //console.log(JSON.stringify(primos))

// console.log('--------------------------------------------------------')
// console.log(wrong === 0? `100%`: `${wrong} errors`)

console.log(`De ${primos[0] - 1} até ${primos[primos.length - 1] + 1} existem ${primos.length} números primos`)
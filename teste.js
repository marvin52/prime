const isPrime = require('is-prime-number');
const args = process.argv.slice(2);

const q = args[0];

function geraPrimos12(quantidadeDeIteracoes){
    // Base de números primos encontrados até 12,
    // o 1 é importante para os cálculos,
    // mas depois ele é removido da lista de números primo final.
    let numerosPrimosBase = [1, 2, 3, 5, 7, 11]

    // Uma lista que vai ser preenchida com todos os números primos
    // multiplicado por 12
    let arrayNumerosPrimosMultiplicadoPor12 = [];

    // Pega a quantidade de iterações desejadas
    // multiplica por 12
    // adiciona à lista com os primos multiplicados por 12
    // Por exemplo se o número de iterações é 3,
    // então ele adiciona à lista (1)*12, (2)*12, (3)*12
    for(let i = 1; i <= quantidadeDeIteracoes; i++){
            arrayNumerosPrimosMultiplicadoPor12.push(12 * i);
    }

    // Lista de números Primos encontrados
    let arrayDeNumerosPrimosEncontrados = [];

    // Para cada numero da lista de multiplos de 12 ele faz um loop
    for(numeroPrimoMultiplicadoPor12 of arrayNumerosPrimosMultiplicadoPor12){

        // Faz outro loop com a lista de numeros primos base
        for(numeroPrimo of numerosPrimosBase){

            // Nesse momento estamos dentro de 2 loops, ou seja:
            // estamos dentro do primeiro loop
            // que caminha pela lista de números multiplos de 12,
            // baseado no número de iterações definido no parametro inicial da função

            // E estamos dentro do segundo loop também.
            // Que pega cada numero multiplo de 12
            // e soma com cada numero da lista de numeros primos base

            // aqui eu somo o numero multiplo de 12 encontrado no primeiro loop
            // com o numero primo base encontrado no segundo loop
            let somaNPrimoMultiplicadoPor12ComNumeroPrimo = numeroPrimoMultiplicadoPor12 + numeroPrimo;
            
            // aqui eu converto o resultado anterior
            // para tipo string para fins de calculo
            let resultadoDaSomaEmString = somaNPrimoMultiplicadoPor12ComNumeroPrimo.toString();
            
            // aqui eu somo todos os digitos do resultado
            // da soma do numero multiplo de 12 com o numero primo base
            // se o resultado da soma de todos os dígitos for divisível por 3
            // então o número não é primo
            let somaTodosOsDigitos = parseInt(resultadoDaSomaEmString.split('').reduce((a,b) => Number(a)+Number(b)));

            // aqui eu verifico se o numero encontrado
            // é divísivel por algum numero primo já encontrado
            // aqui eu crio uma variavel com valor default de false
            // para checar depois se o numero encontrado
            // é divísivel por algum primo anterior
            let primoEncontradoNaSomaEDivisivelPorAlgumPrimoJaEncontrado= false;

            // aqui eu faço uma iteração na lista de numero primos
            // já encontrados, para ver se o numero testado atual é divísivel
            // por algum numero primo já encontrado
            // caso seja divisível, logo ele não é primo
            // e é descartado
            for(primeNumber of arrayDeNumerosPrimosEncontrados){
                // aqui eu checo se o numero é divísivel
                // por algum numero primo já encontrado anteriormente
                if(somaNPrimoMultiplicadoPor12ComNumeroPrimo % primeNumber === 0){
                    // Caso ele seja divísivel por algum primo já encontado
                    // essa váriavel é definida como true e o loop para com break
                    // essa variavel diz que o numero encontrado é divísivel
                    // por algum número primo já encontrado
                    // então ele deve ser descartado
                    primoEncontradoNaSomaEDivisivelPorAlgumPrimoJaEncontrado= true;

                    // encerra o loop, pois o numero não é primo
                    // pois é divisível por outro primo já encontrado
                    break;
                }
            }

            // Realiza as checagens para ver se o número
            // deve ser adicionado à lista de números primos encontrados
            switch(true){
                case
                //Checa se a soma do número primo multiplicado por 12 é divísivel por 2
                somaNPrimoMultiplicadoPor12ComNumeroPrimo % 2 !== 0 &&
                 //Checa se a soma do número primo multiplicado por 12 é divísivel por 7
                somaNPrimoMultiplicadoPor12ComNumeroPrimo % 7 !== 0 &&
                 //Checa se a soma do número primo multiplicado por 12 é divísivel por 11
                somaNPrimoMultiplicadoPor12ComNumeroPrimo % 11 !== 0 &&
                primoEncontradoNaSomaEDivisivelPorAlgumPrimoJaEncontrado=== false &&
                //Checa se o ultímo dígito do numero é 5, checa se o número é divível por 5
                resultadoDaSomaEmString.slice(-1) !== "5" &&
                 //Checa se a soma de todos os dígitos é divisível por 3
                somaTodosOsDigitos % 3 !== 0:
                    //Se todas as checagens forem falsas, então o número encontrado é primo e é adicionado à lista de primos.
                    arrayDeNumerosPrimosEncontrados.push(somaNPrimoMultiplicadoPor12ComNumeroPrimo)
                break;
            }
        }
    }

    // Junta o array de primos base, com o array de primos encontrados
    // formando assim uma lista completa de primos encontrados
    // dentro da quantidade de iterações definidas
    let UneArrayDePrimosBaseComArrayDePrimosEncontrados = numerosPrimosBase.concat(arrayDeNumerosPrimosEncontrados)

    //remove o primeiro numero da lista, o 1, pois ele não é primo, é utilizado apenas para os cálculos
    let RemovePrimeiroItemDoArrayPoisEleEIgualA1EUtilizadoApenasParaOsCalculos = UneArrayDePrimosBaseComArrayDePrimosEncontrados.shift();

    // retorna o array final com apenas os numeros primos encontrados
    // dentro da quantidade de iterações estipulada
    return UneArrayDePrimosBaseComArrayDePrimosEncontrados;
}



console.time('CONTA');

let primos = geraPrimos12(parseFloat(q));

console.timeEnd('CONTA');

console.log(`De ${primos[0] - 1} até ${primos[primos.length - 1] + 1} existem ${primos.length} números primos`)
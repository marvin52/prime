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
    // if(X === 15485863){
    //     console.log(">>>>>>>>>> ", resto, !ehPrimo(resto) || resto > 11)
    // }
    if (!ehPrimo(resto) || resto > 11) {
        return false;
    }

    // Se o resto for um número primo, verificar se X é divisível por 12
    return (X - resto) % 12 === 0;
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
let calcAm = calcula(n - 1)
let calcAM = calcula(n + 1)
resultado(n)
    .then(_ => {
        let gabarito = parseInt(_)
        console.log(gabarito)
        console.log(calcA)
        console.log(calcAM.menorA, calcAm.maiorA)
        
        let menorProximo = calcA.menorA > calcA.menorB ? calcA.menorA : calcA.menorB;
        let maiorProximo = calcA.maiorA < calcA.maiorB ? calcA.maiorA : calcA.maiorB;
        let diffProximos = maiorProximo - menorProximo

        
        let AGORAVAI = encontrarDescartaveis(menorProximo, maiorProximo)

        console.log(menorProximo, maiorProximo, ' = ', diffProximos, ', sobra um total de ', AGORAVAI.length)
        
        console.log(`\n\n`, AGORAVAI.indexOf(gabarito))


    })








































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
    let n_ = 100;
    let nthPrimeBasic = approximateNthPrime(n_);
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
    // let results = approximations(1000);
    // console.log(`Aproximação simples do 100º primo: ${results.pSimple}`);
    // console.log(`Aproximação refinada do 100º primo: ${results.pRefined}`);
    // console.log(`Posição aproximada usando a aproximação simples: ${results.nSimple}`);
    // console.log(`Posição aproximada usando a aproximação refinada: ${results.nRefined}`);
    // console.log('---------------------------------------------')
    // let results2 = approximations(parseInt(results.nSimple));
    // console.log(`Aproximação simples do 100º primo: ${results2.pSimple}`);
    // console.log(`Aproximação refinada do 100º primo: ${results2.pRefined}`);
    // console.log(`Posição aproximada usando a aproximação simples: ${results2.nSimple}`);
    // console.log(`Posição aproximada usando a aproximação refinada: ${results2.nRefined}`);
    
    // console.log('---------------------------------------------')
    // let results3 = approximations(parseInt(results.nRefined));
    // console.log(`Aproximação simples do 100º primo: ${results3.pSimple}`);
    // console.log(`Aproximação refinada do 100º primo: ${results3.pRefined}`);
    // console.log(`Posição aproximada usando a aproximação simples: ${results3.nSimple}`);
    // console.log(`Posição aproximada usando a aproximação refinada: ${results3.nRefined}`);
    
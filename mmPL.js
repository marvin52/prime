const args = process.argv.slice(2);
const n = parseInt(args[0]);

function iteraComDoze(num) {
    function isSquareRootInteger(num) {
        const sqrt = Math.sqrt(num);
        return Number.isInteger(sqrt);
    }

    function isPrimo(numero) {
        if (numero <= 1) return false; // Números menores ou iguais a 1 não são primos
    
        if (numero <= 3) return true; // 2 e 3 são primos
    
        // Verificar se é divisível por 2 ou 3
        if (numero % 2 === 0 || numero % 3 === 0) return false;
    
        // Verificar divisibilidade por números ímpares a partir de 5 até a raiz quadrada do número
        for (let i = 5; i * i <= numero; i += 6) {
            if (numero % i === 0 || numero % (i + 2) === 0) {
                return false;
            }
        }
        
        return true;
    }
    

    let primosBase = [1, 2, 3];
    let baseAppend = [];

    for(let it = 1; it <= num; it++){
        for(let i = 0; i <= primosBase.length - 1; i++){
            let t = primosBase[primosBase.length - 1] + 1;
            //console.log(t, i)
            let calc = t + primosBase[i];
            let sumString = calc.toString();
            let digitSum = sumString.split('').reduce((a, b) => Number(a) + Number(b), 0);

            if(
                calc % 2 !== 0 &&
                ( calc === 5 || sumString.slice(-1) !== "5" ) &&
                digitSum % 3 !== 0 &&
                !isSquareRootInteger(calc) &&
                isPrimo(calc)
            ){
                if (!primosBase.includes(calc)) baseAppend.push(calc);
            }
        }
        primosBase = primosBase.concat(baseAppend)
    }
    
    return [...new Set(primosBase)]; ;
}

let resultados = iteraComDoze(
    parseInt(n)
    || 1
);

console.log(
    JSON.stringify(resultados),
    `\n`,
    `${resultados.length} números primos encontrados em ${n} iterações!`
)



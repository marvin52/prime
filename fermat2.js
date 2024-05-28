
try{

// Acessa os argumentos passados na linha de comando
const args = process.argv.slice(2);

// Converte os argumentos para números
const num = parseFloat(args[0]);
//const num2 = parseFloat(args[1]);

// function isPrime(number) {
//     let start = 2n;
//     while (start <= Math.sqrt(Number(BigInt(number)))) if (BigInt(number) % start++ < 1n) return false;
//     return BigInt(number) > 1n;
// }

function sqrt(value) {
    if (value < 0n) {
        throw 'square root of negative numbers is not supported'
    }

    if (value < 2n) {
        return value;
    }

    function newtonIteration(n, x0) {
        const x1 = ((n / x0) + x0) >> 1n;
        if (x0 === x1 || x0 === (x1 - 1n)) {
            return x0;
        }
        return newtonIteration(n, x1);
    }

    return newtonIteration(value, 1n);
}

function isPrime(number) {
    let n = BigInt(number)
    //console.log(n);
    if (n <= 1n) return false;
    if (n <= 3n) return true;
    if (n % 2n === 0n || n % 3n === 0n) return false;
    
    for (let i = 5n; i * i <= n; i += 6n) {
        if (n % i === 0n || n % (i + 2n) === 0n) return false;
    }
    
    return true;
}

let primeIs = (number, cond = false) => {
    if(typeof number === undefined) return false;
    let n = cond ? number : BigInt(number);
    // if(!cond){
    //     let n = BigInt(number)
    // } else {
    //     let n = number
    // }

    if (n <= 1n) return false;
    if (n <= 3n) return true;
    if (n % 2n === 0n || n % 3n === 0n) return false;
    
    for (let i = 5n; i * i <= n; i += 6n) {
        if (n % i === 0n || n % (i + 2n) === 0n){
            return false;
        }
    }
    
    return n;
}


function getN(N){
    let _N = null;
    let c = BigInt(N);
    //console.dir(BigInt(N))
    if(c == 1n || c == 2n){
        _N = c;
    } else {
        _N = c - 1n;
    }
    return BigInt(N);
    return _N;
}

let fSi = 0;
let fSr = [];

function fermatS(N){
    //console.log(N)
    //let fSr = [];
    if(fSi === 0){
        fSr = [];
    }

    let getN_ = (N) => {
        let _N = null;
        let c = BigInt(N);
        //console.dir(BigInt(N))
        if(c == 1n || c == 2n){
            _N = c;
        } else {
            _N = c - 1n;
        }
        
        return _N;
    }
    
    let _N = getN_(N)
    //console.log(( _N ** 2n ) + 1n)
    let resC = (( _N ** 2n ) + 1n);
    //console.log(N, _N, resC, primeIs(resC))
    if(primeIs(resC, true) && resC !== N){
        fSr.push(resC)
        //console.log(resC);
        //return fSr;
        fSi += 1;
        return fermatS(resC);
    } else {
        fSi = 0;
        //fSr = [];
        return {results: fSr};
    }
}



function fermatM(N){
    let _N = getN(N);

    let testeA = ((((3n * _N + 1n) * (2n * _N)) - (2n * _N)) ** 2n) +1n;
    //let testeA = ( partA * partA ) + 1n


    let testeB = ( 4n * _N ) ** 2n + 1n;
    //let testeB = (partB * partB) +  1n;


    let testeC = (( 8n * _N ) - (2n * _N)) ** 2n + 1n;
    //let testeC = (partC * partC) +  1n;

    let testeD = (_N - 1n) ** 2n  + 1n

    let partE =  _N ** 2n - ((_N - 1n ) / 2n)
    let partEb =  _N ** 2n - ((_N - 1n ) / 2n) + 1n
    let testeE = primeIs(_N)? primeIs(partE) || primeIs(partEb) || primeIs((_N ** 2n) - 2n) || primeIs((_N ** 2n) - ( 2n ** 3n ) ) : false;

    let testeF = sqrt(_N) % 2n == 0n ? ( sqrt(_N) * 4n ) ** 2n + 1n : false;

    let testeG = (( (_N - ( _N / 2n ) ) ** 2n ) + 1n);
    let testeH = _N % 11n === 0n ? 11 : false;


    let tempI = ( _N / 2n ) - 1n;
    let partI = ( 8n * tempI ) - (2n * tempI);
    let testeI = partI ** 2n +  1n;

    let tempJ = _N % 2n === 0n ? _N / 2n : (_N + 1n ) / 2n;
    let partJ = ( 4n * tempJ );
    let testeJ = partJ ** 2n +  1n;

    let testeK = primeIs(_N) && primeIs((_N * 2n) + 1n)?((_N * 2n) + 1n): false;


    let result =    primeIs(testeA) ||
                    primeIs(testeB) || 
                    primeIs(testeC) || 
                    primeIs(testeD) || 
                    primeIs(testeE) || 
                    primeIs(testeF) || 
                    primeIs(testeG) || 
                    primeIs(testeH) ||
                    primeIs(testeI) ||
                    primeIs(testeJ) ||
                    primeIs(testeK)

    
    let results =   [
                    primeIs(testeA),
                    primeIs(testeB), 
                    primeIs(testeC), 
                    primeIs(testeD), 
                    primeIs(testeE), 
                    primeIs(testeF), 
                    primeIs(testeG), 
                    primeIs(testeH),
                    primeIs(testeI),
                    primeIs(testeJ),
                    primeIs(testeK)
                    ];



                    // if ( _N == 97n){
                    //     console.count('97 raiz')
                    //     console.log(sqrt(_N), _N)
                    // }




    
    if(_N % 2n === 0n && !result){
        return fermatM(_N / 2n);
    } else if(_N % 3n === 0n && !result){
        return fermatM(_N / 3n);
    } else if ( sqrt(_N) == 9n && !result){
        return fermatM(9n);
    } else if ( sqrt(_N) == 11n && !result){
        return fermatM(11n);
    } else if ( sqrt(_N - 1n) == 12n && !result){
        return fermatM(12n);
    } else if(primeIs(_N * 2n + 1n) && !result ){
        return fermatM(_N * 2n + 1n);
    } else if(primeIs(_N * 2n + 3n) && !result ){
        return fermatM(_N * 2n + 3n);
    } 
    
    if(result){
        // if(_N == null ){
        //     console.log(
        //         testeA, primeIs(testeA), ' | ',
        //         testeB, primeIs(testeB), ' | ',
        //         testeC, primeIs(testeC), ' | ',
        //         testeD, primeIs(testeD), ' | ',
        //         testeE, primeIs(testeE), ' | ',
        //         testeF, primeIs(testeF), ' | ',
        //         testeG, primeIs(testeG), ' | ',
        //         testeH, primeIs(testeH), ' | ',
        //         testeI, primeIs(testeI), ' | ',
        //         testeJ, primeIs(testeJ), ' | ',
        //         testeK, primeIs(testeK), ' | '
        //     );
        // }
        
        return {result, results}
    } else {
        // if(_N == 283n ){
        //     console.log((_N * 2n + 1n))
        //     console.log(
        //         testeA, primeIs(testeA), ' | ',
        //         testeB, primeIs(testeB), ' | ',
        //         testeC, primeIs(testeC), ' | ',
        //         testeD, primeIs(testeD), ' | ',
        //         testeE, primeIs(testeE), ' | ',
        //         testeF, primeIs(testeF), ' | ',
        //         testeG, primeIs(testeG), ' | ',
        //         testeH, primeIs(testeH), ' | ',
        //         testeI, primeIs(testeI), ' | ',
        //         testeJ, primeIs(testeJ), ' | ',
        //         testeK, primeIs(testeK), ' | '
        //     );
        // }
        return false;
    }
    // return (( _N * _N ) + 1n)
}


// function fermatN(N){
//     let _N = getN(N)
//     return ((_N * (sqrt(_N )) + 1n) - _N) + 1n
// }


// var a = fermatM('1')

// var b = fermatM(a);
// var c = fermatM(b);
// var d = fermatM(c);
// var e = fermatM(d);

// //var ff = fermatN(e);
// var f = fermatN(e);//MEIO

// var g = fermatN(f)
// var h = fermatN(g)
// var i = fermatN(h)
// var j = fermatN(i);
// var k = fermatN(j);

// // console.log(b, c, d, e, g, h, i, j, k)
// console.log(b, primeIs(b))
// console.log(c, primeIs(c))
// console.log(d, primeIs(d))
// console.log(e, primeIs(e))

// console.log(f, primeIs(f))

// console.log(g, primeIs(g))
// console.log(h, primeIs(h))
// console.log(i, primeIs(i))
// console.log(j, primeIs(j))

// console.log(fermatM(1), primeIs(fermatM(1)))
// console.log(fermatM(2), primeIs(fermatM(2)))
// console.log(fermatM(3), primeIs(fermatM(3)))
// console.log(fermatM(4), primeIs(fermatM(4)))

let all = [];
let totalCalc = num;

console.time('exec')

for(let i = 1; i <= totalCalc; i++){

    console.log(i)
    //console.log(fermatS(1))


    //console.dir(fermatS(i))

    if(fermatS(i).results.length > 0){
        for(res of fermatS(i).results){
            if (!all.includes(res)) {
                all.push(res);
            }
        }
    }




    // if(primeIs(fermatM(i).result)){
    //     //console.log(i, ' - ', fermatM(i),)


    //     for(res of fermatM(i).results){
    //         if (!all.includes(res)) {
    //             all.push(res);
    //         }
    //     }




    //     //console.log(i, ' - ', fermatM(i).result)
    // } else {
    //     console.log(i, ' xxxxxxxxxxx ', fermatM(i), primeIs(fermatM(i)))
    //     return;
    // }
}

//all.sort((a, b) => Number(a) - Number(b))
console.timeEnd('exec')

console.log(`${totalCalc} iterações realizadas e ${all.length} números primos encontrados.`);
console.log('        ')
console.log('        ')
console.log('        ')
console.log('        ')
console.log('        ')
console.log(JSON.stringify(all.map(_ => Number(_))))
} catch (e) {
    console.error(new Error(e))
}
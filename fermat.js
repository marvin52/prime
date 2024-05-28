

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



function getN(N){
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

function fermatM(N){
    let _N = getN(N)
    return (( _N * _N ) + 1n)//.toString;
}

function fermatN(N){
    let _N = getN(N)
    return ((_N * (sqrt(_N )) + 1n) - _N) + 1n
}

var a = fermatM('1')

var b = fermatM(a);
var c = fermatM(b);
var d = fermatM(c);
var e = fermatM(d);

//var ff = fermatN(e);
var f = fermatN(e);//MEIO

var g = fermatN(f)
var h = fermatN(g)
var i = fermatN(h)
var j = fermatN(i);
var k = fermatN(j);

// console.log(b, c, d, e, g, h, i, j, k)
console.log(b, isPrime(b))
console.log(c, isPrime(c))
console.log(d, isPrime(d))
console.log(e, isPrime(e))

console.log(f, isPrime(f))

console.log(g, isPrime(g))
console.log(h, isPrime(h))
console.log(i, isPrime(i))
console.log(j, isPrime(j))
console.log(k, isPrime(k))

// console.log(fermatM('17'), fermatN('257'), fermatN('4097'))
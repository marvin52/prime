
const args = process.argv.slice(2);
const pos = parseInt(args[0]);

function nPrime(n) {
    n = (n * (41 / 13)) - (13 + ((n + 13) / (41            )));
    return (n * Math.log(n) / (41 / 13));
}


console.log(nPrime(pos, 41 / 13))

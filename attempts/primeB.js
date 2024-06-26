const fs = require('fs').promises;

const args = process.argv.slice(2);

function sieveOfEratosthenes(limit) {
    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

function generatePrimeList(high) {
    const limit = estimateUpperLimit(high);
    return sieveOfEratosthenes(limit);
}

function estimateUpperLimit(n) {
    if (n < 6) {
        return 15;
    }
    return Math.floor(n * (Math.log(n) + Math.log(Math.log(n))));
}

function Prime(low, max, PC) {
    let checkPrime = false;

    if (isNaN(max)) {
        checkPrime = true;
        max = low + 1;
        low -= 1;
    }

    low = low >= 2 ? low : 2;

    let pc = PC;

    let step = Math.round(max / pc[pc.length - 1]);
    let high_ = Math.round(max / pc[pc.length - 2]);

    let lower = null;
    for (let a = 0; a <= pc.length - 1; a++) {
        if (pc[a] === low || low % pc[a] === 0) {
            lower = pc[a] === low ? pc[a] : pc[a + 2] * (low / pc[a + 2]);
            high_ = max / low % pc[a + 2];
            break;
        }
    }

    let n2 = [];
    let p2 = [];

    for (let mtp = lower; mtp <= high_; mtp++) {
        if (Math.round(mtp) % step === 0) {
            part2();
        }
        let teste = [];
        let filt = pc.filter((a, b) => {
            return a >= mtp;
        })
        for (np of filt) {
            if (!teste.includes(np * mtp)) teste.push(np * mtp);
        }

        for (testeVar of teste) {
            if (!n2.includes(testeVar) && testeVar <= max) n2.push(testeVar);
        }
    }

    function part2() {
        for (let i = max; i >= lower; i--) {
            let filt = pc.filter((a, b) => {
                return a < i
            })

            for (np of filt) {
                if (i % np == 0 && i !== np) {
                    if (!n2.includes(i)) n2.push(i);
                }
            }
        }

        for (let i = lower; i <= max; i++) {
            if (!n2.includes(i)) {
                if (i >= lower) {
                    p2.push(i);
                    if (!pc.includes(i)) {
                        pc.push(i)
                    }
                }
            }
        }

        pc.sort((a, b) => a - b)

        step = Math.round(max / pc[pc.length - 1]);
        high_ = Math.round(high_ / pc[pc.length - 2]);
    }

    part2();

    return {
        pointLow: low,
        pointHigh: max,
        totalPrime: p2.length
    }
}

function testeC(a, b) {
    function testeB(ns) {
        function testeA(ns) {
            if (ns[ns.length - 1] === '0' && ns[ns.length - 2] === '0') {
                return (parseInt(ns) / 2).toString();
            } else {
                return ns
            }
        }
        let ans = [];
        let nsA = ns;
        ans.push(nsA)

        let nsB = testeA(nsA);
        if (nsA !== nsB) {
            ans.push(nsB)
            if (nsB[nsB.length - 1] === '0' && nsB[nsB.length - 2] === '0') {
                let nsC = testeB(nsB);
                for (num of nsC) {
                    if (!ans.includes(num)) ans.push(num);
                }
                ans.sort((a, b) => {
                    return parseInt(a) - parseInt(b);
                })
                return ans;
            }
        }
        ans.sort((a, b) => {
            return parseInt(a) - parseInt(b);
        })
        return ans;
    }
    let res = testeB(b);
    let filtres = res.filter(_ => {
        return parseInt(_) > parseInt(a);
    })
    filtres.push(a);
    filtres.sort((a, b) => {
        return parseInt(a) - parseInt(b);
    })
    return filtres;
}

function callOthers(a, b, pc) {
    let t = testeC(a, b);
    let soma = 0;
    for (let i = 0; i < t.length - 1; i++) {
        let total = Prime(parseFloat(t[i]), parseFloat(t[i + 1]), pc);
        soma += total.totalPrime;
    }
    return soma;
}

async function calculaEescreveArquivo(a, low, primeCount, bestMatch) {
    for (let i = low; i < a; ++i) {
        const primeList_ = generatePrimeList(low * i);
        const primeCount_ = callOthers(low, a, primeList_);
        if (primeCount_ === primeCount) {
            //console.count('ENTROU');
            bestMatch[a - low] = i;
            await escreverNoArquivo(`${i},`);
            break;
        }
    }
}

function escreverNoArquivo(dados) {
    return fs.writeFile('bestMatch.json', dados, { flag: 'a' });
}

(async function main() {
    const low = 1 || parseInt(args[0]);
    const high = 100000 || parseInt(args[1]);
    let bestMatch = [0];

    for (let a = low; a < high; ++a) {
        console.log(`calculado ${((a) * 100) / high} %`);

        const primeList = generatePrimeList(a);
        const primeCount = callOthers(low, a, primeList);

        await calculaEescreveArquivo(a, low, primeCount, bestMatch);
    }

    console.log('calculado 100 %');
})();

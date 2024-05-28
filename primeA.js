const {readFile} = require('fs');

const args = process.argv.slice(2);

//const command_ = parseFloat(args[0]);
const a = args[0];
const b = args[1];
//const b = args[1];

function testeC(a, b){
    function testeB(ns){
        function testeA(ns){
            if(ns[ns.length - 1] === '0' && ns[ns.length - 2] === '0'){
                return (parseInt(ns) / 2).toString();
            } else {
                return ns
            }
        }
        let ans = [];
        let nsA = ns;
        ans.push(nsA)
    
        
        let nsB = testeA(nsA);
        if(nsA !== nsB){
            ans.push(nsB)
            if(nsB[nsB.length - 1] === '0' && nsB[nsB.length - 2] === '0'){
                let nsC = testeB(nsB);
                for(num of nsC){
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
    let filtres = res.filter( _ => {
        return parseInt(_) > parseInt(a);
    })
    filtres.push(a);
    filtres.sort((a, b) => {
        return parseInt(a) - parseInt(b);
    })
    return filtres
}



console.log(testeC(a, b)) ;


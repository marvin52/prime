const {readFile} = require('fs');

const args = process.argv.slice(2);

//const command_ = parseFloat(args[0]);
const l_ = parseFloat(args[0]);
const h_ = parseFloat(args[1]);
const show_ = args[2];

readFile('./primos.json', 'utf8',(err, data) => {
    //console.log(data);
    let pc = JSON.parse(data);

    let prime = Prime(l_, h_, pc);
    
    console.log(prime.totalPrime)
    if(show_){
        console.log(prime.json)
    }

});

function Prime (low = 2, max = false, PC = []) {
    console.time("CONTA")

    let checkPrime = false
    
    if(isNaN(max)){
        checkPrime = true
        max = low + 1;
        low -= 1;
    }

    low = low >= 2 ? low : 2;

    let pc = PC;
     
    
    let step = Math.round(max / pc[pc.length - 1]);
    let high = Math.round(max / pc[pc.length - 2]);
    
        let lower = null;
        //console.log('---')
   // console.log(lower, high, max)
        for(let a = 0; a <= pc.length - 1; a++){
            
            if(pc[a] === low || low % pc[a] === 0){
                lower = pc[a] === low ? pc[a] : pc[a + 2] * (low / pc[a + 2]);
                

                high = max / low % pc[a + 2];
                ///console.log('---')
    //console.log(lower, high, max)
                break;
            }
        }



    let n2 = [];
    let p2 = [];
    

    //console.log('---')
   // console.log(lower, high, max)
    for(let mtp = lower; mtp <= high; mtp++){
        if(mtp < step){
            console.count('MTP < STEP')
        }

        if(Math.round(mtp) % step === 0){
            part2();
        }
        let teste = [];
        let filt = pc.filter((a, b)=> {

            return a >= mtp;
        })
        for(np of filt){
            //console.count("FILT")
            if(!teste.includes(np * mtp)) teste.push(np * mtp);
        }


        for(testeVar of teste){
            if (!n2.includes(testeVar) && testeVar <= max) n2.push(testeVar);
        }


    }


    function part2(){
        //console.log("UPDATE")
        for(let i = max; i >= lower; i--){


            let filt = pc.filter((a, b)=> {
                // if(max % a === 0 && max % i === 0){
                //     console.log(a, i)
                //     console.count('max % a')

                // }
                //return a < i || (max % a === 0 && max % i === 0);
                return a < i //|| (max % a === 0 && max % i === 0);
            })

            for(np of filt){
                //console.count('teste')
                if (i % np == 0 && i !== np){

                    if (!n2.includes(i)) n2.push(i);

                }
            }
            
    
        }
    
        for(let i = lower; i <= max; i++){
            
            if (!n2.includes(i)){
                if(i >= lower){
                    // console.log(i, max, high, lower)//
                p2.push(i);
                if(!pc.includes(i)){
                    pc.push(i)
                }
            }
            }
        }

        pc.sort((a, b) => a - b)

        //console.log('---')
        //console.log(lower, high, max)
        step = Math.round(max / pc[pc.length - 1]);
        high = Math.round(high / pc[pc.length - 2]);
        //console.log('---')
    //console.log(lower, high, max)

    }
    
    part2();
    
    console.timeEnd("CONTA")
    return {
        // resultA: max - (n.length + 1),
        // resultB: max - p.length,
        //resultC: max - (n2.length + 1),
        //resultD: p2.length,
        message: `${low} - ${max} = ${p2.length}`,
        pointLow: low,
        pointHigh: max,
        totalPrime: p2.length,
        // json: JSON.stringify(p),
        json2: JSON.stringify(p2)
    }
}


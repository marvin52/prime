const {readFile} = require('fs');


const args = process.argv.slice(2);

// Converte os argumentos para números
const l_ = parseFloat(args[0]);
const h_ = parseFloat(args[1]);
const i_ = parseFloat(args[2]);

function marvin (low = 2, max = 100) {
    low = low >= 2 ? low : 2;
    
    //console.log(total, low, max)
    
    
    // readFile('./primos.json', 'utf8',(err, data) => {
    //     console.log(data);
    //     let pc = JSON.parse(data);
    // });

    let pc = [2, 3, 5, 7, 11, 13, 17, 19, 23];
    
    //console.log(lower)
    
    let step = Math.round(max / pc[pc.length - 1]);
    let high = Math.round(max / pc[pc.length - 2]);
    
        let lower = null;
        
        for(let a = 0; a <= pc.length - 1; a++){
            //console.log(a, 'kkkk', pc[a], low, low % pc[a + 2])
            if(pc[a] === low || low % pc[a] === 0){
                lower = pc[a] === low ? pc[a] : pc[a + 2] * (low / pc[a + 2]);
                //console.log('-------', lower, );
                //high = (max / lower + 2 * (a + 2)) -1;
                high = max / low % pc[a + 2];
                break;
            }
        }



    let n2 = [];
    let p2 = [];
    

    for(let mtp = lower; mtp <= high; mtp++){
        //console.log(mtp)
        if(Math.round(mtp) % step === 0){
            part2();
        }
        let teste = [];
        let filt = pc.filter((a, b)=> {
            //console.log(a, b);
            return a >= mtp;
        })
        for(np of filt){
            if(!teste.includes(np * mtp)) teste.push(np * mtp);
        }


        for(testeVar of teste){
            if (!n2.includes(testeVar) && testeVar <= max) n2.push(testeVar);
        }


    }

    //n2.sort((a, b) => a - b)
    function part2(){
        for(let i = max; i >= lower; i--){
            //console.log('<><><><><><>')

            let filt = pc.filter((a, b)=> {
                //console.log(a, b);
                return a < i;
            })

            for(np of filt){
                if (i % np == 0 && i !== np){
                    // incP = true;
                    if (!n2.includes(i)) n2.push(i);
                    //return;
                }
            }
            
    
        }
    
        //console.log('>>>ç', p2.length)
        for(let i = lower; i <= max; i++){
    
            if (!n2.includes(i)){
                //console.log(']]]]]] ', i, lower)
                if(i >= lower){
                p2.push(i);
                if(!pc.includes(i)){
                    pc.push(i)
                }
            }
            }
        }
        //console.log('>>>ç', p2.length)
        pc.sort((a, b) => a - b)

        //console.log("UPTADE STEP")
        //console.log(step, pc)
        step = Math.round(max / pc[pc.length - 1]);
        //console.log(step)
        high = Math.round(high / pc[pc.length - 2]);

    }
    
    part2();

    return {
        // resultA: max - (n.length + 1),
        // resultB: max - p.length,
        resultC: max - (n2.length + 1),
        resultD: p2.length,
        message: `Do intervalo de ${low} até ${max} existem ${p2.length} números primos!`,
        // json: JSON.stringify(p),
        json2: JSON.stringify(p2)
    }
}


  let conta = marvin(l_, h_,i_);
  
  console.log(conta.message)
  console.log("\n")
  console.log(conta.result)


//console.log(conta.json2)
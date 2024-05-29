// formula.js
const arrayGabarito = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541];













// Acessa os argumentos passados na linha de comando
const args = process.argv.slice(2);

// Converte os argumentos para números
const num = parseFloat(args[0]);
//const num2 = parseFloat(args[1]);


for(let i = 0; i <= 99; i++){
    let primoCerto = arrayGabarito[i];
    let primoCalc = getPrimo(i);
    let correto = primoCerto === primoCalc;
    console.log(`${correto?'___':'xxx'} ${i} => ${primoCerto} -- ${primoCalc}`)
    if(!correto) return;
}


function getPrimo(num1){
let teste = num1 === 15 || num1 === 14;
//angulos
const a = 30;
const b = 60;
const c = 90;
const d = 120;

//triangulos
//isósceles obtusângulo d + a + a
//triângulo retângulo c + b + a
//triângulo equilátero b + b + b




//try {
// PROBLEMAS NO 10   11  6
    //if (num1 > 0){
        // impar
        // equilatero
        // num1 = 1, tem que retornar 3 * b
        let temp = num1 * 180;
        let res = {a: 0, b: 0, c: 0, d:0 };

        //console.log('temp ', temp)

        while(temp > 0){
            //switch(true){
                // B 60
                //case temp / b == 3 || temp / b == 1: //PODE
                    if(temp / b >= 3 || temp / b == 1){
                        //console.log('b', temp, temp / b)
                        res.b += temp / b >= 3? 3 : 1;
                        temp -= (temp / b >= 3? 3 : 1) * b;
                    }
                //break;


                // D 120
                //case temp / d >= 3: //N PODE
                if(temp / d >= 3) {
                    //console.log('d')

                    if(temp >= ((2 * a) + d) ){
                        res.d += 1;
                        res.a += 2;
                        temp -= d + (2 * a);
                    }
                }
                //break;
                
                //console.log(res)
                
                // C 90
                //case temp / c >= 3: //N PODE
                if(temp / c >= 3){
                    //console.log('c')
                    res.c += 3;
                    temp -= 3 * c;
                }
                //break;
                

                // A 30
                //case temp / a >= 3: //N PODE
                if(temp / a >= 3){
                    //console.log('a', temp, temp / a)
                    //console.log('loop A > ', temp)
                    if(temp >= 180){
                        res.a += 1;
                        res.b += 1;
                        res.c += 1;
                        temp -= a + b + c
                    } else if (temp == c){
                        res.a += 3;
                        res.b += 3;
                        temp -= c;
                    }
                    /// FAZER O DO 90 PARA FUNCIONAR O 5

                    //console.log(temp, res)
                }
                //break;
            //}
        }
        //console.log('res: ', res)


        //CONTA DE QT E TIPO TRIANGULOS
        //triangulos
        //isósceles obtusângulo d + a + a
        //triângulo retângulo c + b + a
        //triângulo equilátero b + b + b

        //isósceles obtusângulo
        let tipos = {tipoa: 0, tipob: 0, tipoc: 0}
        if(res.d > 0){
            if(res.d / ( 2 * res.a) > 0){
                for(let t = res.d; t > 0; t--){
                    tipos.tipoa += 1;
                    res.a -= 2;
                    res.d -= 1;
                }
            }
        }
        //triângulo retângulo
        if(res.c > 0){
            if(res.c / ( res.b + res.a) > 0){
                for(let t = res.c; t > 0; t--){
                    tipos.tipob += 1;
                    res.a -= 1;
                    res.b -= 1;
                    res.c -= 1;
                }
            }
        }

        //console.log('>>>>>>>>> res.b = ', res.b)
        //console.log('>>>>>>>>> res.c = ', res.c)
        //console.log('TIPOS ==== ', tipos)
        //triângulo equilátero
        if(res.b % 3 == 0){
            //if(res.c / ( res.b + res.a) > 0){
                for(let t = res.c; t >= 0; t--){
                    //console.count('ADD TIPO C')
                    tipos.tipoc += 1;
                    res.b -= 3;
                }
            //}
        }
        if(res.a !== 0 || res.b !== 0 || res.c !== 0 || res.d !== 0){
            //console.log('============================ CONTA IMCOMPLETA!!! ============================')
            //console.log('SOBRA DA CONTA = ', res)
            //TESTE
            if(res.b > 0){
                tipos.tipob += 1;
                tipos.tipoa += 1;
            }
            //console.log(res.b)
            if(res.b < 0){
                if(tipos.tipoa > 1){
                    //console.log('-----> ', tipos.tipob)
                    if(tipos.tipob % 2 === 0){
                        //console.log('BBBBBBBBBBBB', tipos.tipob)
                        tipos.tipob += ((tipos.tipob / tipos.tipoa) % 2 ) + 3;
                    } else {
                        //console.log('*******************')
                        tipos.tipob += 1;
                    }
                }
            }
            if(res.b === 0){
                if(teste){
                    console.log(tipos.tipob , tipos.tipoa)
                }
                tipos.tipob += ((tipos.tipob % tipos.tipoa !== 0)? (tipos.tipob + tipos.tipoa + 1) : (tipos.tipob )) / tipos.tipoa;
                // if(tipos.tipob / tipos.tipoa === 4.5){
                //     console.log('***')
                // }
            }
        }





        //console.log(tipos, res);
        let numerofinal = 0;
        numerofinal += (3 * tipos.tipoc);
        numerofinal += (tipos.tipob ) > 0? (2 * (tipos.tipob )) : 0 ;


        //let multiplica = 2 * (tipos.tipoa);
        let multiplica =  tipos.tipoa === 1 ? 2 : ((4 * (tipos.tipoa % 2) + tipos.tipoa) * 2);
        //let multiplicaB =  tipos.tipoa === 1 ? 2 : ((2 * (tipos.tipoa % 2) + tipos.tipoa) * 3);
        
        if(teste) console.log(num1 % 2, tipos.tipob % tipos.tipoa, multiplica % tipos.tipoa !== 0, tipos.tipoa, multiplica);

        if(num1 % 2 && tipos.tipob % tipos.tipoa && multiplica % tipos.tipoa !== 0) {
            //console.log('CASO 13', multiplica);
            multiplica -= 2 * tipos.tipoa;
        }
        if(!(num1 % 2) && tipos.tipob % tipos.tipoa && multiplica % tipos.tipoa !== 0) {
            multiplica -= tipos.tipoa - (tipos.tipob % tipos.tipoa);
        }


        numerofinal += (tipos.tipoa ) > 0? multiplica: 0 ;//é por aqui o problema do 12!
        if(teste) console.log(`tipos 120:${tipos.tipoa} 90:${tipos.tipob} 60:${tipos.tipoc}`);
        //console.log("O número é >>>>>>> ", numerofinal)
        return num1 === 0? 2 : numerofinal;
        // console.log({
        //     a: 0,
        //     b: 3,
        //     c: 0,
        //     d: 0
        // })
        // num1 = 3, tem que retornar 4 * b, 3 * a, 1 * d, 1 * c

    // } else {
    //     // par
    //     // retangulo
    //     // num1 = 2, tem que retornar 3 * b, 2 * a, 1 * d
    //     // num1 = 4, tem que retornar 5 * b, 4 * a, 1 * d, 2 * c
    //     // console.log({
    //     //     a: 2,
    //     //     b: 3,
    //     //     c: 0,
    //     //     d: 1
    //     // })
    // }
// } catch(e) {
//     console.log(e)
// }




// // Realiza a soma
// const resultado = num1 + num2;

// // Exibe o resultado no console
// console.log(resultado);

}
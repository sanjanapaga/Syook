function makeChai(n, k, g, b) {
    const result = [];
    let cGreens=0;
    let cBlacks=0;
    while(n>0){
        if((g>=b && cGreens<k)||cBlacks===k){
            result.push(("Green"))
            g--;
            cGreens++
            cBlacks=0
        }else if((b>g && cBlacks<k)||cGreens===k){
            result.push("Black")
            b--;
            cBlacks++
            cGreens=0
        }
        else{
            return []
        }
        n--
        }
        return result
    }


const n1 = 5, k1 = 1, g1 = 3, b1 = 2;
console.log(makeChai(n1, k1, g1, b1)); 

const n2 = 4, k2 = 3, g2 = 4, b2 = 0;
console.log(makeChai(n2, k2, g2, b2)); 

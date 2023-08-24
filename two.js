function numberOfStepsToReachOne(x) {
    if (x === 1) {
        return 0; 
    } else if (x % 2 === 0) {
        return x/2
    } else {
        return 3*x+1
    }
}

const x = 3;
const steps = numberOfStepsToReachOne(x);
console.log(steps);

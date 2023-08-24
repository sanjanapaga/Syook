function classifyNumber(num) {
    if (num <= 0) {
        return "Please enter a positive integer.";
    }

    const factors = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    const factorSum = factors.reduce((acc, current) => acc + current, 0);

    if (factorSum === num) {
        return "Perfect";
    } else if (factorSum > num) {
        return "Abundant";
    } else {
        return "Deficient";
    }
}

console.log(classifyNumber(6));
console.log(classifyNumber(12)); 
console.log(classifyNumber(8));  

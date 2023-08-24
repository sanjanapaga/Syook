function findSpecialValues(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const specialValues = [];

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const value = matrix[i][j];
            let isSpecial = true;
            
            for (let k = 0; k < numCols; k++) {
                if (matrix[i][k] > value) {
                    isSpecial = false;
                    break;
                }
            }
            for (let k = 0; k < numRows; k++) {
                if (matrix[k][j] < value) {
                    isSpecial = false;
                    break;
                }
            }

            if (isSpecial) {
                specialValues.push(value);
            }
        }
    }

    return specialValues;
}


const matrix = [
    [7, 8, 7],
    [5, 4, 2],
    [8, 6, 7]
];

const result = findSpecialValues(matrix);
console.log(result); 

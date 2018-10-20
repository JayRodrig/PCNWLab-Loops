/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/

const average = arr => {
    const copyArr = [...arr];
    if(Array.isArray(arr) === false){
        throw Newerror('Invalid argument, need array');
    } 

    let addingNumbers = 0

    for(i = 0; i < copyArr.length; i++){
        addingNumbers += copyArr[i] / copyArr.length;
    }

    return addingNumbers;
}

console.log(average([1, 2, 3, 4]));

/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/

const squareEach = arr => {
    const copyArr = [...arr];
    for(i = 0; i < copyArr.length; i++){
        copyArr[i] **= 2;
    }
    return copyArr;
}

console.log(squareEach([1, 2, 3, 4]));


/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/

/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/

/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/

/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/




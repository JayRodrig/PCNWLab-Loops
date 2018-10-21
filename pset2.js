
/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/

const removeNegatives = arr => {
    const copyArr = [];
    for(let i = 0; i < arr.length; i++){
        copyArr.push(Math.abs(arr[i]));
    }
    return copyArr;
}

console.log(removeNegatives([-3,-2,1,2,3,-4]));
console.log(removeNegatives([-10, -8, -9, -15]));
console.log('*********************************************************************')
/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/

const findVal = (arr, val) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1; //We put the return -1 condition outside because we don't want to stop our loop from iterating  
}

console.log(findVal([1,2,3,4], 1));
console.log(findVal([1,2,3,4], 4));
console.log(findVal([1,2,3,4], 9));
console.log('*********************************************************************')

/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/

const removeOdds = arr => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0 && typeof arr[i] === 'number'){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeOdds([1,2,3,4]));
console.log(removeOdds([1,"2",3,4]));
console.log('*********************************************************************')

/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/

const addSquares = arr => {
    let copyArr = [...arr];
    for(let i= 0; i < arr.length; i++){
        copyArr[i] **= 2;
    }
    return arr.concat(copyArr);
}

console.log(addSquares([1,2,3,4]));
console.log('*********************************************************************')

/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/


const doubleify = arr => {
    let copyArr = [];
    for(let i = 0; i < arr.length; i++){
        copyArr.push(arr[i]);
        copyArr.push(arr[i]);
    }
    return copyArr;
}

console.log(doubleify([1,2,3,4] ));
console.log('*********************************************************************')

/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/

const findMax = arr => {
   let largest = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest;
}

console.log(findMax([1,2,3,99,4]));
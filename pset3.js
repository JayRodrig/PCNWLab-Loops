/*
    @func getMiddle
    @param {array} arr
    @return {array}
    @desc - get the middle item of an array
            if even number of elements, return the middle TWO items
            
    @example - getMiddle([1,2,3); // [3]
               getMiddle([1,2,3,4]); // [2,3]
*/

const getMiddle = arr => {
    if(arr.length % 2 === 0){
        return arr.slice(arr.length / 2 - 1, arr.length / 2 + 1);
    } else return arr.slice(Math.floor(arr.length/2), Math.floor(arr.length/2 + 1));
}

console.log(getMiddle([1,2,3]));
console.log(getMiddle([1,2,3, 4]));
console.log(getMiddle([12,13,14]));
console.log(getMiddle([12,13,14,15,16,17,18]));
console.log(getMiddle([12,13,14,15,16,17,18,19]));
console.log('***************************************************************')

/*
    @func addToMiddle
    @param {array} arr
    @param {anything} element
    @return {array}
    @desc - add element to the middle of array
            if odd number of elements, add after middle
            
    @example - addToMiddle([1,2,3], 0); // [1,2,0,3];
               addToMiddle([1,2,3,4], 0); // [1,2,0,3,4]
*/

const addToMiddle = (arr, element) => {
    const firstHalfArr = arr.slice(0, Math.ceil(arr.length / 2));
    const secondHalfArr = arr.slice(Math.ceil(arr.length / 2), arr.length);
    return firstHalfArr.concat(element).concat(secondHalfArr);
}

console.log(addToMiddle([1,2,3], 0));
console.log(addToMiddle([1,2,3,4], 0));
console.log('***************************************************************')

/*
    @func hasAtSymbol
    @param {string} email
    @return {boolean}
    @desc - return true if '@' present in string
    @example - hasAtSymbol('taq@karim.com'); // true
               hasAtSymbol('foobar'); // false
*/

const hasAtSymbol = email => {
    for(let i = 0; i < email.length; i++){
        if(email[i] === '@'){
            return true;
        }
    }
    return false;
}

console.log(hasAtSymbol('taq@karim.com'));
console.log(hasAtSymbol('foobar'));
console.log('***************************************************************')

/*
    @func capitalize
    @param {string} str
    @returns {string}
    
    @desc - capitalize the FIRST letter of string
    @example - capitalize('taq'); // 'Taq'
               capitalize('Taq'); // 'Taq'
*/

const capitalize = str => {
    const arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            arr[i] = arr[i].toUpperCase();
        }
    return arr.join('');
    }
}

console.log(capitalize('taq'));
console.log(capitalize('Taq'));
console.log('***************************************************************')

/*
    @func isAllUpperCased
    @param {string} str
    @returns {boolean}
    
    @desc - return true if all caps else false
    @example isAllUpperCased('TAQ'); // true
             isAllUpperCased('tAq'); // false
*/

const isAllUpperCased = str => {
    if(typeof str !== 'string'){
        return 'Invalid input'
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] !== str[i].toUpperCase()){
            return false;
        } 
    }
    return true;
}

console.log(isAllUpperCased('TAQ'))
console.log(isAllUpperCased('tAq'))
console.log('***************************************************************')

/*
    @func capitalizeEachWord
    @param {string} str
    @returns {string}
    
    @desc - returns string with each WORD capitalized
    @example - capitalizeEachWord('the cow jumped over the fence')
               // 'The Cow Jumped Over The Fence'
*/

// const capitalizeEachWord = str => {
//     let arr = str.split(' ');
//     let newArr = [...arr];
//     for(let i = 0; i < arr.length; i++){
//         newArr = arr[i][0].toUpperCase();
//     }
//     console.log(newArr);
// }

// console.log(capitalizeEachWord('the cow jumped over the fence'));

/*
    @func capitalizeEachWordWithExceptions
    @param {string} str
    @param {array} exceptions
    @returns {string}
    
    @desc - returns string with each WORD capitalized EXCEPT the exceptions
    @example - capitalizeEachWord(
                'the cow and a fox went on the trip', 
                ['the', 'and', 'a', 'on']
               )
               // 'The Cow and a Fox Went on the Trip'
*/

/*
    @func findAtMentions
    @param {string} tweet
    @returns {array}
    
    @desc - returns array with all the @mentions
    @example - 
        findAtMentions('@the_taqquikarim @someOtherGuy @etc this was a cool event @foobar')
        // ['the_taqquikarim', 'someOtherGuy', 'etc', 'foobar']
*/
const findAtMentions = tweet => {
    const arr = tweet.split(' ');
    const newArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] === '@'){
            newArr.push(arr[i].slice(1));
        }
    }
    return newArr;
}

console.log(findAtMentions('@the_taqquikarim @someOtherGuy @etc this was a cool event @foobar'));
/*
    @func roundToN
    @param {number} num
    @param {number} decimalPlaces
    @returns {number}
    
    @desc - rounds to the decimalPlaces
    @example - roundToN(1123.1234, 3); // 1123.123
*/

/*
    @func addArrays
    @param {array} arrays
    @returns {array}
    
    @desc - adds arrays together
    @example - addArrays([
        [1,2,3],
        [4,5],
        [6,7,8,9]
    ]); // [1,2,3,4,5,6,7,8,9]
*/



const removeFromArray = function(arr, ...nums) {
    for (const arg of nums) { //arg = 2
        // for (const i of arr) { 
        //     console.log(i);
        //     if (i === arg) {
        //         arr.splice(arr.indexOf(i), 1); // 1,2,3
        //     }
        // }
        arr = arr.filter(e => e !== arg);
    }
    return arr;
};

// console.log(removeFromArray([1, 2, 2, 3], 2));
// removeFromArray([1, 2, 2, 3], 2);
// Do not edit below this line
module.exports = removeFromArray;

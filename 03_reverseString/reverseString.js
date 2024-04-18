const reverseString = function(string) {
    // let newString = "";
    // let newArray = string.split("");
    // for (let i=newArray.length-1; i>=0; i--) {
    //     newString += newArray[i];
    // }

    // return newString;

    return string.split("").reverse().join(""); //both correct
};

// Do not edit below this line
module.exports = reverseString;

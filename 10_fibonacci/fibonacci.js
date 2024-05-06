const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    const fib_seq = [0];
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            fib_seq.push(fib_seq[i] + 1);
        }
        else {
            fib_seq.push(fib_seq[i] + fib_seq[i-1]);
        }  
    }
    return fib_seq[fib_seq.length-1];
};

// Do not edit below this line
module.exports = fibonacci;

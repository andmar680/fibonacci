// returns the nth fibonacci number

const fibonacci = (num) => {
    if (num < 1) return 'such a number does not exist'

    let fibo = [0, 1];
    let count = 1
    while (count !== num) {
        count++;
        let cur_sum = fibo[0] + fibo[1];
        fibo[0] = fibo[1];
        fibo[1] = cur_sum;
    }
    return fibo[0]
}

module.exports = {fibonacci}

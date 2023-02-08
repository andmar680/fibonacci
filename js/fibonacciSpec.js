var fib = require("./fibonacci");

console.log(fib.fibonacci(0) === "such a number does not exist") //you can't have a 0th number
console.log(fib.fibonacci(2) === 1)
console.log(fib.fibonacci(5) === 3)
console.log(fib.fibonacci(9) === 21)
console.log(fib.fibonacci(12) === 89)
console.log(fib.fibonacci(15) === 377)
console.log(fib.fibonacci(18) === 1597)
console.log(fib.fibonacci(21) === 6765)

/*
n =	0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	...
xn =	0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	...
*/
let n1 = 0;
let n2 = 1;

function fib(n) {
   let fibNum = [n1, n2];
   for (let i = 2; i <= n; i++) {
      fibNum.push(fibNum[i - 1] + fibNum[i - 2]);
   }
   return fibNum[n - 1];
}

console.log(fib(5)) //3
console.log(fib(10)) //34

//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
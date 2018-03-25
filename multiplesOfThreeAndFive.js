// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

function solution (number) {
    let sum = 0;
    for (var x=1;x<number;x++) {
        if (x % 3 === 0 || x % 5) {
            sum += x;
        }
    }
    return sum;
}

console.log(solution(78));


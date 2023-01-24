let a = [3,1,8,2,5];
let prevOverall = []

function lis(array) {
    let lengths = Array(array.length).fill(1);
    let prev = Array(array.length).fill(-1);

    for (let i = 1; i < array.length; i++) {
        let subprob = [];
        for (let j = 1; j < i; j++) {
            if (array[j] < array[i]) {
                subprob.push(lis(array.slice(j)));
                prev[i] = j
            }
        }
        lengths[i] = 1 + Math.max(...subprob);
    }
    prevOverall = prev;
    return Math.max(...lengths);
}
console.log(lis(a));
console.log(prevOverall);

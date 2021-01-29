//readonly 설정이 돼 있어서 도중 수정 불가.
let arrA: readonly number[] = [1,3,4,5];

arrA[0] = 123;

console.log(arrA);
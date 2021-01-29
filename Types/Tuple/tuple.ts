let tuple: [string,number];
tuple = ['a', 1]; // 정해진 타입, 고정된 길이.
tuple = ['b', 1]; // 재선언 된걸로 출력.
// tuple = ['a', 1, 2]; //error
// tuple = [1. 'a']; //error

console.log(tuple);
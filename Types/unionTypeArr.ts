// union type 다중 타입의 배열도 선언 가능.
let arr:(string | number)[] = ['Apple',1,2,'Banana',3];
let array: Array<string | number> = ['Mango',1,3, 'Banana'];

console.log(arr, array);

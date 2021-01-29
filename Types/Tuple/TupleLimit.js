//Tuple은 정해진 타입의 고정된 배열이지만 할당에 국한 된다.
// .push(), .splice() 등을 통해 넣는 행위는 막을 수 없다.
var data = ["hii", 3];
data.push(5);
console.log(data);

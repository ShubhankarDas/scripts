let data = [2, 2, 2, 2, 3, 3, 3, 3, 3, 2,5,5,5,5,6,6,6,6,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,120];
function solution(n) {
  let length = n.length;
  let mid = Math.floor(length / 2);
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (n[i] === n[mid]) {
      count++;
    }
  }
  if (2 * count > length) {
    console.log(n[mid]);
  } else {
    console.log(-1);
  }
}
console.time('FooTimer');
solution(data);
console.timeEnd('FooTimer');

console.log("working.. ");

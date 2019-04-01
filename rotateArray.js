let a = [1,2,3,4,5]
let d = 4;

function rotLeft(a, d) {
  let timeToRotate = d % a.length;
  console.log(timeToRotate)
  if(timeToRotate === 0){
    return a
  }
  timeToRotate = a.length - timeToRotate;
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    let newIndex = i + timeToRotate;
    if (newIndex > a.length - 1) {
      newIndex = (newIndex - (a.length - 1) - 1);
    }
    arr[newIndex] = a[i];
  }
  return arr
}

console.log(rotLeft(a,d));
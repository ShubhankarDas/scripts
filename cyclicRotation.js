let n = [1,2,3,4,5];
let k = 7;

function getNextIndex(length, current,rotation){
  let l = length;
  for(j = 0; j < rotation; j++){
    if(current === l-1){
      current = 0;
    }else {
      current++;
    }
  }
  return current;
}

function solution(data, rotation){
  let length = data.length;
  let actualRotation = rotation % length;
  let temp = 0, to = 0;
  let toSwap = data[0];
  if(actualRotation > 0){
    for(i = 0; i< length; i++){
      to = getNextIndex(data.length, to, actualRotation);
      temp = data[to];
      data[to] = toSwap;
      toSwap = temp;
    }
  }
  return data;
}

console.log(solution(n,k));
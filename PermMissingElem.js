let n = [1,3,4,5,6,7,8,10,9,2,12];

function solution(data){
  let length = data.length+1;
  let total = length*(length+1)/2;
  data.forEach(function(elem){
    total -= elem;
  })
  return total;
}

console.log(solution(n));
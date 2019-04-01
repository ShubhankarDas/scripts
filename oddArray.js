let n = [9,3,9,3,9,7,9];

function solution(data){
  data.sort(function(a,b){
    return a-b;
  });

  let i = 0;
  while (i < data.length){
    if(data[i] === data[i+1]){
      i+=2;
    }else{
      return data[i];
    }
  }
  return 0;
}

console.log(solution(n));
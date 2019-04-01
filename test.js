
let A = [ 1,2,3 ];
function solution(data) {
  data.sort(function(a,b){
    return a-b;
  });
  console.log(data);

  let res = 1;

  for(i = 0 ; i < data.length; i++){
    if (res < data[i]){
      return res;
    }
    if(data[i] === res){
      res++;
    }
  }
  return res++;
}

console.log(solution(A));
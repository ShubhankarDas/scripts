let N = 5;
let A = [3,4,4,6,1,4,4];

function solution(num, data){
  let res = new Array(num);
  let common = 0, max = 0;

  for (i = 0; i < data.length; i++) {
    if(data[i] >= 1 && data[i] <= num){
      if (res[data[i]-1] === undefined) {
        res[data[i] - 1] = common + 1;
      }else{
        res[data[i] - 1]++;
      }
      if (max < res[data[i] - 1]) {
        max = res[data[i] - 1];
      }
    }else if(data[i] === (num+1)){
      common = max;
      res = new Array(num);
    }
  }

  res = Array.from(res, item => item || common);

  return res;
}

console.log(solution(N,A));
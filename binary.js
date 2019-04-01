let n = 561892;

function solution(data) {
  let bin = data.toString(2);
  let longestGap = 0;
  let temp = 0;
  for(i = 1 ; i < bin.length; i++){
    if(bin[i] === '0' ){
      temp++;
    }
    else{
      if( temp>longestGap){
        longestGap = temp;
      }
      temp = 0;
    }
  }
  return longestGap;
};

console.log(solution(n));
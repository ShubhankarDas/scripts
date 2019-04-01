let A = [10, 10, -1, 2, 4, -1, 2, -1];

function solution(data){
  let min_pos = 0, min = data[0] + data[1] / 2;
  for (i = 1; i < data.length - 1 ; i++){
    if((data[i] + data[i+1] / 2) < min){
      min = (data[i] + data[i + 1] / 2);
      min_pos = i;
    }
    if ((data[i] + data[i + 1] + data[i-1]  / 3) < min) {
      min = (data[i] + data[i + 1] + data[i - 1] / 3);
      min_pos = i-1;
    }
  }

  return min_pos;
}

console.log(solution(A));
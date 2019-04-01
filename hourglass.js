let arr = [
            [-1, 1, -1, 0, 0, 0],
[0, -1, 0, 0, 0, 0],
[-1, -1, -1, 0, 0, 0],
[0, -9, 2, -4, -4, 0],
[-7, 0, 0, -2, 0, 0],
[0, 0, -1, -2, -4, 0],
          ]


function hourglassSum(arr) {
  let score;
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      let temp = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i+2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      if(!score && score != 0){
        score = temp;
      }
      if (temp > score) {
        score = temp;
      }
    }
  }
  return score;
}

console.log(hourglassSum(arr));
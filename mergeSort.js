let input = [4,3,2,1];

function mergeSort(arr, temp, left, end) {
  console.log(arr, temp, left, end)
  if (left >= end) {
    return;
  }
  let mid = Math.floor((left + end) / 2);
  mergeSort(arr, temp, left, mid);
  mergeSort(arr, temp, mid + 1, end);
  merge(arr, temp, left, end);
}

function merge(arr, temp, left, right) {
  let leftEnd = Math.floor((left + right) / 2);
  let rightStart = leftEnd + 1;
  let index = temp.length;

  while (left <= leftEnd && rightStart <= right) {
    if (arr[rightStart] > arr[left]) {
      temp[index] = arr[left];
      left++;
    } else {
      temp[index] = arr[rightStart];
      rightStart++;
    }
    index++;
  }

  if (left > leftEnd) {
    temp = temp.concat(arr.slice(rightStart, right + 1));
  } else {
    temp = temp.concat(arr.slice(left, leftEnd + 1));
  }
}

let temp = [];

mergeSort(input, temp, 0, input.length - 1);
console.log(temp);

let A = 6, B = 6, K = 2;

// function solution(first, last, div){
//   let count = 0;
//   if (first % div === 0) count++;
//   let pos = first + (div - (first % div));
//   if(pos <= last){
//     count++;
//     pos += div
//     while(pos <= last){
//       count++;
//       pos += div;
//     }
//   }
//   return count;
// }

function solution(first, last, div){
   let count = 0;
   count = Math.floor(last / div);
   count -= Math.floor((first -1) / div);

   return count;

}

console.log(solution(A,B,K));
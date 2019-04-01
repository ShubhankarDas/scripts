let S = "TC";
let P = [0, 0, 1];
let Q = [0, 1, 1];

  function getVal(s) {
    if(s.includes('A')){
      return 1;
    } else if (s.includes('C')) {
      return 2;
    } else if (s.includes('G')) {
      return 3;
    }else {
      return 4;
    }
  }

function getSub(d, f,l){
  let j = d.slice();
  if(f === l ){
    return [j[f]];
  }
  return j.slice(f,l+1);
}

function solution(data, p, q){
  let chars = data.split('');
  let res = [];
  for (i = 0; i < p.length; i++) {
    let sub = getSub(chars,p[i],q[i]);
    console.log(chars);
    console.log(sub);
    res.push(getVal(sub));
  }
  return res;
}

console.log(solution(S,P,Q));
// console.log(S.split('').slice(0,2));
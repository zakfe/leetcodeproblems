// /**
//  * @param {number[][]} mat
//  * @param {number} k
//  * @return {number[]}
//  */
mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];

var kWeakestRows = function(mat, k) {
    let hash = {}
    for (let i=0; i<mat.length; i++) {
        hash[i] = mat[i].reduce((a,b) => a+b,0);
    }
    
    return Object.keys(hash).sort((a,b) => hash[a] - hash[b]).slice(0,k)
};
console.log(kWeakestRows(mat, 2));

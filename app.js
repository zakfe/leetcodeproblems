mat=[[1,2,3],[4,5,6]]

const m = [
    mat.length,
    mat.reduce((x, y) => Math.max(x, y.length), 0)
];


console.log(m)
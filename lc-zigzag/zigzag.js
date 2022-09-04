var s = "TEVFIK"
var result = []

var convert = function(s, numRows) {
    const zigzag = [...new Array(numRows).keys()]
    zigzag.push(...zigzag.slice(1, -1).reverse())

    const rows = new Array(numRows).fill('');

    [...s].forEach((c, i) => (rows[zigzag[i % zigzag.length]] += c));

    return rows.join('')
};

console.log(convert(s,2))
//not completed || understand


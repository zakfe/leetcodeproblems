numRows = 6

zigzag = [...new Array(numRows).keys()]
zigzag.push(...zigzag.slice(1, -1).reverse())


console.log(zigzag)
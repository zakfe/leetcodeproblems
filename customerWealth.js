var accounts = [[1,5],[7,3],[3,5]]

var maximumWealth = function(accounts) {
    hash=[]
    for (let i=0; i< accounts.length; i++) {
        hash[i] = accounts[i].reduce((a,b) => a+b,0);
    }
    return Math.max(...hash)
}

console.log(maximumWealth(accounts))
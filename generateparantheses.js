var generateParenthesis = function(n) {
    const ans = [];
    
    function helper(open, close, str) {
        console.log("- i am helper open="+ open+ " close=" + close + " str="+ str);
        if (open === n && close === n) {
            ans.push(str);
            return;
        }
        
        if (open < n) {
            console.log("[open="+ open+ " close=" + close + "]-> I CALL : [open=" + (open+1) + ", close =" + close + "]");        
            helper(open + 1, close, str + '(');        //open 2 close 0 iki recursive ayağa ayrılıyor biri (()) çıktısı basarken diğer ayağı close 1 yaparak open 1 i aktifleştiriyor ()() şeklini ortaya çıkartıyor
        }
        
        if (close < open) {
            console.log("[open="+ open+ " close=" + close + "]-> I CALL : [open=" + open + ", close =" + (close+1) + "]");
            helper(open, close + 1, str + ')');
        }
    }
    
    helper(0, 0, '');
    
    return ans;
};

console.log(generateParenthesis(2));
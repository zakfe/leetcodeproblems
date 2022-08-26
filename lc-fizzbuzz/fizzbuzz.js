



var fizzBuzz = function(n) {
    let answer=[]
    for (let i=1; i < n+1; i++){
        if(i % 3 == 0 && i % 5 !=0){
            answer.push("Fizz")
        }
        else if (i % 5 == 0 && i % 3 !=0){
            answer.push("Buzz")
        }
        else if (i % 5 == 0 && i % 3 == 0){
            answer.push("FizzBuzz")
        }
        else {
            var iStr = i.toString()
            answer.push(iStr)
        }
        
    }
    return answer
};

console.log(fizzBuzz(15))
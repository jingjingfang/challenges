// // calculate a factorial
let number=1;
let num=5

for (var i=1; i<=num; i++) {
    number*=i;
}

console.log(number);//120




//use function to calculate a factorial
function factorialize(num1) {
  
    for (var answer=1; num1>0; num1--) {
     answer*=num1;
  }
  return answer;
  }
  
  factorialize(5);
  


  //option 3 to calculate a factorial
  function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  alert(factorialize(5));
  
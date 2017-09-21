function mathDo(num1, num2, operator){
  var result;
  switch(operator){
    case "+":
      result = num1+num2;
      break;
    case "-":
      result= num1-num2;
      break;
    case "*":
    case "x":
      result= num1*num2;
      break;
    case "/":
      result= num1/num2;
      break;
  };
  return result;
}

console.log(mathDo(1,5,"+"));
console.log(mathDo(2,8,"-"));
console.log(mathDo(56,2,"x"));
console.log(mathDo(2,12,"*"));
console.log(mathDo(2,4,"/"));


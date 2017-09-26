var arr =[0,1,1,2,3,5,8,13,21,34,55,89];

function fib(num){
  if(num===0){
    return 0;
  }else if(num==1){
    return 1;
  }else
    return fib(num-1)+fib(num-2);
}
console.log(fib(11));


function fibArr(num){
  if(num===0){
    return 0;
  }else if(num==1){
    return 1;
  }else
    return fib(num-1)+fib(num-2);
}

var returnArr = [];
for(var i=0; i <=5;i++){
  returnArr.push(fibArr(i));
}
console.log(returnArr);

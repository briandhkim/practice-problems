function arrRev(arr){
  var newArr = [];
  while(arr.length!==0){
    newArr.push(arr.pop());
  }
  return newArr;
}

console.log(arrRev([1,2,3,4,5]));
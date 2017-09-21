function random_range(min, max){
  if(max!==undefined){
    return Math.round((Math.random()*(max-min))+min);
  }else{
    var currIdx = min.length;
    var tempVal;
    var randIdx;
    
    while(0!==currIdx){
      randIdx = Math.floor(Math.random()*currIdx);
      currIdx -=1;
      
      tempVal = min[currIdx];
      min[currIdx] = min[randIdx];
      min[randIdx] = tempVal;
    }
    return min;
  }
    
}

// function random_range(arr){
//   var currIdx = arr.length;
//     var tempVal;
//     var randIdx;
    
//     while(0!==currIdx){
//       randIdx = Math.floor(Math.random()*currIdx);
//       currIdx -=1;
      
//       tempVal = arr[currIdx];
//       arr[currIdx] = arr[randIdx];
//       arr[randIdx] = tempVal;
//     }
//     return arr;
// }


console.log("range between 2-5: " + random_range(2,5));
console.log("range between 2-5: " + random_range(2,5));
console.log("range between 2-5: " + random_range(2,5));
console.log("range between 2-5: " + random_range(2,5));
console.log("range between 2-5: " + random_range(2,5));
console.log("range between 2-5: " + random_range(2,5));
console.log("range between 2-5: " + random_range(2,5));
console.log('range between 1-10: '+ random_range(1,10));
console.log('range between 1-10: '+ random_range(1,10));
console.log('range between 1-10: '+ random_range(1,10));
console.log('range between 1-10: '+ random_range(1,10));
console.log(random_range(5,1));

var arr =[2,5,8,15];
var arr2 = [1,5,9,11,12];
console.log('array scramble 1: ' +random_range(arr));
console.log('array scramble 2: ' +random_range(arr2));
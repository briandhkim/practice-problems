// var arr = {};

// console.log(typeof arr);

 function sortData(arr){
   var returnArr=[[],[],[],[]];
   for(var i=0; i<arr.length; i++){
     switch(typeof arr[i]){
       case 'object':
         returnArr[0].push(arr[i]);
         break;
       case 'string':
         returnArr[1].push(arr[i]);
         break;
       case 'number':
         returnArr[2].push(arr[i]);
         break;
       case 'boolean':
          returnArr[3].push(arr[i]);
         break;
     }
   }
   return returnArr;
 }

var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
console.log(sortData(myArray));
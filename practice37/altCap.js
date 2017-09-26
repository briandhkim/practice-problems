function altCap(str){
  str = str.split('');
  for(var i = 1; i<str.length; i+=2){
    str[i] = str[i].toUpperCase();
  }
  str = str.join('');
  return str;
}

console.log(altCap('capitalize'));
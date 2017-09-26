function vowels(str){
  str = str.toLowerCase();
  rStr = '';
  for(var i=0; i<str.length; i++){
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
      rStr+=str[i];
    }
  }
  return rStr;
}

console.log(vowels('four score and seven'));
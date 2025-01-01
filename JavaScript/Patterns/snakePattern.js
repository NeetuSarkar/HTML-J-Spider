function pattern(n){
  let temp = 1;
  for(let i = 1; i <= n; i++){
    for(let j = 1;j <= n; j++){
      pat+=temp;
    }
    if(i%2 == 0) temp = temp+n;
    
  }
}
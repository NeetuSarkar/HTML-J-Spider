function countOccurences(arr){
  return arr.reduce((count, num) =>{
    count[num] = (count[num] || 0)+1;
    return count;
  })
}
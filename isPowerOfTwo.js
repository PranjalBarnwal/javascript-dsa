function isPowerOfTwo(n){
  if(n<1){
    return false;
  }
  else{
    while(n>1){
        if(n%2!==0) return false;
        else n=n/2;
    }
    return true;
  }
}

console.log(isPowerOfTwo(8));

//O(log n)
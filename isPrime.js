function isPrime(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) 
      count++;
    
  }
  if (count > 2) return false;
  else return true;
}

console.log(isPrime(63));

//O(sqrt(n))

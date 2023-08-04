// function isPowerOfTwo(n){
//   if(n<1){
//     return false;
//   }
//   else{
//     while(n>1){
//         if(n%2!==0) return false;
//         else n=n/2;
//     }
//     return true;
//   }
// }

// console.log(isPowerOfTwo(8));

//O(log n)

//--------------------------

function isPowerOfTwo(n) {
    //using bitwise
    if (n < 1) return false;
    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(256));

//O(1)
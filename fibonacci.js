function findFib(n){
    const arr=[];
    let prev=0; let prev2=1; let num=0;
    for(let i=1;i<=n;i++){
      arr.push(num);
         num=prev+prev2;
          prev2=prev;
      prev=num;
    }
    return arr;
    
  }
  console.log(findFib(9));
  
  //time complexity o(n)
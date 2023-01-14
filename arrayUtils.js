const computeLargestEven=(input)=>{
    let max_elem=Number.MIN_VALUE;
    input.forEach((num)=>{
        if(num%2===0){
            max_elem=Math.max(max_elem,num);
        }
    })
    return max_elem===Number.MIN_VALUE ? -1:max_elem;
}
console.log(computeLargestEven([1,2,3,4,5]));
console.log(computeLargestEven([1, 3, 5, 7]));

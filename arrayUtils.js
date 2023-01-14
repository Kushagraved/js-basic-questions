const computeLargestEven=(input)=>{
    let max_elem=Number.MIN_VALUE;
    input.forEach((num)=>{
        if(num%2===0){
            max_elem=Math.max(max_elem,num);
        }
    })
    return max_elem===Number.MIN_VALUE ? -1:max_elem;
}
// console.log(computeLargestEven([1,2,3,4,5]));
// console.log(computeLargestEven([1, 3, 5, 7]));

const checkDigitsSame=(input)=>{
    if(input.toString().length===1){
        console.log("Consider numbers to have 2 digits or mor");
    }
    let temp=input;
    //let allSame=true;
    let prev;
    while(temp>0){
        let rem=temp%10;
        if(!prev || prev===rem){
            prev=rem;
        }
        else{
            return false;
        }
        temp=parseInt(temp/10);
    }
    return true;
}
console.log(checkDigitsSame(22));
console.log(checkDigitsSame(23));

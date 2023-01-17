const divideNumbers = (num1, num2) => {
  if(typeof(num1)!== 'number' || typeof(num2)!=='number'){
    
    throw new Error('inputs have to be a number');
  }
  if (num2 === 0) {
    throw new Error('Cant Divide a number by 0');
  }
  return num1 / num2;
};

console.log(divideNumbers(2,0));
module.exports={divideNumbers};
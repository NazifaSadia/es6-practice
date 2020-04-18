// function doubleIt(num){
//     return num*2;
// }


// const doubleIt = function MyFunc(num){
//     return num*2;
// }


// Arrow Function
// 1 parameter
const doubleIt = num => num*2;
const result = doubleIt(5);
console.log(result);

// 2 parameter
const add = (x,y) => x+y;
const sum = add(5,7);
console.log(sum);

// No parameter
const give5 = () => 5;
const result2 = give5();
console.log(result2);

// Large Arrow Function
const calculation = (x , y) =>{
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}
const result3 = calculation(7,5);
console.log(result3);
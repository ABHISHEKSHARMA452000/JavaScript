//similar to push 
//front of array ma one or more value add karta hai
//return length of array
let arr = [10,20,30,40,50];
display(arr);
//2.
arr.unshift(50);
display(arr);
//3.
arr.unshift(60,70,80,90);
display(arr);
//4.
let rv = arr.unshift(100);
console.log(rv);

function display(arr){
    console.log(arr + " = " + arr.length);
} 
//add one or more value in last of the array
//return value of this is length of array
//1.
let arr = [10,20,30,40,50];
display(arr);
//2.
arr.push(50);
display(arr);
//3.
arr.push(60,70,80,90);
display(arr);
//4.
let rv = arr.push(100);
console.log(rv);

function display(arr){
    console.log(arr + " = " + arr.length);
}  
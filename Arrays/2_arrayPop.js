//remove one value from the end 
//and return the pop value

let arr = [10,20,30,40,50];
display(arr);
//1.
let rv = arr.pop();
display(arr);
console.log(rv);
//2.
arr[10] = 500;
display(arr);//no array index out of bount exception in js
//3.
arr["kuchbhi"] = 1000;//every array can be used as object also
display(arr);
console.log(arr["kuchbhi"]);



function display(arr){
    console.log(arr + " = " + arr.length);
} 
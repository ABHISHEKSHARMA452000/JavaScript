 //similar to pop
 //front sa remove karta hai and wahi return bhi karta hai
let arr = [10,20,30,40,50];
display(arr);
//2.
arr.shift();
display(arr);
//3.
let rv = arr.shift();
console.log(rv);

function display(arr){
    console.log(arr + " = " + arr.length);
}

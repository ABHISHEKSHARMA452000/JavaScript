let arr = [10,20,30,40,50];
//arr.splice(kis index sa start,kitni index item remove,1st item add,2nd item add,......);
//return kara ga ek array jo remove hua hai items arr ma sa
let na = arr.splice(2,2,300,400,500);

display(arr);//10 20 300 400 500 50
display(na);//30 40

function display(arr){
    console.log(arr + " = " + arr.length);
} 
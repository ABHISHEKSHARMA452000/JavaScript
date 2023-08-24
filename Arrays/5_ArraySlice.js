//like substring
//start inclusive and end exclusive
//1.
let arr = [10,20,30,40,50];
let na1 = arr.slice(1,4);
//let na2 = arr.slice(-1,-3) null milaga
let na2 = arr.slice(-3,-1);//-1 for last index and forward moving ma according hi index laga
let na3 = arr.slice(1,-2);
display(na1);
display(na2);
display(na3);
//2.here no problem new array bana auski index ma change aaya hai but problem in case of object ka array ma
let na4 = arr.slice();
display(na4);
na4[1] = 100;
display(na4);
display(arr);

//3.shallow copy
let o1 = {
    age : 100
}
let o2 = {
    age : 200
}
let o3 = {
    age : 300
} 
let objarr = [o1,o2,o3];
displayObjArr(objarr);//100, 200, 300, .
let sarr = objarr.slice();
displayObjArr(sarr);//100, 200, 300, .
//yaha par address same vali problem aa gayi
sarr[0].age = 110;
displayObjArr(sarr);//110, 200, 300, .
displayObjArr(objarr);//110, 200, 300, .

function display(arr){
    console.log(arr + " = " + arr.length);
}
function displayObjArr(arr){
    let str = "";
    for(let i=0;i<arr.length;i++){
        str += arr[i].age + ", ";
    }
    console.log(str + ".");
} 
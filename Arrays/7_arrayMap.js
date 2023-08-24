//Map is itself a function
//map takes as input a callback fn (function ka andar function in parameter)
//the callback function takes 3 parameter (value,index,arr)
//map will call the callback multiple times(once for each value in arr)
//for each run of callback,map will pass v,i,and original array to callback
//callback will process the value and index and return a single value
//single value returned by each run of callback will be collected in a new array
//map return that new array
//length of return array is equal to original array


let arr = [2,5,9,8,15,11,6];

let sarr = arr.map(function(v,i,oarr){
    //console.log(v+"@"+i+"=["+oarr + "]");
    return v*v;
});

console.log(sarr);

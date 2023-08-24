//filter is itself a function
//filter takes as input a callback fn (function ka andar function in parameter)
//the callback function takes 3 parameter (value,index,arr)
//filter will call the callback multiple times(once for each value in arr)
//for each run of callback,filter will pass v,i,and original array to callback
//callback will process the value and index and return a single boolean value for each call to it from filter
//single value returned by each run of callbackwill be used by filter
//whenever a true is recieved by filter(returned by callback) then filter adds the v to a new array
//filter return that new array
//length of return array is equal to number of trues returned by callback

let arr = [2,5,9,8,15,11,6];

let oarr = arr.filter(function(v,i,oarr){
    //console.log(v+"@"+i+"=["+oarr + "]");
    if(v%2 == 1){
        return true;
    }else{
        return false;
    }
});
console.log(oarr);
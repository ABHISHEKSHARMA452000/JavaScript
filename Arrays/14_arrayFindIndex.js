Array.prototype.mySome2 = function(callback){
    
    for(let i=0;i<this.length;i++){
        let v = this[i];
        let rbv = callback(this[i],i,this);
        if(rbv == true){
            return i;
        }
    }
    return -1;
}


//similar to some first valid ki index return kar deta hai ya

let arr = [
    {name:"A",age:14,gender:"M"},
    {name:"B",age:34,gender:"M"},
    {name:"C",age:24,gender:"F"},
    {name:"D",age:23,gender:"F"},
    {name:"E",age:44,gender:"M"},
    {name:"F",age:28,gender:"F"},
    {name:"G",age:36,gender:"M"},
    {name:"H",age:27,gender:"F"}
];

let fvci = arr.findIndex(function(v,i,oarr){
    if(v.gender == "F" && v.age >= 20 && v.age <= 30){
        return true;
    }else{
        return false;
    }
})
if(fvci != -1){
    console.log(fvci);
    console.log(arr[fvci].name + "@" + arr[fvci].age + "=" + arr[fvci].gender);
}else{
    console.log(-1);
}

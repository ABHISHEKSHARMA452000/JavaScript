Array.prototype.myfind = function(callback){
    
    for(let i=0;i<this.length;i++){
        let v = this[i];
        let rbv = callback(this[i],i,this);
        if(rbv == true){
            return v;
        }
    }
    return undefined;
}


//similar to some 
//return first valid candidate jispa condition true aayi hai 
//find gives value against first true,if there is no then return undefined


let arr = [
    {name:"A",age:14,gender:"M"},
    {name:"B",age:34,gender:"M"},
    {name:"C",age:34,gender:"F"},
    {name:"D",age:44,gender:"F"},
    {name:"E",age:44,gender:"M"},
    {name:"F",age:48,gender:"F"},
    {name:"G",age:36,gender:"M"},
    {name:"H",age:47,gender:"F"}
];

let fvc = arr.find(function(v,i,oarr){
    if(v.gender == "F" && v.age >= 20 && v.age <= 30){
        return true;
    }else{
        return false;
    }
})
if(fvc != undefined){
    console.log(fvc.name + "@" + fvc.age + "=" + fvc.gender);
}else{
    console.log(undefined);
}



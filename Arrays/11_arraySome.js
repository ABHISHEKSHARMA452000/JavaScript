//custom some

Array.prototype.mySome1 = function(callback){
    let check = false;
    for(let i=0;i<this.length;i++){
        let rbv = callback(this[i],i,this);
        check = rbv||check;
    }
    return check;
}
Array.prototype.mySome2 = function(callback){
    
    for(let i=0;i<this.length;i++){
        let rbv = callback(this[i],i,this);
        if(rbv == true){
            return true;
        }
    }
    return false;
}


//just like or operator
//takes each value one at a time in callback fuction
//it return either true or false koi array return nhi karta 
//return true if anyone in callback return true 
//return false only when all the callbacks return false

let arr = [
    {name:"A",age:14,gender:"M"},
    {name:"B",age:34,gender:"M"},
    {name:"C",age:24,gender:"F"},
    {name:"D",age:44,gender:"F"},
    {name:"E",age:44,gender:"M"},
    {name:"F",age:78,gender:"F"},
    {name:"G",age:36,gender:"M"},
    {name:"H",age:47,gender:"F"}
];
//Is there a valid condidate (F and between 20 and 30)
let isvalid1 = arr.some(function(v,i,oarr){
    if(v.gender == "F" && v.age >= 20 && v.age <= 30){
        return true;
    }else{
        return false;
    }
})
console.log(isvalid1);
//custom use
let isvalid2 = arr.mySome(function(v,i,oarr){
    if(v.gender == "F" && v.age >= 20 && v.age <= 30){
        return true;
    }else{
        return false;
    }
})
console.log(isvalid2);


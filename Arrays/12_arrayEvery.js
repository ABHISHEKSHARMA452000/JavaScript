//custom every
Array.prototype.myEvery = function(callback){
    
    for(let i=0;i<this.length;i++){
        let v = this[i];
        let rbv = callback(v,i,this);
        if(rbv == false){
            return false;
        }
    }
    return true;
}


//similar to and operator
//for each value ka liya ek baar callback chalaga 
//it will return true or false only not any array
//it will return true if all callbacks return true otherwise return false

let arr = [
    {name:"A",age:14,gender:"M"},
    {name:"B",age:34,gender:"M"},
    {name:"C",age:24,gender:"F"},
    {name:"D",age:23,gender:"F"},
    {name:"E",age:44,gender:"M"},
    {name:"F",age:28,gender:"F"},
    {name:"G",age:36,gender:"M"},
    {name:"H",age:47,gender:"F"}
];

//check for all female candidates valid or not
let res = arr.filter(v => v.gender == "F").every(v => v.age >= 20 && v.age <= 30)
console.log(res);



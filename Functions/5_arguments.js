function fn(para1,para2){
    console.log(arguments);
    console.log("Hello", para1, para2);
}

//number of arguments sa koi porblem nhi ho rahi hai aasi kuch in fn ma 
fn();//[Arguments] {} Hello undefined undefined
fn("hello");//[Arguments] { '0': 'hello' }  Hello hello undefined
fn("hello","hi");//Hello hello hi  [Arguments] { '0': 'hello', '1': 'hi' }
fn("hello","hi","bye");//[Arguments] { '0': 'hello', '1': 'hi', '2': 'bye' } Hello hello hi

//actual ma sabsa phele ya parameter ek argument ka array ma ja kar save hota hai then function ka parameter ma copy 
//so es baat sa faarak nhi padtha kitna argument pass hua 


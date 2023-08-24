//4-->Pillars of Dom manipulation
//1. selection of Html element
//2. change in html
//3. change in css
//4. Event Listener == event on website it can be hover,click etc type and uun event ko sunna vala and kuch function perform karna vala listener 

//1.
var a =  document.querySelector("h1"); //selection of html element 
// a.innerHTML = "innerhtml sa dom" //html ma change
// a.style.color = "red";//css change ka liya
// a.style.backgroundColor = "#000";//css change ka liya

a.addEventListener("click",function(){
    a.innerHTML = "Badal gaya hai tu bhi ex ki tarah";
    a.style.color = "yellow";
    a.style.backgroundColor = "#000";
})











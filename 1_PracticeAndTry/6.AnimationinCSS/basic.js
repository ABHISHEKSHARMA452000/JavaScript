let a = document.querySelector("h1");

a.addEventListener("click",function(){
    a.innerHTML = "world";
    a.style.color = "red";
    a.style.backgroundColor = "yellow";
});
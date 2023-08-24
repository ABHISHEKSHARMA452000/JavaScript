function myfunction(){
            let text;
            let name = window.prompt("I am a Prompt takes value from user","No-name");
            if(name == null || name == ""){ //null milaga in case of cancel
                text = "You Pressed cancel or enter no value";
            }else{
                text = "Hello " + name + " ,How are you?";
            }
            document.getElementById("demo").innerHTML = text;
        }
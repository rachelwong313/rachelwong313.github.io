function greetings(){
    alert("Hello, world!");
    document.getElementById("text").style.fontSize = "24pt";
}

function boldIt(){
    alert("Now that's fancy!");
    document.getElementById("fancify").style.fontWeight = "bold";
    document.getElementById("fancify").style.color = "blue";
    document.getElementById("fancify").style.textDecoration = "underline";
}

function plainIt(){
    document.getElementById("fancify").style.fontWeight = "normal";
}

function upperCaseIt(){
    var upperCase= document.getElementById("text");
    upperCase.value = upperCase.value.toUpperCase();
    var str = "How are you?"
    var parts = str.split(".");  // ["How", "are", "you?"]
    str = parts.join("-Moo");       // "How_are_you?"
}
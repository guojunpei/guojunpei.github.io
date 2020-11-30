let pwd2=document.getElementById("repwd").value;
let pwd2BC=document.getElementById("repwd").style.borderColor;
let pwd1=document.getElementById("pwd").value;

function testSame(){
    if(pwd1===pwd2){
        pwd2="must be same twice!";
        pwd2BC="red";
    }else{
        pwd2BC="green";
    }
}

document.querySelector("btn").addEventListener("submit",testSame());
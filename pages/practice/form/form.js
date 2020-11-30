let pwd2=document.getElementById("repwd").value;
let pwd2BC=document.getElementById("repwd").style.borderColor;
let pwd1=document.getElementById("pwd").value;
//let warm=;

function testSame(){
    if(pwd1===pwd2){
        pwd2BC="green";
    }else{
        //warm="repeat password must be same twice!";
        pwd2BC="red";
    }
}

document.getElementById("repwd").addEventListener("focusout",testSame());

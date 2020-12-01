

function testSame(e){
    let pwd2=document.getElementById("repwd").value;
    let pwd1=document.getElementById("pwd").value;
    let pwd2BC=document.getElementById("repwd").style.border;
    //let warm=;
    e.preventDefault();

    if(pwd1===pwd2){
        pwd2BC="0.1rem solid green";
    }else{
        //warm="repeat password must be same twice!";
        pwd2BC="0.1rem dashed red";
    }
}

document.querySelector("form").addEventListener("submit",testSame());
//document.getElementById("repwd").addEventListener("focusout",testSame());

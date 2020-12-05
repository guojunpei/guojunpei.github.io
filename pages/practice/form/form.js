
function testSame(){
    console.log("testSame work!")
    let pwd2=document.getElementById("repwd").value;
    let pwd1=document.getElementById("pwd").value;
    let pwd2BC=document.getElementById("repwd").style.border;

    if(pwd1===pwd2){
        pwd2BC="0.1rem solid green";
    }else{
        pwd2BC="0.1rem dashed red";
    }
}

document.getElementById("repwd").addEventListener('focusout',testSame());

let form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    new FormData(form);
    console.log(e);
});

form.addEventListener("formdata",(e)=>{
    const obj = Object.fromEntries(e.formData);
    console.log(obj);
    let content="";
    for(let [k,v] of obj){content=content+k+":"+v+";";}
    document.getElementById("show-form-data").innerText = content;
});
/*
let formMain=document.querySelector("form");

formMain.addEventListener("submit",(e)=>{
    e.preventDefault();
    new FormData(formMain);
    //console.log(e);
    //console.log(new FormData(formMain));
});

formMain.addEventListener("formdata",(e)=>{
    //console.log("formdata fired");
    const obj = Object.fromEntries(e.formData);
    //console.log(obj);
    document.getElementById("show-name").innerText = obj["name"];
})

*/

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    document.getElementById("show-name").innerText=document.getElementById("name").value;
    document.getElementById("show-name").style.color=document.getElementById("color").value;
    document.getElementById("show-name").style.backgroundColor=document.getElementById("backgroundcolor").value;
})

document.getElementById("full-screen").addEventListener("click",()=>{
    document.getElementById("show-name").innerText=document.getElementById("name").value;
    document.getElementById("show-name").style.color=document.getElementById("color").value;
    document.getElementById("show-name").style.backgroundColor=document.getElementById("backgroundcolor").value;
    document.querySelector("form").style.display="none";
    document.getElementById("show-name").style.fontSize=`${window.innerHeight/2}px`;
})


//document.getElementById("preview").addEventListener("click",document.getElementById("show-name").innerText=document.getElementById("name").value);

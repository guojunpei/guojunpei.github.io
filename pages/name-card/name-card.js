
let formMain=document.querySelector("form");

formMain.addEventListener("submit",(e)=>{
    new FormData(formMain);
});

formMain.addEventListener("formdata",(e)=>{
    console.log("formdata fired");
    let data=e.FormData;
    for(let value of data.values()){
        console.log(value);
    }
    document.getElementById("show-name").innerText=data.value;
})


/*

document.querySelector("form").addEventListener("submit",()=>{
    document.getElementById("show-name").innerText=document.getElementById("name").value;
})
*/

//document.getElementById("preview").addEventListener("click",document.getElementById("show-name").innerText=document.getElementById("name").value);

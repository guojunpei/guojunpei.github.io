let formMain=document.querySelector("form");
formMain.addEventListener("submit",(e)=>{
    new FormData(formMain);
});

formMain.addEventListener("formdata",(e)=>{
    console.log("formdata fired");
    let data=e.FormData;
    for(let v of data.values()){
        console.log(v);
    }
        
})

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
    if(window.innerHeight<window.innerWidth){
        if(window.innerHeight>window.innerWidth/(document.getElementById("name").value.length+1)){
            document.getElementById("show-name").style.fontSize=`${window.innerWidth*0.9/(document.getElementById("name").value.length)}px`;
        }else{
            document.getElementById("show-name").style.fontSize=window.innerWidth*0.8;
        }
    }else{
        if(window.innerWidth>window.innerHeight/(document.getElementById("name").value.length+1)){
            document.getElementById("show-name").style.fontSize=`${window.innerHeight*0.9/(document.getElementById("name").value.length)}px`;
        }else{
            document.getElementById("show-name").style.fontSize=window.innerWidth*0.8;
        }
    }
})

window.addEventListener("resize",()=>{
    if(document.querySelector("form").style.display==="none"){
        if(window.innerHeight<window.innerWidth){
            if(window.innerHeight>window.innerWidth/(document.getElementById("name").value.length+1)){
                document.getElementById("show-name").style.fontSize=`${window.innerWidth*0.9/(document.getElementById("name").value.length)}px`;
            }else{
                document.getElementById("show-name").style.fontSize=window.innerWidth*0.8;
            }
        }else{
            if(window.innerWidth>window.innerHeight/(document.getElementById("name").value.length+1)){
                document.getElementById("show-name").style.fontSize=`${window.innerHeight*0.9/(document.getElementById("name").value.length)}px`;
            }else{
                document.getElementById("show-name").style.fontSize=window.innerWidth*0.8;
            }
        }
    }
});


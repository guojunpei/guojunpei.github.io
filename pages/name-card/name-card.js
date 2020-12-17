
function smallTextFontSizeControl(){
    if(window.innerHeight<window.innerWidth){

    }else{
        for(let v of document.querySelectorAll("label")){
            v.style.fontSize=`${window.innerWidth/15}px`;
        }
        
        for(let v of document.querySelectorAll("input")){
            v.style.fontSize=`${window.innerWidth/15}px`;
        }
        
        for(let v of document.querySelectorAll("button")){
            v.style.fontSize=`${window.innerWidth/15}px`;
        }

        document.getElementById("show-name").style.fontSize=`${window.innerWidth/5}px`;

    }
    
}

smallTextFontSizeControl()

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    document.getElementById("show-name").innerText=document.getElementById("name").value;
    document.getElementById("show-name").style.color=document.getElementById("color").value;
    document.getElementById("show-name").style.backgroundColor=document.getElementById("backgroundcolor").value;
})

function largeTextFontSizeControl(){
    if(window.innerHeight<window.innerWidth){
        if(window.innerHeight>window.innerWidth*0.8/(document.getElementById("name").value.length)){
            document.getElementById("show-name").style.fontSize=`${window.innerWidth*0.8/(document.getElementById("name").value.length)}px`;
        }else{
            document.getElementById("show-name").style.fontSize=window.innerWidth*0.8;
        }
    }else{
        if(window.innerWidth>window.innerHeight*0.8/(document.getElementById("name").value.length)){
            document.getElementById("show-name").style.fontSize=`${window.innerHeight*0.8/(document.getElementById("name").value.length)}px`;
        }else{
            document.getElementById("show-name").style.fontSize=window.innerWidth*0.8;
        }
    }
}

document.getElementById("full-screen").addEventListener("click",()=>{
    document.getElementById("show-name").innerText=document.getElementById("name").value;
    document.getElementById("show-name").style.color=document.getElementById("color").value;
    document.getElementById("show-name").style.backgroundColor=document.getElementById("backgroundcolor").value;
    document.querySelector("form").style.display="none";
    largeTextFontSizeControl();
})

window.addEventListener("resize",()=>{
    if(document.querySelector("form").style.display==="none"){
        largeTextFontSizeControl();
    }else{
        smallTextFontSizeControl()
    }
});


function fontSizeControl(n){
    document.getElementById("show-name").style.fontSize=`${n*3}px`;

    for(let v of document.querySelectorAll("label")){
        v.style.fontSize=`${n}px`;
    }
    
    for(let v of document.querySelectorAll("input")){
        v.style.fontSize=`${n}px`;
    }
    
    for(let v of document.querySelectorAll("button")){
        v.style.fontSize=`${n}px`;
    }
}

function CN(){
    document.getElementById("show-name").innerText="名字";
    document.querySelectorAll("label")[0].innerText="输入名字或文字";
    document.querySelectorAll("label")[1].innerText="选择文字颜色";
    document.querySelectorAll("label")[2].innerText="选择文字背景颜色";
    document.getElementById("preview").innerText="预览";
    document.getElementById("full-screen").innerText="全屏显示";
}

function EN(){
    document.getElementById("show-name").innerText="name";
    document.querySelectorAll("label")[0].innerText="Enter new name:";
    document.querySelectorAll("label")[1].innerText="Choose text color:";
    document.querySelectorAll("label")[2].innerText="Choose backgroundcolor:";
    document.getElementById("preview").innerText="Preview";
    document.getElementById("full-screen").innerText="Full screen";
}

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

if(navigator.language==="zh-CN"){
    CN();
}else{
    EN();
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
        if(window.innerHeight>window.innerWidth/(document.getElementById("name").value.length)){
            document.getElementById("show-name").style.fontSize=`${window.innerWidth/(document.getElementById("name").value.length)}px`;
        }else{
            document.getElementById("show-name").style.fontSize=window.innerWidth;
        }
    }else{
        if(window.innerWidth>window.innerHeight/(document.getElementById("name").value.length)){
            document.getElementById("show-name").style.fontSize=`${window.innerHeight/(document.getElementById("name").value.length)}px`;
        }else{
            document.getElementById("show-name").style.fontSize=window.innerWidth;
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


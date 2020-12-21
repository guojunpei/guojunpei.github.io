
const inputName=document.getElementById("name");
const showName=document.getElementById("show-name");
const form=document.getElementById("form");


function fontSizeControl(n){
    showName.style.fontSize=`${n*3}px`;

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
    showName.innerText="名字";
    document.querySelectorAll("label")[0].innerText="输入名字或文字";
    document.querySelectorAll("label")[1].innerText="选择文字颜色";
    document.querySelectorAll("label")[2].innerText="选择文字背景颜色";
    document.getElementById("preview").innerText="预览";
    document.getElementById("full-screen").innerText="全屏显示";
}

function EN(){
    showName.innerText="name";
    document.querySelectorAll("label")[0].innerText="Enter new name:";
    document.querySelectorAll("label")[1].innerText="Choose text color:";
    document.querySelectorAll("label")[2].innerText="Choose backgroundcolor:";
    document.getElementById("preview").innerText="Preview";
    document.getElementById("full-screen").innerText="Full screen";
}

if(navigator.language==="zh-CN"){
    CN();
}else{
    EN();
}

function smallTextFontSizeControl(){
    let n=0;
    if(window.innerHeight<window.innerWidth){
        document.getElementById("name-container").style.flexDirection="row";
        document.getElementById("color-container").style.flexDirection="row";
        document.getElementById("bg-container").style.flexDirection="row";
        n=window.innerHeight/15;
        fontSizeControl(n);
    }else{
        document.getElementById("name-container").style.flexDirection="column";
        document.getElementById("color-container").style.flexDirection="column";
        document.getElementById("bg-container").style.flexDirection="column";
        n=window.innerWidth/15;
        fontSizeControl(n)
    }
    
}

function largeTextFontSizeControl(){
    if(window.innerHeight<window.innerWidth){
        if(window.innerHeight>window.innerWidth/(inputName.value.length)){
            showName.style.fontSize=`${window.innerWidth/(inputName.value.length)}px`;
        }else{
            showName.style.fontSize=window.innerWidth;
        }
    }else{
        if(window.innerWidth>window.innerHeight/(inputName.value.length)){
            showName.style.fontSize=`${0.7*window.innerHeight/(inputName.value.length)}px`;
        }else{
            showName.style.fontSize=window.innerWidth;
        }
    }
}

function previewName(){
    if(inputName.value===""){if(navigator.language==="zh-CN"){
        inputName.value==="名字";
    }else{
        inputName.value==="name";
    }}
    showName.innerText=inputName.value;
    console.log(inputName.value);
    showName.style.color=document.getElementById("color").value;
    showName.style.backgroundColor=document.getElementById("backgroundcolor").value;
}

function fullScreenName(){
    if(inputName.value===""){if(navigator.language==="zh-CN"){
        inputName.value==="名字";
    }else{
        inputName.value==="name";
    }}
    showName.innerText=inputName.value;
    showName.style.color=document.getElementById("color").value;
    showName.style.backgroundColor=document.getElementById("backgroundcolor").value;
    form.style.display="none";
    largeTextFontSizeControl();
}

smallTextFontSizeControl();

window.addEventListener("resize",()=>{
    if(form.style.display==="none"){
        largeTextFontSizeControl();
    }else{
        smallTextFontSizeControl()
    }
});


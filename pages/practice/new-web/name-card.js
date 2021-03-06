
const inputName=document.getElementById("name");
const showName=document.getElementById("show-name");
const form=document.getElementById("form");
const webTitle=document.getElementById("web-head");
const webBody=document.getElementById("web-body");

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
    document.getElementById("color").style.width=`${2*n}px`;
    document.getElementById("color").style.height=`${n}px`;
    document.getElementById("backgroundcolor").style.width=`${2*n}px`;
    document.getElementById("backgroundcolor").style.height=`${n}px`;
}

function largeTextFontSizeControl(){
    if(window.innerHeight<window.innerWidth){
        if(window.innerHeight>window.innerWidth/(inputName.value.length)){
            showName.style.fontSize=`${0.7*window.innerWidth/(inputName.value.length)}px`;
        }else{
            showName.style.fontSize=`${0.7*window.innerHeight}px`;
        }
    }else{
        showName.style.writingMode="vertical-lr";
        if(window.innerWidth>window.innerHeight/(inputName.value.length)){
            showName.style.fontSize=`${0.7*window.innerHeight/(inputName.value.length)}px`;
        }else{
            showName.style.fontSize=`${0.7*window.innerWidth}px`;
        }
    }
}

function previewName(){
    if(inputName.value===""){
        if(navigator.language==="zh-CN"){
            showName.innerText="名字";
        }else{
            showName.innerText="name";
        }
    }else{
        showName.innerText=inputName.value;
    }
    showName.style.color=document.getElementById("color").value;
    showName.style.backgroundColor=document.getElementById("backgroundcolor").value;
}

function fullScreenName(){
    if(inputName.value===""){
        if(navigator.language==="zh-CN"){
            showName.innerText="名字";
        }else{
            showName.innerText="name";
        }
    }else{
        showName.innerText=inputName.value;
    }
    showName.style.color=document.getElementById("color").value;
    showName.style.backgroundColor=document.getElementById("backgroundcolor").value;
    form.style.display="none";
    webTitle.style.display="none";
    webBody.className="my-body-hide";
    document.getElementById("main-wrap").style.padding="0";
    document.getElementById("main-wrap").style.borderRadius="0";
    document.getElementById("enter-pic").style.display="none";
    document.getElementById("content-head-containner").style.display="none";
    document.getElementById("profile-content").style.display="none";
    document.getElementById("favourite-content").style.display="none";
    document.getElementById("photography-content").style.display="none";
    document.getElementById("caculator-content").style.display="none";
    document.getElementById("TTTG-content").style.display="none";
    document.getElementById("inner-heads-containner").style.display="none";
    document.getElementById("contect-content").style.display="none";

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

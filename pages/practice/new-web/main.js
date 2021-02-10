
function pushSameClassIdIntoList(className){
    let l=[];
    for(let e of document.querySelectorAll(className)){
        l.push(e.id)
    }
    return l;
}

let h1L=pushSameClassIdIntoList(".my-h1");
let h2L=pushSameClassIdIntoList(".my-h2");
let h3L=pushSameClassIdIntoList(".my-h3");

let c1L=pushSameClassIdIntoList(".my-c1");
let c2L=pushSameClassIdIntoList(".my-c2");
let c3L=pushSameClassIdIntoList(".my-c3");

function changecontent(headId){
    if(h1L.indexOf(headId)>-1){
        let n=h1L.indexOf(headId);
        document.getElementById(c1L[n]).style.display="flex";

        let l=c1L.splice(n);
        for(let otherId of l){
            document.getElementById(otherId).style.display="none";
            console.log(otherId);
        }

    }else if(h2L.indexOf(headId)>-1){
        let n=h2L.indexOf(headId);
        document.getElementById(c2L[n]).style.display="flex";
        let old=c2L;
        let l=c2L.splice(n);
        for(let otherId of l){
            document.getElementById(otherId).style.display="none";
        }
        c2L=old;
    }else if(h3L.indexOf(headId)>-1){
        let n=h3L.indexOf(headId);
        document.getElementById(c3L[n]).style.display="flex";
        let old=c3L;
        let l=c3L.splice(n);
        for(let otherId of l){
            document.getElementById(otherId).style.display="none";
        }
        c3L=old;
    }
}




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

    let l=c3L.splice("NC-content");

    for(let id of h1L){
        l.push(id);
    }

    for(let id of h2L){
        l.push(id);
    }
    
    for(let id of h3L){
        l.push(id);
    }

    for(let otherId of l){
        document.getElementById(otherId).style.display="none";
        console.log(otherId);
    }
    
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
const containnerMain=document.getElementById("container");

let mainId="container";

let fileNames=[];
for(let i=1;i<9;i++){
    fileNames.push(`text${i}`);
}

function addContainnerEls(fileNames){
    for(let fileName of fileNames ){
        const containerEl=document.createElement("div");
        containerEl.id=`${mainId}${fileName}`;
        containerEl.className="borders";
        containerEl.innerHTML=`<small>${fileName}</small>`;
        containnerMain.appendChild(containerEl);
    }
}

const filesPath="https://guojunpei.github.io/pages/practice/fetch/";

let randomTime=1000;
let baseTime=500;

function delayPromise(text){
    console.log(text);
    return new Promise((resolve)=>{
        setTimeout(resolve,Math.random()*randomTime+baseTime,text)
    })
}
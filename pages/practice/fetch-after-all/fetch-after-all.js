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
/*
function delayPromise(text){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            return resolve(text);
        },Math.random()*randomTime+baseTime,)
    })
}
*/

function getFile(fileName){
    console.log(`${filesPath}${fileName}.md`);
    return fetch(`${filesPath}${fileName}.md`)
    .then((response)=>response.text())
    .then((text)=>delayPromise(text));
}

function loadText(mainId,fileName,text){
    document.getElementById(`${mainId}${fileName}`).innerHTML=`<small>${fileName}</small><p>${text}</p>`;
}

function afterAll(fileNames,mainId){
    let promiseArry=[];
    for(let fileName of fileNames){
        promiseArry.push(getFile(fileName));
    };
    Promise.all(promiseArry).then((tests)=>{
        for(let i=1;i<fileNames.length+1;i++){
            loadText(mainId,`text${i}`,tests[i-1]);
        }
    });
}

document.querySelector("button").addEventListener("click",()=>{
    addContainnerEls(fileNames);
    afterAll(fileNames,mainId);
})
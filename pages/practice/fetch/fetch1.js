
const containner1=document.getElementById("one-by-one");

let fileNames=[];
for(let i=1;i<9;i++){
    fileNames.push(i);
};

const textContainerIdPrefix = "tcp";

const filesPath="https://guojunpei.github.io/pages/practice/fetch/";

let baseTime=1000;
let randomTime=500;

function delayPromise(value){
    return new Promise((r)=>{
        window.setTimeout(function(){
            return r(value);
        },Math.random()*randomTime+baseTime);
    });
}

function getFile(n){
    return fetch(`${filesPath}text${n}.md`)
    .then(response=>response.text())
    .then((text)=>delayPromise(text));
}

function addContainners(fileNames){
    for (const name of fileNames) {
        const divEl = document.createElement("div");
        divEl.style.padding = "1rem";
        divEl.style.margin = "0.2rem";
        divEl.style.border = "dashed gray";
        divEl.id = `${textContainerIdPrefix}${name}`;
        containner1.appendChild(divEl);
      }
}

function loadText(fileName, text){
    const containerEl = document.querySelector(`#${textContainerIdPrefix}${fileName}`);
    if(containerEl!==""){
        containerEl.innerHTML = `<small>${fileName}</small><p>${text}</p>`;
    }
}

function oneByOne(urls,index=0){
    if (!urls || !urls[index]) return;
    getFile(urls[index]).then((response)=>{
        loadText(urls[index], response);
        if(index+1<urls.length){
            oneByOne(urls, index + 1);
        }
    });
};

document.querySelector("button").addEventListener("click",()=>{
    addContainners(fileNames)
    oneByOne(fileNames);
})

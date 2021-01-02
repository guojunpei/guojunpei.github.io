let baseTime=1000;
let randomTime=500;
const filesPath="https://guojunpei.github.io/pages/practice/fetch/";
function delayPromise(value){
    window.setTimeout(function(){
        return value;
    },Math.random()*randomTime+baseTime);
}

let urlL=[];
for(let i=0;i<8;i++){
    urlL.push(`${filesPath}text${i}`);
};

const containner1=document.getElementById("one-by-one");

function fillText(div,text){
    div.innerText+=text;
}

function getText(url){
    return fetch(url).then(response=>response.text());
}

function oneByOne(){
    for(let url of urlL){
        getText(url).then(text=>{
            delayPromise(fillText(containner1,text));
        })
    }
}

document.querySelector("button").addEventListener("click",()=>{
    oneByOne();
})


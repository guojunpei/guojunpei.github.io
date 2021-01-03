let baseTime=1000;
let randomTime=500;
const filesPath="https://guojunpei.github.io/pages/practice/fetch/";
function delayPromise(value){
    return new Promise((r)=>{
        window.setTimeout(function(){
            return r(value);
        },Math.random()*randomTime+baseTime);
    })
}

let urlL=[];
for(let i=1;i<9;i++){
    urlL.push(`${filesPath}text${i}`);
};

const containner1=document.getElementById("one-by-one");

function fillText(div,text){
    div.innerText+=Date()+text;
}

function getText(url){
    return fetch(url).then(response=>response.text());
}

function oneByOne(){
    getText(urlL[0]).then(text=>{
        delayPromise(text).then(text=>{
            fillText(containner1,text)
        });
        return urlL[1];
    }).then(url=>{
        getText(url).then(text=>{
            delayPromise(text).then(text=>{
                fillText(containner1,text)
            });
        })
    })

    /*
    getText(urlL[0]).then(text=>{
        delayPromise(fillText(containner1,text));
        getText(urlL[1]);
    }).then(text=>{
        delayPromise(fillText(containner1,text));
    })
    */

    /*
    for(let url of urlL){
        getText(url).then(text=>{
            delayPromise(fillText(containner1,text));
        })
    }
    */
}

document.querySelector("button").addEventListener("click",()=>{
    oneByOne();
})


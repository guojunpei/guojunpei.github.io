
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

function changecontant(headId){
    if(h1L.indexOf(headId)>-1){
        document.getElementById(headId).style.display="flex";

    }
}

pushSameClassIdIntoList(".my-h3").indexOf("photography-head");
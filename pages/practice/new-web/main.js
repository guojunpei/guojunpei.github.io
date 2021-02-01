
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
        document.getElementById(headId).style.display="flex";
        let n=h1L.indexOf(headId);
        let l=h1L.splice(n);
        for(let otherId of l){
            document.getElementById(otherId).style.display="none";
        }
    }else if(h2L.indexOf(headId)>-1){
        document.getElementById(headId).style.display="flex";
        let n=h2L.indexOf(headId);
        let l=h2L.splice(n);
        for(let otherId of l){
            document.getElementById(otherId).style.display="none";
        }
    }else if(h3L.indexOf(headId)>-1){
        document.getElementById(headId).style.display="flex";
        let n=h3L.indexOf(headId);
        let l=h3L.splice(n);
        for(let otherId of l){
            document.getElementById(otherId).style.display="none";
        }
    }
}

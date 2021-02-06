
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
        let old=c1l;
        let l=c1L.splice(n);
        for(let otherId of l){
            document.getElementById(otherId).style.display="none";
        }
        c1l=old;
    }else if(h2L.indexOf(headId)>-1){
        let n=h2L.indexOf(headId);
        document.getElementById(c2L[n]).style.display="flex";
        let old=c2l;
        let l=c2L.splice(n);
        for(let otherId of l){
            document.getElementById(otherId).style.display="none";
        }
        c2l=old;
    }else if(h3L.indexOf(headId)>-1){
        let n=h3L.indexOf(headId);
        document.getElementById(c3L[n]).style.display="flex";
        let old=c3l;
        let l=c3L.splice(n);
        for(let otherId of l){
            document.getElementById(otherId).style.display="none";
        }
        c3l=old;
    }
}


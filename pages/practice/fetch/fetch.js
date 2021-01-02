let baseTime=1000;
let randomTime=500;
const delayPromise=()

const filesPath="https://guojunpei.github.io/pages/practice/fetch/";

document.querySelector("button").addEventListener("click",function(){
    function getFile(n){
        return fetch(`${filesPath}text${n}.md`).then(response=>response.text());
    }
    
    function oneByOne(){
        let containner=document.getElementById("one-by-one");
        let n=0;
        window.setTimeout(function(){
            containner.innerText+="begin...";
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{containner.innerText+=text;});
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{containner.innerText+=text;});
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{containner.innerText+=text;});
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{containner.innerText+=text;});
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{containner.innerText+=text;});
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{containner.innerText+=text;});
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{containner.innerText+=text;});
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{containner.innerText+=text;});
        },Math.random()*randomTime+baseTime);
    }
    
    function afterAll(){
        let containner=document.getElementById("after-all");
        window.setTimeout(function(){
            containner.innerText+="begin...";
        },Math.random()*randomTime+baseTime);

        let t1="";
        let t2="";
        let t3="";
        let t4="";
        let t5="";
        let t6="";
        let t7="";
        let t8="";
        getFile(1).then(text=>{t1=text;});
        getFile(2).then(text=>{t2=text;});
        getFile(3).then(text=>{t3=text;});
        getFile(4).then(text=>{t4=text;});
        getFile(5).then(text=>{t5=text;});
        getFile(6).then(text=>{t6=text;});
        getFile(7).then(text=>{t7=text;});
        getFile(8).then(text=>{t8=text;});
        Promise.all([t1,t2,t3,t4,t5,t6,t7,t8]).then((values)=>{
            containner.innerText+=values;
        });

        let tl=[];
        for(let i=0;i<8;i++){
            tl.push(getFile(i));
        }
        Promise.all(tl).then((values)=>{
            values.then(text=>{
                containner.innerText+=text;
            });
        });
    }
    
    function fasterFirst(){
        let containner=document.getElementById("faster-first");
        let np=new Promise(
            function(){
                window.setTimeout(function(){
                    containner.innerText+="begin...";
                },Math.random()*randomTime+baseTime);
            }
        )
    
        np.then(
            function(){
                window.setTimeout(function(){
                    getFile(1).then(text=>{containner.innerText+=text;});
                },Math.random()*randomTime+baseTime);
            }
        ).then(
            function(){
                window.setTimeout(function(){
                    getFile(2).then(text=>{containner.innerText+=text;});
                },Math.random()*randomTime+baseTime);
            }
        ).then(
            function(){
                window.setTimeout(function(){
                    getFile(3).then(text=>{containner.innerText+=text;});
                },Math.random()*randomTime+baseTime);
            }
        ).then(
            function(){
                window.setTimeout(function(){
                    getFile(4).then(text=>{containner.innerText+=text;});
                },Math.random()*randomTime+baseTime);
            }
        ).then(
            function(){
                window.setTimeout(function(){
                    getFile(5).then(text=>{containner.innerText+=text;});
                },Math.random()*randomTime+baseTime);
            }
        ).then(
            function(){
                window.setTimeout(function(){
                    getFile(6).then(text=>{containner.innerText+=text;});
                },Math.random()*randomTime+baseTime);
            }
        ).then(
            function(){
                window.setTimeout(function(){
                    getFile(7).then(text=>{containner.innerText+=text;});
                },Math.random()*randomTime+baseTime);
            }
        ).then(
            function(){
                window.setTimeout(function(){
                    getFile(8).then(text=>{containner.innerText+=text;});
                },Math.random()*randomTime+baseTime);
            }
        )
    }
    
    oneByOne();
    afterAll();
    fasterFirst();
});

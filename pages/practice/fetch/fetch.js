let baseTime=1000;
let randomTime=500;

const container1=document.getElementById("one-by-one");
const container2=document.getElementById("after-all");
const container3=document.getElementById("faster-first");

const filesPath="https://guojunpei.github.io/pages/practice/fetch/";

document.querySelector("button").addEventListener("click",function(){
    function getFile(n){
        return fetch(`${filesPath}text${n}.md`).then(response=>response.text());
    }
    
    function oneByOne(){
        let t=container1.innerText;
        let n=0;
        window.setTimeout(function(){
            t+="begin...";
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{t+=text;});
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{t+=text;});
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{t+=text;});
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{t+=text;});
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{t+=text;});
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{t+=text;});
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{t+=text;});
        },Math.random()*randomTime+baseTime);
        window.setTimeout(function(){
            n+=1;
            getFile(n).then(text=>{t+=text;});
        },Math.random()*randomTime+baseTime);
    }
    
    
    function afterAll(){
        let t=container2.innerText;
        window.setTimeout(function(){
            t+="begin...";
        },Math.random()*randomTime+baseTime);
        let tl=[];
        for(let i=0;i<8;i++){
            tl.push(getFile(i));
        }
        Promise.all(tl).then((values)=>{
            window.setTimeout(function(){
                values.then(text=>{
                    t+=text;
                });
            },Math.random()*randomTime+baseTime);
        });
    }
    
    
    function fasterFirst(){
        let t=container3.innerText;
        let np=new Promise(
            function(){
                window.setTimeout(function(){
                    t+="begin...";
                },Math.random()*randomTime+baseTime);
            }
        )
    
        np.then(
            function(){
                window.setTimeout(function(){
                    getFile(1).then(text=>{t+=text;});
                },Math.random()*randomTime+baseTime);
            }
        ).then(
            function(){
                window.setTimeout(function(){
                    getFile(2).then(text=>{t+=text;});
                },Math.random()*randomTime+baseTime);
            }
        ).then(
            function(){
                window.setTimeout(function(){
                    getFile(3).then(text=>{t+=text;});
                },Math.random()*randomTime+baseTime);
            }
        ).then(
            function(){
                window.setTimeout(function(){
                    getFile(4).then(text=>{t+=text;});
                },Math.random()*randomTime+baseTime);
            }
        ).then(
            function(){
                window.setTimeout(function(){
                    getFile(5).then(text=>{t+=text;});
                },Math.random()*randomTime+baseTime);
            }
        ).then(
            function(){
                window.setTimeout(function(){
                    getFile(6).then(text=>{t+=text;});
                },Math.random()*randomTime+baseTime);
            }
        ).then(
            function(){
                window.setTimeout(function(){
                    getFile(7).then(text=>{t+=text;});
                },Math.random()*randomTime+baseTime);
            }
        ).then(
            function(){
                window.setTimeout(function(){
                    getFile(8).then(text=>{t+=text;});
                },Math.random()*randomTime+baseTime);
            }
        )
    }
    
    oneByOne();
    afterAll();
    fasterFirst();
});

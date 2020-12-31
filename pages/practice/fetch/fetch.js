let baseTime=1000;
let randomTime=500;

const container1=document.getElementById("one-by-one");
const container2=document.getElementById("after-all");
const container3=document.getElementById("faster-first");

function oneByOne(){
    let t=container1.innerText;
    window.setTimeout(function(){
        t+="begin...";
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("text1.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("text2.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("text3.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("text4.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("text5.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("text6.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("text7.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("text8.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
}

function afterAll(){
    let t=container2.innerText;
    window.setTimeout(function(){
        t+="begin...";
    },Math.random()*randomTime+baseTime);
    let f1=fetch("text1.md").then(r=>{t+=r.text();});
    let f2=fetch("text2.md").then(r=>{t+=r.text();});
    let f3=fetch("text3.md").then(r=>{t+=r.text();});
    let f4=fetch("text4.md").then(r=>{t+=r.text();});
    let f5=fetch("text5.md").then(r=>{t+=r.text();});
    let f6=fetch("text6.md").then(r=>{t+=r.text();});
    let f7=fetch("text7.md").then(r=>{t+=r.text();});
    let f8=fetch("text8.md").then(r=>{t+=r.text();});
    Promise.all([f1,f2,f3,f4,f5,f6,f7,f8]).then((values)=>{
        window.setTimeout(function(){
            fetch("text1.md").then(r=>{
                values;
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
                fetch("text1.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    ).then(
        function(){
            window.setTimeout(function(){
                fetch("text2.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    ).then(
        function(){
            window.setTimeout(function(){
                fetch("text3.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    ).then(
        function(){
            window.setTimeout(function(){
                fetch("text4.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    ).then(
        function(){
            window.setTimeout(function(){
                fetch("text5.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    ).then(
        function(){
            window.setTimeout(function(){
                fetch("text6.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    ).then(
        function(){
            window.setTimeout(function(){
                fetch("text7.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    ).then(
        function(){
            window.setTimeout(function(){
                fetch("text8.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    )
}

document.querySelector("button").addEventListener("click",function(){
    oneByOne();
    afterAll();
    fasterFirst();
})
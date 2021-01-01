let baseTime=1000;
let randomTime=500;

const container1=document.getElementById("one-by-one");
const container2=document.getElementById("after-all");
const container3=document.getElementById("faster-first");

const filesPath="https://guojunpei.github.io/pages/practice/fetch/";

function getFile(n){
    return fetch(`${filesPath}text${n}.md`).then(response=>response.text());
}

getFile(1).then(text=>{
    container1.innerText+=text;
});




function oneByOne(){
    let t=container1.innerText;
    window.setTimeout(function(){
        t+="begin...";
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text1.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text2.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text3.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text4.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text5.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text6.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text7.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
    window.setTimeout(function(){
        fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text8.md").then(r=>{t+=r.text();});
    },Math.random()*randomTime+baseTime);
}

function afterAll(){
    let t=container2.innerText;
    window.setTimeout(function(){
        t+="begin...";
    },Math.random()*randomTime+baseTime);
    let f1=fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text1.md").then(r=>{t+=r.text();});
    let f2=fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text2.md").then(r=>{t+=r.text();});
    let f3=fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text3.md").then(r=>{t+=r.text();});
    let f4=fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text4.md").then(r=>{t+=r.text();});
    let f5=fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text5.md").then(r=>{t+=r.text();});
    let f6=fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text6.md").then(r=>{t+=r.text();});
    let f7=fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text7.md").then(r=>{t+=r.text();});
    let f8=fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text8.md").then(r=>{t+=r.text();});
    Promise.all([f1,f2,f3,f4,f5,f6,f7,f8]).then((values)=>{
        window.setTimeout(function(){
            values;
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
                fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text1.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    ).then(
        function(){
            window.setTimeout(function(){
                fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text2.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    ).then(
        function(){
            window.setTimeout(function(){
                fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text3.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    ).then(
        function(){
            window.setTimeout(function(){
                fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text4.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    ).then(
        function(){
            window.setTimeout(function(){
                fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text5.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    ).then(
        function(){
            window.setTimeout(function(){
                fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text6.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    ).then(
        function(){
            window.setTimeout(function(){
                fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text7.md").then(r=>{
                    t+=r.text();
                });
            },Math.random()*randomTime+baseTime);
        }
    ).then(
        function(){
            window.setTimeout(function(){
                fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text8.md").then(r=>{
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


document.getElementById("one-by-one").append()
document.getElementById("one-by-one").insertAdjacentText


fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text4.md").then(r=>{
    document.getElementById("one-by-one").insertAdjacentText("afterend",r.text())
});

fetch("https://raw.githubusercontent.com/junjunguo/learning-how-to-learn/main/README.md").then(r=>{
    let t0=r.text();
    t0.value
    console.log(t0);
    console.log(typeof(t0));
});



let t0=fetch("https://raw.githubusercontent.com/junjunguo/learning-how-to-learn/main/README.md").then(r=>{return r.text();
});
console.log(t0);

fetch("https://raw.githubusercontent.com/junjunguo/learning-how-to-learn/main/README.md").then(r=>{
    document.getElementById("one-by-one").insertAdjacentText("afterend",r.text())
});

fetch("https://github.com/guojunpei/guojunpei.github.io/blob/master/pages/practice/fetch/text4.md").then(r=>{
    document.getElementById("one-by-one").innerText+=r.text();
});
                



//const myPromise=(new Promise(myExecutorFunc)).then(handleFulfilledA).then(handleFulfilledB).then(handleFulfilledC).catch(handleRejectAny);


//
let myFirstPromise=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Success!")
    },250)
})

myFirstPromise.then((successMessage)=>{
    console.log("Yay!"+successMessage)
});

//console


let promiseCount=0;

function testPromise(){
    let thisPromiseCount=++promiseCount;
    let log=document.getElementById("log");
    log.insertAdjacentHTML("beforeend",thisPromiseCount+`)开始(<small>同步代码开始</small>)<br/>`);

    let p1=new Promise(
        (resolve,reject)=>{
            log.insertAdjacentHTML("beforeend",thisPromiseCount+`) Promise 开始 (<small>异步代码开始</small>)<br/>`);
            window.setTimeout(
                function(){
                    resolve(thisPromiseCount);
                },Math.random() * 2000 + 1000
            );
        }
    );

    p1.then(
        function(val){
            log.insertAdjacentHTML("beforeend",val+`) Promise 已填充完毕 (<small>异步代码结束</small>)<br/>`);
        }
    )
    .catch(
        (reason)=>{
            console.log(`处理失败的 promise (`+reason+`)`);
        }
    );

    log.insertAdjacentHTML("beforeend",thisPromiseCount + `) Promise made (<small>同步代码结束</small>)<br/>`);
}


//
let p1=new Promise(function(resolve,reject){
    throw "Uh-oh!";
});

p1.catch(function(e){
    console.log(e);
});

let p2=new Promise(function(resolve,reject){
    setTimeout(function(){
        throw "Uncaught Exception!";
    },1000);
});

p2.catch(function(e){
    console.log(e);
});

let p3=new Promise(function(resolve,reject){
    resolve();
    throw "Silenced Exception!";
});

p3.catch(function(e){
    console.log(e);
});
//console
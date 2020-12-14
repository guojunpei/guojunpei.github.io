//const myPromise=(new Promise(myExecutorFunc)).then(handleFulfilledA).then(handleFulfilledB).then(handleFulfilledC).catch(handleRejectAny);


let promiseCount=0;

function testPromise(){
    let thisPromiseCount=++promiseCount;
    let log=document.getElementById("log");
    log.insertAdjacentHTML("beforeend",thisPromiseCount+`)开始(<small>同步代码开始</small>)<br/>`);

    let p1=new Promise(
        (resolve,reject)=>{
            log.insertAdjacentHTML("beforeend",thisPromiseCount+`) Promise开始(<small>异步代码开始</small>)<br/>`);
            window.setTimeout(
                function(){
                    resolve(thisPromiseCount);
                },math.random() * 2000 + 1000
            );
        }
    );
    p1.then(
        function(val){
            log.insertAdjacentHTML("beforeend",val+`) Promise 已填充完毕(<small>异步代码结束</small>)<br/>`);
        }
    )
    .catch(
        (reason)=>{
            console.log(`处理失败的 promise (`+reason+`)`);
        }
    );

    log.insertAdjacentHTML("beforeend",thisPromiseCount + `) Promise made (<small>同步代码结束</small>)<br/>`);
}
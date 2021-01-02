let baseTime=1000;
let randomTime=500;
const delayPromise=(value){
    window.setTimeout(function(){
        return value;
    },Math.random()*randomTime+baseTime);
}


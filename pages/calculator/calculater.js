let inputRsult=null;
let number0=null;
let number1=null;
let number2=null;
let symbol="";
let result=0;

function input(n){
    inputRsult=inputRsult+n;
    number0=number0+n;
    document.getElementById("input-result").textContent=inputRsult;
}

function save(s){
    if(symbol===""&&number0===null&&number1!==null){
        inputRsult;
        document.getElementById("input-result").textContent=inputRsult;
    }else{
        inputRsult=inputRsult+s;
        number1=Number(number0);
        number0=null;
        symbol=s;
        document.getElementById("input-result").textContent=inputRsult;
    }

}

function outEqual(){
    inputRsult=inputRsult+"=";
    number2=Number(number0);
    if(symbol===""&&number1===null){
        result=number0;
    }else if(symbol==="+"){
        result=number1+number2;
    }else if(symbol==="-"){
        result=number1+number2;
    }else if(symbol==="*"){
        result=number1+number2;
    }else if(symbol==="/"){
        result=number1+number2;
    }else{
        result=number1;
    }
    symbol="";
    document.getElementById("calculate-result").textContent=result;
    document.getElementById("input-result").textContent=inputRsult;
}

function percent(){
    inputRsult=inputRsult+".";
    number0=Number(number0)/100;
    document.getElementById("input-result").textContent=inputRsult;
}

function allClear(){
    inputRsult="0";
    number0=null;
    number1=null;
    number2=null;
    symbol="";
    result=0;
    document.getElementById("calculate-result").textContent=result;
    document.getElementById("input-result").textContent=inputRsult;
}

function clear(){
    inputRsult=inputRsult.substring(0,inputRsult.length-1);
    if(symbol===""&&number0===null&&number1!==null){
        result=result+" clear lose! "
    }else if(symbol!==""&&number0!==null&&number1!==null){
        number2=number2.substring(0,number2.length-1);
    }else if(symbol!==""&&number0===null&&number1!==null){
        symbol="";
        number0=number1;
        number1=null;
    }else{
        number0=number0.substring(0,number0.length-1);
    }
    document.getElementById("calculate-result").textContent=result;
    document.getElementById("input-result").textContent=inputRsult;
}


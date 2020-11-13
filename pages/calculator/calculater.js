let inputRsult=null;
let number0=null;
let number1=null;
let number2=null;
let symbol="";
let result=0;

function input(n){
    if(inputRsult===null){
        inputRsult=n;
        document.getElementById("input-result").textContent=inputRsult;
    }else{
        inputRsult=inputRsult+n.toString();
        document.getElementById("input-result").textContent=inputRsult;
    }

    if(number0===null){
        number0=n;
    }else{
        number0=number0+n.toString();
    }


    //number0=number0+n.toString();
    //number0=Number(Number(number0)+n.toString());
    //document.getElementById("input-result").textContent=inputRsult;
}

function save(s){
    if(symbol===""&&number0===null&&number1===null){
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
        result=Number(number0);
    }else if(symbol==="+"){
        result=number1+number2;
    }else if(symbol==="-"){
        result=number1-number2;
    }else if(symbol==="×"){
        result=number1*number2;
    }else if(symbol==="÷"){
        result=number1/number2;
    }else{
        result=number1;
        //"？，1？，1+？，1+2？，1+2=？五种情况没有补齐"
    }
    number0=null;
    number1=result;
    number2=null;
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
    inputRsult=null;
    number0=null;
    number1=null;
    number2=null;
    symbol="";
    result=0;
    document.getElementById("calculate-result").textContent=result;
    if(inputRsult===null){
        document.getElementById("input-result").textContent=0;
    }else{
        document.getElementById("input-result").textContent=inputRsult;
    }
}

function oneClear(){
    function deleteEnd(s){
        return s.substr(0,s.length-1);
    }
    inputRsult=deleteEnd(inputRsult);
    document.getElementById("input-result").textContent=inputRsult;
    if(symbol===""&&number0===null&&number1!==null){
        document.getElementById("one-clear").style.color=red;
    }else if(symbol!==""&&number0!==null&&number1!==null){
        number2=deleteEnd(number2);
    }else if(symbol!==""&&number0===null&&number1!==null){
        symbol="";
        number0=number1;
        number1=null;
    }else{
        number0=deleteEnd(number0);
    }   
}


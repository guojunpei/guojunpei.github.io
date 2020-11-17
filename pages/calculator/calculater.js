let inputResult=null;
let number0=null;
let number1=null;
let number2=null;
let symbol="";
let result=0;

function clickBtnN(n){
    if(inputResult===null){
        inputResult=n;
    }else{
        inputResult=inputResult+n.toString();
    }

    if(number0===null){
        number0=n;
    }else{
        number0=number0+n.toString();
    }

    document.getElementById("input-result").textContent=inputResult;
}

function clickBtnS(s){
    if(symbol!==""){
        result="must be number!"
    }else if(number1!==null){
        inputResult=inputResult+s;
        symbol=s;
    }else{
        inputResult=inputResult+s;
        number1=Number(number0);
        number0=null;
        symbol=s;
    }
    document.getElementById("calculate-result").textContent=result;
    document.getElementById("input-result").textContent=inputResult;
}

function clickBtnEqual(){
    if(symbol!==""&&number0!==null&&number1!==null){
        number2=Number(number0);
        if(symbol==="+"){
            result=number1+number2;
        }else if(symbol==="-"){
            result=number1-number2;
        }else if(symbol==="×"){
            result=number1*number2;
        }else if(symbol==="÷"){
            result=number1/number2;
        }
        number0=null;
        number1=result;
        number2=null;
        symbol="";
        inputResult=inputResult+"="+result;
    }else{
        result=inputResult;
    }
    document.getElementById("calculate-result").textContent=result;
    document.getElementById("input-result").textContent=inputResult;
}

function clickBtnPercent(){
    if(number0===null){
        result="Follow number!";
    }else{
        inputResult=inputResult+".";
        number0=Number(number0)/100;
    }
    document.getElementById("input-result").textContent=inputResult;
    document.getElementById("calculate-result").textContent=result;
}

function clickBtnAllClear(){
    inputResult=null;
    number0=null;
    number1=null;
    number2=null;
    symbol="";
    result=0;
    document.getElementById("calculate-result").textContent=result;
    if(inputResult===null){
        document.getElementById("input-result").textContent=0;
    }else{
        document.getElementById("input-result").textContent=inputResult;
    }
}

function clickBtnClear(){
    function deleteEnd(s){
        return s.substr(0,s.length-1);
    }

    if(symbol===""&&number0===null&&number1===null){
        result="Nothing to clear";
    }else if(number0!==null){
        number0=deleteEnd(number0);
        inputResult=deleteEnd(inputResult);
    }else if(symbol===""){
        result="Press 'AC' or go on calculate";
    }else{
        symbol="";
        number0=number1;
        number1=null;
        inputResult=deleteEnd(inputResult);
    }

/*
    if(symbol===""&&number0===null&&number1!==null){
        result="Press 'AC'! "
    }else if(symbol!==""&&number0!==null&&number1!==null){
        number2=deleteEnd(number2);
    }else if(symbol!==""&&number0===null&&number1!==null){
        symbol="";
        number0=number1;
        number1=null;
    }else{
        if(number0===null){number0=0}
        number0=deleteEnd(number0);
    }
    inputResult=deleteEnd(inputResult);
*/

    document.getElementById("input-result").textContent=inputResult;
    document.getElementById("calculate-result").textContent=result;
}

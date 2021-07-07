

function clockNow(){
    let date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();

    let secPointerChange = sec * 6;
    let minPointerChange = min * 6;
    let hourPointerChange = hour * 30;

    document.getElementsByClassName("sec-wrapper")[0].style.transform=`rotate(${secPointerChange}deg)`;
    document.getElementsByClassName("min-wrapper")[0].style.transform=`rotate(${minPointerChange}deg)`;
    document.getElementsByClassName("hour-wrapper")[0].style.transform=`rotate(${hourPointerChange}deg)`;

}

clockNow();


function addClockNumber(){
    let clockNumbersWrapper = document.getElementById("clock-numbers-wrapper");
    let clockNumberWrapper = document.createElement("div");
    let clockNumber = document.createElement("div");

    /*

    for(let i = 0; i < 12; i++){
        clockNumber.innerText=`${i+1}`;
        clockNumber.style.transform=`translate(50%,0%)`;
        clockNumbers.appendChild(clockNumber);
    }
    */


    clockNumberWrapper.innerText=`12`;
    clockNumberWrapper.id=`${12}clock`
    clockNumberWrapper.className="clock-number-wrapper";
    clockNumberWrapper.style.transform=`translate(50%,0%)`;
    clockNumbersWrapper.appendChild(clockNumberWrapper);
/*
    clockNumberWrapper.innerText=`3`;
    clockNumberWrapper.id=`${3}clock`
    clockNumberWrapper.className="clock-number-wrapper";
    clockNumberWrapper.style.transform=`translate(100%,50%)`;
    clockNumbersWrapper.appendChild(clockNumberWrapper);
    */

    /*
    clockNumber.innerText=`3`;
    clockNumberWrapper.className="clock-number-wrapper";
    clockNumber.style.transform=`translate(100%,100%)`;
    clockNumberWrapper.appendChild(clockNumber);
    clockNumbersWrapper.appendChild(clockNumberWrapper);

    */
/*
    clockNumber.innerText="12";
    clockNumber.className="clock-number-wrapper";
    clockNumber.style.transform=`translate(50%,0%)`;
    clockNumbersWrapper.appendChild(clockNumber);

    clockNumber.innerText="3";
    clockNumber.className="clock-number-wrapper";
    clockNumber.style.transform=`translate(100%,50%)`;
    clockNumbersWrapper.appendChild(clockNumber);
    */

}

addClockNumber();
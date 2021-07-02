

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
    let clockNumbers = document.getElementById("clock-numbers");
    let clockNumber = document.createElement("div");

    for(let i = 0; i<12;i++){
        clockNumber.innerText=`${i+1}`;
        //clockNumber.style.transform=`rotate(${i*30}deg)`;
        clockNumbers.appendChild(clockNumber);
    }

    
    

}

addClockNumber();
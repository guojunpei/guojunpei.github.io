function clockNow(){
    let date = new date;
    let sec = date.getSecondes();
    let min = date.getMinutes();
    let hour = date.getHours();

    let secPointer = sec * 6;
    let minPointer = min * 6;
    let hourPointer = hour * 30;

    document.getElementsByClassName("sec-wrapper")

}
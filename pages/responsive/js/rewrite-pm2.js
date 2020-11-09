/*
const appDiv=document.getElementById("app");

function uiSmall(){
    appDiv.innerHTML="Small";
    appDiv.style.color="yellow";
}

function uiMiddle(){
    appDiv.innerHTML="Middle";
    appDiv.style.color="green";
}

function uiLarge(){
    appDiv.innerHTML="Large";
    appDiv.style.color="blue";
}

function reColor () {
    const width = window.innerWidth;
    //const width=window.width;"not work"
    if(width > 800){
        uiLarge();
    }else if(width > 600){
        uiMiddle();
    }else {
        uiSmall();
    }
}

reColor();
window.addEventListener("resize", reColor);
*/

/*
const appNode = document.querySelector("#app");

function uiMobile () {
    appNode.innerHTML=`
    <div class="my-body">1</div>
    `;
    appNode.style.color = "yellow";
}

function uiSm(){
    appNode.innerHTML=`
        <div class="my-body">small</div>
    `;
    console.log("small");
    appNode.style.color = "green";
}

function uiLg(){
    appNode.innerHTML=`
        <div class="my-body">large</div>
    `;
    console.log("large");
    appNode.style.color = "blue";
}

function windowResizeHandler () {
    const width = window.innerWidth;
    if(width > 800){
        uiLg();
    }else if(width > 600){
        uiSm();
    }else {
        uiMobile();
    }
}

windowResizeHandler();
window.addEventListener("resize", windowResizeHandler);
*/


const appDiv=document.getElementById("app");

function uiSmall(){
    appDiv.innerHTML="Small";
    appDiv.style.color="red";
}

function uiMiddle(){
    appDiv.innerHTML="Middle";
    appDiv.style.color="yellow";
}

function uiLarge(){
    appDiv.innerHTML="Large";
    appDiv.style.color="green";
}

function reColor(){
    const width = window.innerWidth;
    if(width > 800){
        uiLarge();
    }else if(width > 600){
        uiMiddle();
    }else{
        uiSmall();
    }
}

reColor();
window.addEventListener("resize", reColor);
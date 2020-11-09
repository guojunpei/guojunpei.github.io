const appNode = document.querySelector("#app");

function uiMobile () {
    appNode.innerHTML=`
    <div class="my-body">1</div>
    `;
    appNode.style.color = "red";
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
    if(width > 500){
        uiLg();
    }else if(width > 300){
        uiSm();
    }else {
        uiMobile();
    }
}

windowResizeHandler();
window.addEventListener("resize", windowResizeHandler);

/*
const appDiv=document.getElementById("app");

function uiSmall(){
    appDiv.innerHTML="<div>Small</div>";
    appDiv.style.color="red";
}

function uiMiddle(){
    appDiv.innerHTML="<div>Middle</div>";
    appDiv.style.color="yellow";
}

function uiLarge(){
    appDiv.innerHTML="<div>Large</div>";
    appDiv.style.color="green";
}

function reColor(){
    const width=window.width;
    if(width>1000){uiLarge();
    }else if(width>800){uiMiddle();
    }else{uiSmall();}
}

reColor();
window.addEventListener("resize", reColor);
*/
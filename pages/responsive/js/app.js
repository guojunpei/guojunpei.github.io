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

function windowResizeHandler (event) {
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

// console:
a = null;
b = undefined;
c = 0;
d = "";

a == b; // true
a === b; // false

c == d; // true
c === d; // false

false == c; // true
false === c; // false
false === false; // true
false === true; // false

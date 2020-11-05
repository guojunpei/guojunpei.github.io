webClass();
window.addEventListener("resize",webClass());

/*
document.body.clientWidth;
window.screen.width;
window.screen.availWidth;
document.getElementsByClassName("myNavs").style
document.getElementsByClassName("myNavs").offsetParent
document.getElementsByClassName("myNavs").parentElement
*/

function webClass(){
    if(window.screen.width>= 800){webWidth1()};
    if(window.screen.width>= 1000){webWidth2()};
}

function webWidth1(){
    document.getElementById("myBody").innerHTML = `
    <div class="myBody2">
    <div class="myHeader">
        The header
    </div>

    <div class="myNavs" style="background-color:green;margin: 0.5rem;padding: 1rem;display: flex;flex-direction: row;justify-content: space-between;">
        <div>
            Nav 1
        </div>
        <div>
            Nav 2
        </div>
        <div>
            Nav 3
        </div>
    </div>

    <div class="myBody2box1">
        <div class="mySidebar" style="margin: 0.5rem;padding: 1rem;background-color: red;flex-basis: 10rem;flex-grow: 0.2;">
            Sidebar
        </div>

        <div class="myLayoutFocus" style="margin: 0.5rem;padding: 1rem;background-color: blue;flex-basis: 30rem;flex-grow: 2;">
            <div class="myH1">
                Responsive grid layout
            </div>
            <div>
                Use media query and grid template areas to achive responsive web
            </div>
        </div>
    </div>

    <div class="myBody2box2">
        <div class="myAdvertising" style="margin: 0.5rem;padding: 1rem;background-color: orange;flex-basis: 10rem;flex-grow: 0.2;">
            Advertisting
        </div>

        <div class="myFooter" style="margin: 0.5rem;padding: 1rem;background-color: purple;flex-basis: 30rem;flex-grow: 2;">
            the footer
        </div>
    </div>
</div>
    `;
}

function webWidth2(){
    document.getElementById("myBody").innerHTML = `
    <div class="myBody3">
<div class="myHeader">
    The header
</div>

<div class="myBody3box1">
    <div class="mySidebar" style="margin: 0.5rem;padding: 1rem;background-color: red;flex-basis: 10rem;flex-grow: 0.2;">
        Sidebar
    </div>

    <div class="myBody3box11">
        <div class="myNavs" style="background-color:green;margin: 0.5rem;padding: 1rem;display: flex;flex-direction: row;justify-content: space-between;">
            <div>
                Nav 1
            </div>
            <div>
                Nav 2
            </div>
            <div>
                Nav 3
            </div>
        </div>

        <div class="myBody3box111">
            <div class="myLayoutFocus" style="margin: 0.5rem;padding: 1rem;background-color: blue;flex-basis: 30rem;flex-grow: 2;">
                <div class="myH1">
                    Responsive grid layout
                </div>
                <div>
                    Use media query and grid template areas to achive responsive web
                </div>
            </div>

            <div class="myAdvertising" style="margin: 0.5rem;padding: 1rem;background-color: orange;flex-basis: 10rem;flex-grow: 0.2;">
                Advertisting
            </div>
        </div>

    </div>

</div>

<div class="myFooter">
    the footer
</div>
</div>
    `;
}

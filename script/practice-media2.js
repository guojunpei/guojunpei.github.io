console.log("js work")

/*
document.body.clientWidth;
window.screen.width;
window.screen.availWidth;
document.getElementsByClassName("my-navs").style
document.getElementsByClassName("my-navs").offsetParent
document.getElementsByClassName("my-navs").parentElement
*/

function webWidth1(){
    console.log("webWidth1() work");
    document.body.innerHTML = `
        <div class="my-body2">
            <div class="my-header">
                The header
            </div>

            <div class="my-navs" style="background-color:green;margin: 0.5rem;padding: 1rem;display: flex;flex-direction: row;justify-content: space-between;">
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

            <div class="my-body2box1">
                <div class="my-sidebar" style="margin: 0.5rem;padding: 1rem;background-color: red;flex-basis: 10rem;flex-grow: 0.2;">
                    Sidebar
                </div>

                <div class="my-layoutFocus" style="margin: 0.5rem;padding: 1rem;background-color: blue;flex-basis: 30rem;flex-grow: 2;">
                    <div class="my-h1">
                        Responsive grid layout
                    </div>
                    <div>
                        Use media query and grid template areas to achive responsive web
                    </div>
                </div>
            </div>

            <div class="my-body2box2">
                <div class="my-advertising" style="margin: 0.5rem;padding: 1rem;background-color: orange;flex-basis: 10rem;flex-grow: 0.2;">
                    Advertisting
                </div>

                <div class="my-footer" style="margin: 0.5rem;padding: 1rem;background-color: purple;flex-basis: 30rem;flex-grow: 2;">
                    the footer
                </div>
            </div>
        </div>
    `;
}

function webWidth2(){
    console.log("webWidth2() work");
    document.body.innerHTML = `
    <div class="my-body3">
<div class="my-header">
    The header
</div>

<div class="my-body3box1">
    <div class="my-sidebar" style="margin: 0.5rem;padding: 1rem;background-color: red;flex-basis: 10rem;flex-grow: 0.2;">
        Sidebar
    </div>

    <div class="my-body3box11">
        <div class="my-navs" style="background-color:green;margin: 0.5rem;padding: 1rem;display: flex;flex-direction: row;justify-content: space-between;">
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

        <div class="my-body3box111">
            <div class="my-layoutFocus" style="margin: 0.5rem;padding: 1rem;background-color: blue;flex-basis: 30rem;flex-grow: 2;">
                <div class="my-h1">
                    Responsive grid layout
                </div>
                <div>
                    Use media query and grid template areas to achive responsive web
                </div>
            </div>

            <div class="my-advertising" style="margin: 0.5rem;padding: 1rem;background-color: orange;flex-basis: 10rem;flex-grow: 0.2;">
                Advertisting
            </div>
        </div>

    </div>

</div>

<div class="my-footer">
    the footer
</div>
</div>
    `;
}

function webClass(){
    if(window.screen.width>= 600){webWidth1()};
    if(window.screen.width>= 1000){webWidth2()};
    console.log("webClass() work")
}

window.addEventListener("resize",webClass());
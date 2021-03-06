let appDiv=document.getElementById("app");

function uiSmall(){
    appDiv.innerHTML = `
            <div class="my-header">
                The header
            </div>
    
            <div class="my-navs">
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
    
            <div class="my-layoutFocus">
                <div class="my-h1">
                    Responsive grid layout
                </div>
                <div>
                    Use media query and grid template areas to achive responsive web
                </div>
            </div>
    
            <div class="my-sidebar">
                Sidebar
            </div>
    
            <div class="my-advertising">
                Advertisting
            </div>
    
            <div class="my-footer">
                the footer
            </div>
    `;
}


function uiMiddle(){
    appDiv.innerHTML = `
        <div class="my-body1">
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

function uiLarge(){
    appDiv.innerHTML = `
    <div class="my-body1">
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

function uiChoose(){
    let width=window.innerWidth;
    if(width > 800){
        uiLarge();
    }else if(width > 600){
        uiMiddle();
    }else{
        uiSmall();
    }
}

uiChoose();
window.addEventListener("resize",uiChoose);

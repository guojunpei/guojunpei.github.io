let img1={
    alt:"photo",
    name:"lake1",
    src:"../images/lake1.jpg",
    with:"800px",
    height:"534px",
}

let img2={
    alt:"photo",
    name:"lake2",
    src:"../images/lake2.jpg",
    with:"800px",
    height:"534px",
}

document.getElementById("photograph").addEventListener("click",()=>{
    if(imgeSrc=document.getElementById("photo").src==="../images/lake1.jpg"){
        imgeSrc=document.getElementById("photo").src="../images/lake2.jpg";
    }else{
        imgeSrc=document.getElementById("photo").src="../images/lake1.jpg";
    }
});
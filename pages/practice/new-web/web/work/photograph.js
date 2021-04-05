let img1={
    alt:"photo",
    name:"lake1",
    src:"../images/lake1.jpg",
    width:"800px",
    height:"534px",
}

let img2={
    alt:"photo",
    name:"lake2",
    src:"../images/lake2.jpg",
    width:"800px",
    height:"534px",
}

let imgL=[img1,img2];
let imgN="0";

window.addEventListener("resize",()=>{
    const eleWidth=document.getElementById("photograph").clientWidth;
    const wrapWidth=document.getElementById("content-containner").clientWidth
    const headWidth=document.getElementById("inner-heads-containner").clientWidth
    if(eleWidth>wrapWidth-headWidth){
        document.getElementById("photo").Width=wrapWidth-headWidth;
    }
});

function nextImg(n){
    imgN=imgN+n;
    const photo=document.getElementById("photo");
    if(imgN>imgL.length-1 && imgN>0){
        imgN=0;}
    photo.alt=imgL[imgN].alt;
    photo.src=imgL[imgN].src;
    photo.width=imgL[imgN].width;
    photo.height=imgL[imgN].height;
}

document.getElementById("photograph").addEventListener("click",nextImg(1));

/*
document.getElementById("photograph").addEventListener("click",()=>{
    if(document.getElementById("photo").src==="../images/lake1.jpg"){
        document.getElementById("photo").src="../images/lake2.jpg";
    }else{
        document.getElementById("photo").src="../images/lake1.jpg";
    }
});
*/
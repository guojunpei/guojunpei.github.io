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

let imgL=[img1,img2];
let imgN="0";

function nextImg(n){
    imgN=imgN+n;
    const photo=document.getElementById("photo");
    if(imgN>imgL.length-1 && imgN>0){
        imgN=0;}
    photo.alt=imgL[imgN].alt;
    photo.src=imgL[imgN].src;
    photo.with=imgL[imgN].with;
    photo.height=imgL[imgN].height;
}

//document.getElementById("photograph").addEventListener("click",nextImg(1));

document.getElementById("photograph").addEventListener("click",()=>{
    if(document.getElementById("photo").src==="../images/lake1.jpg"){
        document.getElementById("photo").src="../images/lake2.jpg";
    }else{
        document.getElementById("photo").src="../images/lake1.jpg";
    }
});
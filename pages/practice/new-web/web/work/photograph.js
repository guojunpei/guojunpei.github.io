let img1={
    alt:"photo",
    name:"lake1",
    src:"../images/lake1.jpg",
    width:800,
    height:534,
}

let img2={
    alt:"photo",
    name:"lake2",
    src:"../images/lake2.jpg",
    width:800,
    height:534,
}

let img3={
    alt:"photo",
    name:"road",
    src:"../images/road.jpg",
    width:800,
    height:534,
}

let imgL=[img1,img2,img3];
let imgN=0;

window.addEventListener("resize",()=>{
    const eleWidth=document.getElementById("photograph").clientWidth;
    const wrapWidth=document.getElementById("content-containner").clientWidth
    const headWidth=document.getElementById("inner-heads-containner").clientWidth
    if(eleWidth>wrapWidth-headWidth){
        document.getElementById("photo").Width=wrapWidth-headWidth;
    }
});

function nextImg(){
    imgN=imgN+1;
    console.log("imgN:"+imgN)
    const photo=document.getElementById("photo");
    if(imgN>imgL.length-1 && imgN>0){
        imgN=0;}
    console.log(imgL[imgN]);
    photo.alt=imgL[imgN].alt;
    photo.src=imgL[imgN].src;
    photo.width=imgL[imgN].width;
    photo.height=imgL[imgN].height;
    console.log(photo.alt);
    console.log(photo.src);
    console.log(photo.width);
    console.log(photo.height);
}

document.getElementById("photograph").addEventListener("click",nextImg);

/*
document.getElementById("photograph").addEventListener("click",()=>{
    if(document.getElementById("photo").src==="../images/lake1.jpg"){
        document.getElementById("photo").src="../images/lake2.jpg";
    }else{
        if(document.getElementById("photo").src==="../images/lake2.jpg"){
            document.getElementById("photo").src="../images/road.jpg";
        }else{
            document.getElementById("photo").src="../images/lake1.jpg";
        }
    }
});
*/
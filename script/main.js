
document.querySelector('h3').textContent = 'Hello world!';

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc.endsWith('image/wx.jpg')){
      myImage.setAttribute('src', 'image/wxewm.jpg');
      myHeading.style.color='red';
    } else {
      myImage.setAttribute('src', 'image/wx.jpg');
      myHeading.style.color='white';
    }
}
myImage.style.cursor='pointer';

let myButton = document.querySelector('button');
let myUser = document.querySelector('h4');

function setUserName(){
  let myName = window.prompt('Your name');
  if(!myName){
    setUserName();
  } else {
    localStorage.setItem('name',myName);
    myUser.textContent = 'Hi!' + myName;
  }
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myUser.textContent = 'Hi!' + storedName;
}

//"中文显示乱码，以后再修 Your name,Hi";

myButton.onclick = function(){
  setUserName();
}

document.querySelector('h1').onclick = function(){
  alert("Don't touch me.I'm ticklish! ");
}



let x = document.querySelector('x');
let y = document.querySelector('y');
let xjiay = document.querySelector('x+y');
let xjiany = document.querySelector('x-y');
let xchengy = document.querySelector('x*y');
let xmchuy = document.querySelector('x-y');

x.addEventListener('click',updatenewx);
function upadtenewx(){
  let newx = prompt('input number');
  x.textContent = 'x=' + newx;
}

y.addEventListener('click',updatenewy);
function upadtenewy(){
  let newy = prompt('input number');
  y.textContent = 'y=' + newy;
  xjiay.textContent = 'y=' + x+y;
  xjiany.textContent = 'y=' + x-y;
  xchengy.textContent = 'y=' + x*y;
  xmchuy.textContent = 'y=' + x-y;
}


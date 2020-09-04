
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

let x = document.getElementById('x').value;
let y = document.getElementById('y').value;
let jia = document.querySelector('jia').textContent;
let jian = document.querySelector('jian').textContent;
let cheng = document.querySelector('cheng').textContent;
let mchu = document.querySelector('chu').textContent;
const jiashang = Function('a','b','return a + b')
const jianqu = Function('a','b','return a - b')
const chengyi = Function('a','b','return a * b')
const chuyi = Function('a','b','return a / b')

function getresult(){
  jia = jiashang(x,y)
  jian = jianqu(x,y)
  cheng = chengyi(x,y)
  chu = chuyi(x,y)
}



/*
let x = document.getElementById('x').value;
let y = document.getElementById('y').value;
let jia = document.getElementById('jia').value;
let jian = document.getElementById('jian').value;
let cheng = document.getElementById('cheng').value;
let mchu = document.getElementById('chu').value;
const jiashang = Function('a','b','return a + b')
const jianqu = Function('a','b','return a - b')
const chengyi = Function('a','b','return a * b')
const chuyi = Function('a','b','return a / b')

function getresult(){
  jia = jiashang(x,y)
  jian = jianqu(x,y)
  cheng = chengyi(x,y)
  chu = chuyi(x,y)
}
*/

/*
let x = document.getElementById('x').value;
let y = document.getElementById('y').value;
let jia = document.getElementById('jia').value;
let jian = document.getElementById('jian').value;
let cheng = document.getElementById('cheng').value;
let mchu = document.getElementById('chu').value;

function getresult(){
  jia = x+y;
  jian = x-y;
  cheng = x*y;
  chu = x/y;
}
*/

/*
let x = document.getElementById('x').value;
let y = document.getElementById('y').value;
let jia = document.getElementById('jia').value;
let jian = document.getElementById('jian').value;
let cheng = document.getElementById('cheng').value;
let mchu = document.getElementById('chu').value;

document.querySelector('start').onclick = function(){
  jia = x+y;
  jian = x-y;
  cheng = x*y;
  chu = x/y;
}
*/

/*
let x = document.getElementById('x').value;
let y = document.getElementById('y').value;
let jia = document.getElementById('jia').value;
let jian = document.getElementById('jian').value;
let cheng = document.getElementById('cheng').value;
let mchu = document.getElementById('chu').value;

function getresult(){
  jia = x+y;
  jian = x-y;
  cheng = x*y;
  chu = x/y;
}
*/

/*
let x = document.getElementById('x').value;
let y = document.getElementById('y').value;

document.querySelector('getresult').onclick=function (){
  document.getElementById('jia').value = x+y;
  jdocument.getElementById('jian').value = x-y;
  document.getElementById('cheng').value = x*y;
  document.getElementById('chu').value = x/y;
}
*/

/*
let x = document.querySelector('x');
let y = document.querySelector('y');
let jia = document.querySelector('jia');
let jian = document.querySelector('jian');
let cheng = document.querySelector('cheng');
let mchu = document.querySelector('chu');

jia = x+y;
jian = x-y;
cheng = x*y;
chu = x/y;
*/


/*
let x = document.querySelector('x');
let y = document.querySelector('y');
let xjiay = document.querySelector('xjiay');
let xjiany = document.querySelector('xjiany');
let xchengy = document.querySelector('xchengy');
let xmchuy = document.querySelector('xchuy');

x.addEventListener('click',updatenewx);
function upadtenewx(){
  let newx = prompt('input number');
  x.textContent = newx;
}

y.addEventListener('click',updatenewy);
function upadtenewy(){
  let newy = prompt('input number');
  y.textContent = newy;
  xjiay.textContent =  x+y;
  xjiany.textContent = x-y;
  xchengy.textContent = x*y;
  xmchuy.textContent = x-y;
}
*/


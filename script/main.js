
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

//'中文显示乱码，以后再修 Your name,Hi';

myButton.onclick = function(){
  setUserName();
}

document.querySelector('h1').onclick = function(){
  alert("Don't touch me.I'm ticklish! ");
}

function judge_compute_sign(a){
  if (a==='+'||a==='jia'||a==='加'||a==='add'||a==='plus'){return '+';}
  if (a==='-'||a==='jian'||a==='减'||a==='subtract'||a==='plus'){return '-';}
  if (a==='*'||a==='cheng'||a==='乘'||a==='multiply'||a==='plus'||a==='x'||a==='X'||a==='×'){return '*';}
  if (a==='/'||a==='chu'||a==='除'||a==='adivide'||a==='÷'){return '/';}
}

function addition(a,b){return a+b};

function subtraction(a,b){return a-b};

function multiplication(a,b){return a*b};

function division(a,b){return a/b};

function calculation(n1,sign,n2){
  if (sign==='+'){return addition(n1,n2);}
  if (sign==='-'){return subtraction(n1,n2);}
  if (sign==='*'){return multiplication(n1,n2);}
  if (sign==='/'){return division(n1,n2);}
}

/*'
function fib(n)=求Fibonacci数列第N项的值
费波那契数列：F0 = 0,F1 = 1,Fn = Fn-1 + Fn-2'
*/
/*
function fib(n){
  if(n%1 !== 0){return 'n is positive integer!'}
  if(n === 0){return 0;}
  if(n === 1){return 1;}
  return fib(n-1)+fib(n-2);
}
*/


function fib(n,l){
  if(n%1 !== 0){return 'n is positive integer!'}
  if(n === 0){return 0;}
  if(n === 1){return 1;}
  let a=fib(n-1,l);
  let b=fib(n-2,l);
  let c=a+b;
  l[0]=a;
  l[1]=b;
  console.log(c,l);
  return c;
}

let l=[1,2,3,4,5,6]

for(let b=0;b<5;b++){
  if (l[b]%2===0){
    l[b]++;}else{
      l[b]--;}}
//202009110054

function findmax(l){
  let max=l[0];
  for (let i = 1; i < l.length;i++){
    if (l[i]>max){max=l[i];}
  }
  return max;
}

let l=[7,3,6,8,4,5,2,1]

function jangxu(l){
  let ln=[]
  for (let i = 1; i < l.length;i++){
    let i = finndmax(l)
    ln.push(i);
    l.splice(
      l.indexOf(i,1)
        );
      }
      return ln;
  }

  
  //"ln升序排列"
  /*
let l=[7,3,6,8,4,5,2,1]
let ln=[]

for(let c=1;c<8;c++){
  if (l[0]>l[c]{
    l.push(l[0]);
    l.shift(l[0]);}else{
      ln.push(l[0]);
      l.shift(l[0]);
    }
*/

/*
function fib(n,l){
  if(n%1 !== 0){return 'n is positive integer!'}
  if(n === 0){return 0;}
  if(n === 1){return 1;}
  let x=fib(n-1,l)+fib(n-2,l);
  l.push(x);
  console.log(l);
  return x;
}
*/


/*
function fib(n,[]){
  if(n === 0){let l0=[];l0.push(0);console.log(0,l0);return 0;}
  if(n === 1){let l1=[];l1.push(1);console.log(1,l1);return 1;}
  let ln=[];
  let ln1=[];
  let ln2=[];
  let a=fib(n-1,ln1);
  let b=fib(n-2,ln2);
  let c=a+b;
  ln.push(fib(n-1,ln1)+fib(n-2,ln2),'r'+c);console.log(ln);return c;
}



function fib(n,[]){
  if(n === 0){let l0=[];l0.push(0);console.log(0,l0);return 0;}
  if(n === 1){let l1=[];l1.push(1);console.log(1,l1);return 1;}
  let ln=[];
  let ln1=[];
  let ln2=[];
  let a=fib(n-1,ln1);
  let b=fib(n-2,ln2);
  let c=a+b;
  ln.push(a,b);console.log(ln);return c;
}
*/

//1
/*
function fib(n,[]){
  let li=[];
  if(n === 0){let l0=[];l0.push(0);console.log(l0);return 0;}
  if(n === 1){let l1=[];l1.push(1);console.log(l1);return 1;}
  let ln=[];ln.push(fib(n-1,ln)+fib(n-2,ln));console.log(ln);return fib(n-1,ln)+fib(n-2,ln);
}
*/
/*
//2
function fib(n,[]){
  let li=[];
  if(n === 0){let l0=[];l0.push(0);console.log(l0);return 0;}
  if(n === 1){let l1=[];l1.push(1);console.log(l1);return 1;}
  let ln=[];ln.push(fib(n-1,li)+fib(n-2,li));console.log(ln);return fib(n-1,li)+fib(n-2,li);
}
*/

/*
//3
function fib(n){
  let li =[];
  if(n === 0){li.push(0);console.log(li);return 0;}
  if(n === 1){li.push(1);console.log(li);return 1;}
  li.push(fib(n-1)+fib(n-2));console.log(li);return fib(n-1)+fib(n-2);
}
*/


/*
function fib(n,[]){
  let li =[];
  if(n === 0){li.push(0);console.log(li);return 0;}
  if(n === 1){li.push(1);console.log(li);return 1;}
  li.push(fib(n-1,li)+fib(n-2,li));console.log(li);return fib(n-1,li)+fib(n-2,li);
}
*/


/*
function fib(n){
  let li =[];
  if(n === 0){li.push(0);console.log(li);return 0;}
  if(n === 1){li.push(1);console.log(li);return 1;}
  li.push(fib(n-1)+fib(n-2));console.log(li);return fib(n-1)+fib(n-2);
}
*/



/*
n=0,0
n=1,1
n=2,fib(0)+fib(1)


n=2,0+1,
n=3,1+1,
n=4,1+2,
function fib(n){

}
*/

/*
function calculations(n1,sign1,n2,sign2,n3){
  const a = calculation(n1,sign1,n2);
  return calculation(a,sign2,n3);
}
*/

function calculations(n1,sign1,n2,sign2,n3){
  if(sign2==='+' || sign2==='-'  ){
    const a = calculation(n1,sign1,n2);
    return calculation(a,sign2,n3);
  } else {
    const b = calculation(n2,sign2,n3);
    return calculation(n1,sign1,b);
  };
}

/*
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
*/


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
  document.getElementById('jian').value = x-y;
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
  xmchuy.textContent = x/y;
}
*/

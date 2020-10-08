
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
  if (a==='+'||a==='jia'||a==='��'||a==='add'||a==='plus'){return '+';}
  if (a==='-'||a==='jian'||a==='��'||a==='subtract'||a==='plus'){return '-';}
  if (a==='*'||a==='cheng'||a==='��'||a==='multiply'||a==='plus'||a==='x'||a==='X'||a==='��'){return '*';}
  if (a==='/'||a==='chu'||a==='��'||a==='adivide'||a==='��'){return '/';}
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
斐波那契数列:F0 = 0,F1 = 1,Fn = Fn-1 + Fn-2'
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

/*
let l=[1,2,3,4,5,6]

for(let b=0;b<5;b++){
  if (l[b]%2===0){
    l[b]++;}else{
      l[b]--;}}
//202009110054[]"偶数位+1奇数位-1"
*/

let l=[7,3,6,8,4,5,2,1]

function findmax(l){
  let max=l[0];
  for (let i = 1; i < l.length;i++){
    if (l[i]>max){max=l[i];}
  }
  return max;
}

function delemax(l){
  let a=findmax(l);
  let b=l.indexOf(a);
  l.splice(b,1);
  return l;
}

function jangxu(l){
  const len = l.length
  let ln=[];
  for (let i = 0; i < len;i++){
    ln[i]=findmax(l);
    delemax(l);
  }
  return ln;
}


//"打印符号列"
for(i=0;i<16;i=i+2){
  let x="";
  for(j=0;j<i+1;j++){
    x+="# "}
    console.log(x);}

    function zsj(n){
      for(i=0;i<2*n;i=i+2){
        let x="";
        for(k=2*n-i-2;k>0;k--){
          x=" "+x
        }
        for(j=0;j<i+1;j++){
          x=x+"# "
        }
      console.log(x);}
    }
//"三柱上挪圆片"
//"君的示例"
/*
function hanoi(n,a,b,c){
  if(n===1){console.log(a,"-->",c);}
  else{
    hanoi(n-1,a,c,b);
    hanoi(1,a,b,c);
    hanoi(n-1,b,a,c);
  }
}
*/
let nr=1
function hanoi(n,a,b,c){
  if(n===1){console.log(a,"-->",c,nr++);}
  else{
    hanoi(n-1,a,c,b);
    hanoi(1,a,b,c);
    hanoi(n-1,b,a,c);
  }
}

/*
    function nuo(x,y){
      let a=[];
      let b=[];
      let c=[];

      let l="large";
      let m="middle";
      let s="small";

      if (x===A){a=[l,m,s];}
      if (x===B){b=[l,m,s];}
      if (x===C){c=[l,m,s];}
      //"from x ; end with y"

      //"move one log one: push. pop. console.log"
      li="choose one form abc";
      yu="abc zuihouyiweisahngdezhi;bunengxuankong";
      lis="choose one from the other";
      lis.push(yu);
      li.pop(yu);
      console.log("choose",yu,"to",lis);

      if(a[2]===l ||
         b[2]===l ||
         c[2]===l ||
         a===[s,m] ||
         b===[s,m] ||
         c===[s,m] ||
         a===[s,m] ||
         b===[s,m] ||
         c===[s,l] ||
         a===[s,m] ||
         b===[s,m] ||
         c===[s,m] ){
           return "err";
         }

      if("chu xian chongfu"){
        return "chongfu";
      }

      if (y===A ,a===[l,m,s] ||
          y===B ,b===[l,m,s] ||
          y===C ,c===[l,m,s]
      ){
        return "finish";
      }

    }
*/




/*
//"君的示例"    
function print (n){
  n *= 2;

  for(let i = 0; i < n; i += 2) {
    let s = "";
    for(let j = 0; j < i + 1; j++) s += " #";

    let x = "";
    for(let k = (n-i) - 2; k > 0; k--) x += " ";

    console.log(x + s);
  }
}
*/



/*
function zsj(n){
  for(i=0;i<2*n;i=i+2){
    let x="";
    for(j=0;j<i+1;j++){
      x=x+"# ";
      for(k=n;k>0;k--){
        x="  "+x
      }
    }
      console.log(x);}
}
*/

/*
//"报错"
function jing(n){
  let xing=[];
  for (let i=1; i<2*n;i=2*i-1){
    xing.push('#')
  }
  console.log(xing);
}

function jings(n){
  let xing=[];
  for (let i=1; i<n+1;i++){
    jing(i);
  }
  console.log(xing);
}
*/

/*
//"这个能显示ʾ"
function jing(n){
  let xing=[];
  for (let i=0; i<n;i++;){
    xing.push('#')
  }
  console.log(xing);
}

function jings(n){
  let xing=[];
  for (let i=0; i<n;i++){
    jing(i+1);
  }
  console.log(xing);
}
*/

/*
function jing(n){
  for (let i=0; i<n;i++){
    console.log("#");
  }
}
*/

/*
let l=[7,3,6,8,4,5,2,1]

function findmax(l){
  let max=l[0];
  for (let i = 1; i < l.length;i++){
    if (l[i]>max){max=l[i];}
  }
  return max;
}

function delemax(l){
  let a=findmax(l);
  let b=l.indexOf(a);
  l.splice(b,1);
  console.log(l);
  return l;
}

function jangxu(l){
  let ln=[];
  const len=l.length;
  for (let i = 0; i < len;i++){
    let z=finndmax(l);
    ln.push(z);
    delemax(1);
  }
  return ln;
}

*/

/*
function jangxu(l){
  const len=l.length;
  let ln=[];
  for (let i = 1; i < len;i++){
    ln.push(finndmax(l));
    ln.push(finndmax(delemax(l)));}
  return ln;
  }
*/

/*
function jangxu(l){
  let ln=[];
  ln.push(finndmax(l));
  for (let i = 1; i < l.length;i++){
    if(i>1){ln.push(finndmax(delemax(l)));}}
  return ln;
  }
*/
/*
function jangxu(l){
  let ln=[];
  ln[0]=finndmax(l);
  for (let i = 1; i < l.length;i++){
    ln[i]=findmax(delemax(l));}
  return ln;
  }
*/

/*
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
*/
  
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

//"打印空心正方形"
function kz (n){
  let z=""
  for (i=0; i<n;i++){
    let x="";
    let y="";
    if(i===0 || i===n-1 ){
      for (j=0; j<n; j++ ){
        x+="# ";
      }
      x+="\n";
    }
    else{
      for (k=0;k<n-2;k++){
        y=y+"  ";
      }
      x="# "+y+"# "+"\n";
    }
    z+=x;
  }
  return z;
}

//"打印双壁空心正方形"
//"简化3"
function kz (n){
  let z=""
  for (i=0; i<n;i++){
    let x="";
    if(i===0 || i===n-1 || i===1 && n>4 || i===n-2 && n>4 ){
      for (j=0; j<n; j++ ){
        x+="# ";
      }
      x+="\n";
    }
    else{
      for (k=0;k<n-2;k++){
        x=x+"  ";
      }
      if(n>4){
        x="# # "+x.slice(0,x.length-4)+"# # "+"\n";
      }
      else{
        x="# "+x+"# "+"\n";
      }
    }
    z+=x;
  }
  return z;
}

//"简化2"
/*
function kz (n){
  let z=""
  for (i=0; i<n;i++){
    let x="";
    let y="";
    if(i===0 || i===n-1 || i===1 && n>4 || i===n-2 && n>4 ){
      for (j=0; j<n; j++ ){
        x+="# ";
      }
      x+="\n";
    }
    else{
        for (k=0;k<n-2;k++){
          y=y+"  ";
        }
        if(n>4){
          x="# # "+y.slice(0,y.length-4)+"# # "+"\n";
        }
        else{
          x="# "+y+"# "+"\n";
        }
    }
    z+=x;
  }
  return z;
}
*/
//"简化1"
/*
function kz (n){
  let z=""
  for (i=0; i<n;i++){
    let x="";
    let y="";
    if(i===0 || i===n-1 || i===1 && n>4 || i===n-2 && n>4 ){
      for (j=0; j<n; j++ ){
        x+="# ";
      }
      x+="\n";
    }
    else{
      if(n>4){
        for (k=0;k<n-4;k++){
          y=y+"  ";
        }
        x="# # "+y+"# # "+"\n";
      }
      else{
        for (k=0;k<n-2;k++){
          y=y+"  ";
        }
        x="# "+y+"# "+"\n";
      }
    }
    z+=x;
  }
  return z;
}
*/
//"未简化"
/*
function kz (n){
  let z=""
  for (i=0; i<n;i++){
    let x="";
    let y="";
    if(n>4){
      if(i===0 || i===1 || i===n-2 ||i===n-1 ){
        for (j=0; j<n; j++ ){
          x+="# ";
        }
        x+="\n";
      }
      else{
        for (k=0;k<n-4;k++){
          y=y+"  ";
        }
        x="# # "+y+"# # "+"\n";
      }
      z+=x;
    }
    else{
      if(i===0 || i===n-1 ){
        for (j=0; j<n; j++ ){
         x+="# ";
        }
        x+="\n";
      }
      else{
        for (k=0;k<n-2;k++){
         y=y+"  ";
        }
        x="# "+y+"# "+"\n";
      }
     z+=x;
    }
  }
  return z;
}
*/

/*
for(i=0;i<3;i++){
  let x="";
  for(j=0;j<i+1;j++){
    x+="#";
  }
    console.log(x);}
*/
/*
#
##
###
*/

/*
for(i=0;i<3;i++){
  let x="";
  for(j=3-i;j>0;j--){
    x+="#";
  }
  console.log(x);
}
*/
/*
###
##
#
*/

/*
for(i=0;i<3;i++){
  let x="";
  for(j=0;j<i+1;j++){
    x+="#";
  }
  for(j=2-i;j>0;j--){
    x+="#";
  }
  console.log(x);
}
*/
/*
3###
*/

/*
for(i=0;i<3;i++){
  let x="";
  for(j=3;j>0;j--){
    x+="#";
  }
  console.log(x);
}
*/
/*
3###
*/


/*
kz(4)
####
#  #
#    #
#    #####
*/

/*
function kz (n){
  for (i=0; i<n;i++){
    let x="";
    let y="";
    if(i===0 || i===n-1 ){
      for (j=0; j<n; j++ ){
        x+="#";
      }
      x+="\n";
    }
    else{
      for (k=0;k<n-2;k++){
        y=y+" ";
        x="#"+y+"#";
      }
      x+="\n";
    }
    console.log(x);
  }
}
/*
kz(4)
####
#  #
#    #
#    #####
*/

//"阶乘n!"
/*
let a=1;
for(i=0;i<5;i++){
  a=a*(i+1);
}
*/

function fac(n){
  let a=1;
for(i=0;i<n;i++){
  a=a*(i+1);
}
return a;
}

//"君的示例""练习迭代"
/*
function fa(n){
  if(n===1){return 1;}
  return n*fa(n-1);
}
*/

/*
let a=1;
function fac(n){
  if(n===1){return 1;}
  a=a*fac(n);
  return a*fac(n-1);
}
*/
/*
fac(n)=1
*/


//"map学习"
/*
function fa(){console.log("fa");}

function fb(f){
  console.log("fb");
  f();
}
/*
fb(fa)
fb
fa
*/

/*
const l=[1,2,3,4,5]
const ln=l.map(x=>x*3)
/*
l
(5) [1, 2, 3, 4, 5]

ln
(5) [3, 6, 9, 12, 15]
*/

/*
const ll=ln.map(x=>x%2===0)
/*
ll
(5) [false, true, false, true, false]
*/

/*
l.map(x=>{return x%2!==0})
/*
(5) [true, false, true, false, true]
*/

/*
l.map(x=>{
  if(x===1){return "a";}
  if(x===2){return "b";}
  if(x===3){return "c";}
})
/*
(5) ["a", "b", "c", undefined, undefined]
*/

//"practice funtion"
/*
function square(n){
  return n*n;
}
*/
/*
square(3)
9
*/
/*
function myFunc(o){
  o.make="Toyota";
}
let mycar={make:"Honda",model:"Accord",year:"1998"};
let x,y;
x=mycar.make;

myFunc(mycar);
y=mycar.make;
*/
/*
"Toyota"
*/

/*
let mybike={make:"Yadi",model:"white01",year:"2018"}; 

function huanche(o){
  o.make="Lvyuan";
  o.model="black03";
  o.year="2020";
}
*/
/*
huanche(mybike)
mybike
{made: "Yadi", model: "black03", year: "2020", make: "Lvyuan"}
*/

/*
const square=function(n){return n*n;};
let x=square(3);
*/
/*
x
9
*/
/*
const factorial=function fac(n){return n<2?1:n*fac(n-1)};
console.log(factorial(3));
*/
/*
6
console.log(factorial(1));
1
*/
/*
function map(f,a){
  let result=[];
  let i;
  for(i=0;i!=a.length;i++)
    result[i]=f(a[i]);
  return result; 
}
const f=function(x){return x*x*x;}
console.log(map(f,[0,1,2,5,10]));
*/
/*
(5) [0, 1, 8, 125, 1000]
*/
/*
let myFunc;
if(num==0){
  myFunc=function(o){
    o.make="Toyota";
  }
}
*/

//"practice grammar and type"
/*
let l=[];
let ln=[1]
!ln[0]
false
!l[0]
true

(+"1.1")+(+"1.1")
2.2

"1.1"+"1.1"
"1.11.1"

"37"+"7"
"377"

"37"-"7"
30

"hi"-"h"
NaN

Number.parseInt("1.1")
1

let lnn=["a","b","c"]
lnn.length
3

let lnnn=[,"a","b","c"]
lnnn.length
4

let lnnnn=[,"a",,"b","c"]
lnnnn.length
5

let lnnnnn=[,"a",,"b","c",]
lnnnnn.length
5

3.14e+2
314

3**2
9

9**3
27

3.14*10**2
314

3.14*0.1**2
0.031400000000000004

3.14e-2
0.0314
*/

/*

let foo={a:"alpha",2:"two"};
console.log(foo.a);
alpha

console.log(foo[2])
two

console.log(foo.2)
Uncaught SyntaxError: missing ) after argument list

console.log(foo[a])
Uncaught ReferenceError: a is not defined
    at <anonymous>:1:17

console.log(foo["a"])

alpha

console.log(foo["2"])
two

*/

/*

console.log("tom's car".length)
9

"\0"
"Null空"

"\b"
"退格符"

"\f"
"换页符"

"\n"
"换行符"

"\r"
"回车符"

"\t"
"Tab（制表符）"

"\v"
"垂直制表符"

let quote="He read \"the book\" by tom";
console.log(quote);
He read "the book" by tom

let home="c:\\temp";

*/

/*
function factorial(n){
  if(n===0 ||n===1 ){return 1 ;
  }
  else{
  return (n*factorial(n-1));
  }
}

let a=factorial(1);
let b=factorial(2);
let c=factorial(3);
let d=factorial(4);
let e=factorial(5);

a
1
b
2
c
6
d
24
e
120
*/
/*
let n1=20;
let n2=3;

function qiuhe(){
  return n1*n2;
}

qiuhe()
*/

/*
function getScore(){
  let n1=2;
  let n2=3;
  let name="Chamahk"
  function add(){
    return name +"scored"+n1+n2;
  }
  return add();
}

getScore()
"Chamahkscored23"

function getScore(){
  let n1=2;
  let n2=3;
  let name="Chamahk"
  function add(){
    return name +"scored"+(n1+n2);
  }
  return add();
}

getScore()
"Chamahkscored5"
*/


//"practice class"
/*
class polygon{
  constructor(height,width){
    this.area=height * width;
  }
}

console.log(new polygon(4,3).area);
12
*/
/*
class Polygon{
  constructor(height,width){
    this.name='Polygon';
    this.height=height;
    this.width=width;
  }
}

class Square extends Polygon{
  constructor(length){
    super(length,length);
    this.name='Square';
  }
}
*/

/*
class Square extends Polygon{
  constructor(length){
    super(length,length);
    this.name='Square';
  }

  get area(){
    return this.height * this.width;
  }
}
*/

//practice class static
/*
class StaticMethodCall {
  static staticMethod(){
    return 'Static method has been called';
  }
  static anotherStaticMethod(){
    return this.staticMethod() + ' form another static method';
  }
}
StaticMethodCall.staticMethod();

StaticMethodCall.anotherStaticMethod();

class Tripple{
  static tripple(n = 1){
    return n*3;
  }
}

class BiggerTripple extends Tripple{
  static tripple(n){
    return super.tripple(n)*super.tripple(n);
  }
}

console.log(Tripple.tripple());
console.log(Tripple.tripple(6));

let tp=new Tripple();

console.log(BiggerTripple.tripple(3));
console.log(tp.tripple());

*/

//practice class fields
/*
class ClassWithStaticField{
  static staticField= 'static field';
}

console.log(ClassWithStaticField.staticField);
"static field"
*/

/*
class ClassWithStaticField{
  static staticField;
}

console.assert(ClassWithStaticField.hasOwnProperty('staticField'));
console.log(ClassWithStaticField.staticField);
"undefind"
*/

/*
class ClassWithStaticField{
  static baseStaticField= 'base field';
}

class SubClassWithStaticField extends ClassWithStaticField{
  static subStaticField='sub class field';
}

console.log(SubClassWithStaticField.subStaticField);
"sub class field"
console.log(SubClassWithStaticField.baseStaticField);
"base field"
*/

/*
class ClassWithStaticField{
  static baseStaticField='base static field';
  static anotherBaseStaticField=this.baseStaticField;
  static baseStaticField(){return 'base static method output';}
}

class SubClassWithStaticField extends ClassWithStaticField{
  static subStaticField=super.baseStaticMethod();
}

console.log(ClassWithStaticField.anotherBaseStaticField);
"base static field"

console.log(SubClassWithStaticField.subStaticField);
"base static method output"
*/

/*
class ClassWithInstanceField{
  instanceField='instance field';
}

const instance=new ClassWithInstanceField();
console.log(instance.instanceField);
"instance field"
*/

class ClassWithInstanceField{
  instanceField;
}

const instance=new ClassWithInstanceField();
console.assert(instance.hasOwnProperty('instanceField'));
console.log(instance.instanceField);
"undefined"


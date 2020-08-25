let myHeading = document.querySelector('h6');
myHeading.textContent = 'Hello world!';

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
let myUser = document.querySelector('h7');

function setUserName(){
  let myName = prompt('�������������');
  if(!myName || myName === null){
    setUserName();
  } else {
    localStorage.setItem('name',myName);
    myUser.textContent = '���!' + myName;
  }
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myUser.textContent = '��ã�' + storedName;
}

myButton.onclick = function(){
  setUserName();
}
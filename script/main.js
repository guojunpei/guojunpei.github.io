let myHeading = document.querySelector('h6');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc.endsWith('image/wx.jpg')){
      myImage.setAttribute('src', 'image/wxewm.jpg');
    } else {
      myImage.setAttribute('src', 'image/wx.jpg');
    }
}
myImage.style.cursor='pointer'

function btnClickHandler(Obj){
    btntext1.textContent=Obj.id;
    btntext1.style.color=Obj.style.color;
    btntext2.textContent+=Obj.id+" : click;";
}

function btnMouseOverHandler(Obj){
    btntext1.textContent=Obj.id;
    btntext1.style.color=Obj.style.color;
    btntext2.textContent+=Obj.id+" : mouse over;";
}

/*
document.querySelector("#app").innerHTML = `
<div>
  <button id="btnA">A</button>
  <button id="btnB">B</button>
  <button id="btnC">C</button>

  <div id="btnTxt1"></div>
  <div id="btnTxt2"></div>
</div>
`;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

const btnTxt1 = document.querySelector("#btnTxt1");
const btnTxt2 = document.querySelector("#btnTxt2");
let txt1 = "";

function btnClickHandler(btn) {
  txt1 += btn;
  btnTxt1.textContent = txt1; //`btn${btnNr}`;
}

function btnMouseOverHandler(btn) {
  btnTxt2.textContent = btn;
  if (btn === "B") btnTxt2.style.color = "blue";
  if (btn === "C") btnTxt2.style.color = "red";
  else btnTxt2.style.color = "green";
}

// addEventListener(eventType, function)
document.querySelector("#btnA").addEventListener("mouseover", function () {
  btnTxt2.textContent = "A";
});

document
  .querySelector("#btnB")
  // arrow function
  .addEventListener("mouseover", () => btnMouseOverHandler("B"));

document
  .querySelector("#btnC")
  .addEventListener("mouseover", () => btnMouseOverHandler("C"));

document
  .querySelector("#btnA")
  .addEventListener("click", () => btnClickHandler("A"));

document
  .querySelector("#btnB")
  .addEventListener("click", () => btnClickHandler("B"));

document
  .querySelector("#btnC")
  .addEventListener("click", () => btnClickHandler("C"));

*/
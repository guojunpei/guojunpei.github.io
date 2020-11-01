
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

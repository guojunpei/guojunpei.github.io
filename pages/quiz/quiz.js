let q1={
    name:"q1",
    question:"Which of the following is not JavaScript Data Types?",
    A:"Undefined",
    B:"Number",
    C:"Boolean",
    D:"Float",
    rightAnswer:"Float",
    type:"radio",
};

let q2={
    name:"q2",
    question:"When a user views a page containing a JavaScript program, which machine actually executes the script?",
    A:"The User’s machine running a Web browser",
    B:"The Web server",
    C:"A central machine deep within Netscape’s corporate offices",
    D:"None of the above",
    rightAnswer:"D",
    type:"radio",
};

let q3={
    name:"q3",
    question:"Inside which HTML element do we put the JavaScript?",
    A:"<js>",
    B:"<scripting>",
    C:"<script>",
    D:"<javascript>",
    rightAnswer:"D",
    type:"radio",
};

let q4={
    name:"q4",
    question:"Which is the correct way to write a JavaScript array?",
    A:"var txt = new Array(1:”tim”,2:”kim”,3:”jim”)",
    B:"var txt = new Array:1=(“tim”)2=(“kim”)3=(“jim”)",
    C:"var txt = new Array(“tim”,”kim”,”jim”)",
    D:"var txt = new Array=”tim”,”kim”,”jim”",
    rightAnswer:"D",
    type:"radio",
};

let q5={
    name:"q5",
    question:"Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",
    A:"onfocus",
    B:"onblur",
    C:"onclick",
    D:"ondblclick",
    rightAnswer:"D",
    type:"radio",
};

let q6={
    name:"q6",
    question:"Which of the following is the structure of an if statement?",
    A:"if (conditional expression is true) thenexecute this codeend if",
    B:"if (conditional expression is true)execute this codeend if",
    C:"if (conditional expression is true) {then execute this code>->}",
    D:"if (conditional expression is true) then {execute this code}",
    rightAnswer:"D",
    type:"radio",
};

let q7={
    name:"q7",
    question:"What are JavaScript primitive data types:",
    A:"string",
    B:"immutable",
    C:"number",
    D:"bigint",
    E:"object",
    F:"Array",
    G:"Set",
    H:" Map",
    I:"Function",
    J:"Date",
    K:"boolean",
    L:"undefined",
    M:"symbol",
    rightAnswer:"ACFK",
    type:"checkbox",
};

let qusetionNow=q1;

function showQA(qn){
    qusetionNow=qn;
    document.getElementById("question-number").innerText=qn.name;
    document.getElementById("question-content").innerText=qn.question;
    /*document.getElementById("a1").value=qn.A;
    document.getElementById("a2").value=qn.B;
    document.getElementById("a3").value=qn.C;
    document.getElementById("a4").value=qn.D;
    document.getElementById("a1l").innerText=qn.A;
    document.getElementById("a2l").innerText=qn.B;
    document.getElementById("a3l").innerText=qn.C;
    document.getElementById("a4l").innerText=qn.D;
    if(qn.answer.length>1){
        document.getElementById("a1").type="checkbox";
        document.getElementById("a2").type="checkbox";
        document.getElementById("a3").type="checkbox";
        document.getElementById("a4").type="checkbox";
    }*/

    let questionForm = document.querySelector("form");
    questionForm.innerHTML="";
    let l=Object.values(qn);
    for(let i=2;i<l.length-2;i++){
        let answersOfOne=document.createElement("div");
        let answerschoose=document.createElement("input");
        let answersShow=document.createElement("label");
        answersOfOne.style.class="answers";
        answerschoose.style.type=qn.type;
        answerschoose.style.name="answer";
        answerschoose.style.id="a"+(i-1);
        answerschoose.style.value=l[i];
        answersOfOne.appendChild(answerschoose);
        answersShow.style.id="a"+(i-1)+"l";
        answersShow.style.for="a"+(i-1);
        answersShow.innerText=l[i];
        answersOfOne.appendChild(answersShow);
        questionForm.appendChild(answersOfOne);
    }
    let btn = document.createElement("button");
    let btnZone= document.createElement("div");
    btn.style.class="btn";
    btn.style.type="submit";
    btn.style.backgroundColor="blue";
    btn.style.color="white";
    btn.innerText="submit and next";
    btnZone.appendChild(btn);
    questionForm.appendChild(btnZone);
}

showQA(q1);

let save=[0];
let questionList=[q1,q2,q3,q4,q5,q6,q7];

let form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    console.log(e);
    e.preventDefault();
    new FormData(form);
});

form.addEventListener("formdata",(e)=>{
    console.log(e);
    const obj = Object.fromEntries(e.formData);
    obj.name=document.getElementById("question-number").innerText;
    console.log(obj);
    save.push(obj);
    console.log(qusetionNow);
    for(let i=0;i<7;i++){
        if(qusetionNow===questionList[i]){
            if(questionList[i].rightAnswer===obj.answer){
                save[0]=save[0]+1;
                console.log(questionList[i].rightAnswer);
                console.log(obj.answer);
            }
        }
    }
    console.log("score: "+save[0]);
    let qusetionNext=questionList[(questionList.indexOf(qusetionNow)+1)];
    showQA(qusetionNext);
    qusetionNow=qusetionNext;
    document.getElementById("show-score-number").innerText = save[0];
})



let q1={
    question:"Which of the following is not JavaScript Data Types?",
    A:"Undefined",
    B:"Number",
    C:"Boolean",
    D:"Float",
    answer:"D",
};

let q2={
    question:"When a user views a page containing a JavaScript program, which machine actually executes the script?",
    A:"The User’s machine running a Web browser",
    B:"The Web server",
    C:"A central machine deep within Netscape’s corporate offices",
    D:"None of the above",
    answer:"D",
};

let q3={
    question:"Inside which HTML element do we put the JavaScript?",
    A:"<js>",
    B:"<scripting>",
    C:"<script>",
    D:"<javascript>",
    answer:"D",
};

let q4={
    question:"Which is the correct way to write a JavaScript array?",
    A:"var txt = new Array(1:”tim”,2:”kim”,3:”jim”)",
    B:"var txt = new Array:1=(“tim”)2=(“kim”)3=(“jim”)",
    C:"var txt = new Array(“tim”,”kim”,”jim”)",
    D:"var txt = new Array=”tim”,”kim”,”jim”",
    answer:"D",
};

let q5={
    question:"Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",
    A:"onfocus",
    B:"onblur",
    C:"onclick",
    D:"ondblclick",
    answer:"D",
};

let q6={
    question:"Which of the following is the structure of an if statement?",
    A:"if (conditional expression is true) thenexecute this codeend if",
    B:"if (conditional expression is true)execute this codeend if",
    C:"if (conditional expression is true) {then execute this code>->}",
    D:"if (conditional expression is true) then {execute this code}",
    answer:"D",
};

let q7={
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
    answer:"ACFK",
};

function showQA(qn){
    let questionContent=document.getElementById("question-zone").innerText;
    let a1v=document.getElementById("a1").value;
    let a2v=document.getElementById("a2").value;
    let a3v=document.getElementById("a3").value;
    let a4v=document.getElementById("a4").value;
    let a1lt=document.getElementById("a1l").innerText;
    let a2lt=document.getElementById("a2l").innerText;
    let a3lt=document.getElementById("a3l").innerText;
    let a4lt=document.getElementById("a4l").innerText;
    questionContent=qn.question;
    a1v=qn.A;
    a1lt=qn.A;
    a2v=qn.B;
    a2lt=qn.B;
    a3v=qn.C;
    a3lt=qn.C;
    a4v=qn.D;
    a4lt=qn.D;
}

showQA(q1);
console.log("q1")

document.querySelector("form").addEventListener("submit",)
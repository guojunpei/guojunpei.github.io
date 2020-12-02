let q1={
    name:"q1",
    question:"Which of the following is not JavaScript Data Types?",
    A:"Undefined",
    B:"Number",
    C:"Boolean",
    D:"Float",
    answer:"D",
};

let q2={
    name:"q2",
    question:"When a user views a page containing a JavaScript program, which machine actually executes the script?",
    A:"The User’s machine running a Web browser",
    B:"The Web server",
    C:"A central machine deep within Netscape’s corporate offices",
    D:"None of the above",
    answer:"D",
};

let q3={
    name:"q3",
    question:"Inside which HTML element do we put the JavaScript?",
    A:"<js>",
    B:"<scripting>",
    C:"<script>",
    D:"<javascript>",
    answer:"D",
};

let q4={
    name:"q4",
    question:"Which is the correct way to write a JavaScript array?",
    A:"var txt = new Array(1:”tim”,2:”kim”,3:”jim”)",
    B:"var txt = new Array:1=(“tim”)2=(“kim”)3=(“jim”)",
    C:"var txt = new Array(“tim”,”kim”,”jim”)",
    D:"var txt = new Array=”tim”,”kim”,”jim”",
    answer:"D",
};

let q5={
    name:"q5",
    question:"Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",
    A:"onfocus",
    B:"onblur",
    C:"onclick",
    D:"ondblclick",
    answer:"D",
};

let q6={
    name:"q6",
    question:"Which of the following is the structure of an if statement?",
    A:"if (conditional expression is true) thenexecute this codeend if",
    B:"if (conditional expression is true)execute this codeend if",
    C:"if (conditional expression is true) {then execute this code>->}",
    D:"if (conditional expression is true) then {execute this code}",
    answer:"D",
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
    answer:"ACFK",
};

function showQA(qn){
    document.getElementById("question-number").innerText=qn.name;
    document.getElementById("question-content").innerText=qn.question;
    document.getElementById("a1").value=qn.A;
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
    }

}

showQA(q1);

let save=[];

let form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    new FormData(formMain);
});

form.addEventListener("formdata",(e)=>{
    const obj = Object.fromEntries(e.formData);
    document.getElementById("show-name").innerText = obj["name"];
})


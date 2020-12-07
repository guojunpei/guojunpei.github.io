let Q1={
    name:"q1",
    question:"Which of the following is not JavaScript Data Types?",
    A:"Undefined",
    B:"Number",
    C:"Boolean",
    D:"Float",
    rightAnswer:"D",
    type:"radio",
};

let q2={
    name:"q2",
    question:"When a user views a page containing a JavaScript program, which machine actually executes the script?",
    A:"The User’s machine running a Web browser",
    B:"The Web server",
    C:"A central machine deep within Netscape’s corporate offices",
    D:"None of the above",
    rightAnswer:"A",
    type:"radio",
};

let Q3={
    name:"q3",
    question:"Inside which HTML element do we put the JavaScript?",
    A:"<js>",
    B:"<scripting>",
    C:"<script>",
    D:"<javascript>",
    rightAnswer:"C",
    type:"radio",
};

let Q4={
    name:"q4",
    question:"Which is the correct way to write a JavaScript array?",
    A:"var txt = new Array(1:”tim”,2:”kim”,3:”jim”)",
    B:"var txt = new Array:1=(“tim”)2=(“kim”)3=(“jim”)",
    C:"var txt = new Array(“tim”,”kim”,”jim”)",
    D:"var txt = new Array=”tim”,”kim”,”jim”",
    rightAnswer:"C",
    type:"radio",
};

let Q5={
    name:"q5",
    question:"Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",
    A:"onfocus",
    B:"onblur",
    C:"onclick",
    D:"ondblclick",
    rightAnswer:"B",
    type:"radio",
};

let Q6={
    name:"q6",
    question:"Which of the following is the structure of an if statement?",
    A:"if (conditional expression is true) thenexecute this codeend if",
    B:"if (conditional expression is true)execute this codeend if",
    C:"if (conditional expression is true) {then execute this code>->}",
    D:"if (conditional expression is true) then {execute this code}",
    rightAnswer:"C",
    type:"radio",
};

let Q7={
    name:"q7",
    question:"What are JavaScript primitive data types:",
    A:"string",
    B:"immutable",
    C:"number",
    D:"bigint",
    E:"object",
    F:"Array",
    G:"Set",
    H:"Map",
    I:"Function",
    J:"Date",
    K:"boolean",
    L:"undefined",
    M:"symbol",
    rightAnswer:"ACDKLM",
    type:"checkbox",
};

let qusetionNow=q1;

function showQA(qn){
    qusetionNow=qn;
    document.getElementById("question-number").innerText=qn.name;
    document.getElementById("question-content").innerText=qn.question;

    const questionForm = document.querySelector("form");
    questionForm.innerHTML="";
    let l=Object.values(qn);
    let lk=Object.keys(qn);
    for(let i=2;i<l.length-2;i++){
        const answersOfOne=document.createElement("div");
        const answerschoose=document.createElement("input");
        const answersShow=document.createElement("label");
        answersOfOne.className="answers";
        answerschoose.type=qn.type;
        answerschoose.name="answer";
        answerschoose.id="a"+(i-1);
        answerschoose.value=lk[i];
        answerschoose.className="select-style";
        answersOfOne.appendChild(answerschoose);
        answersShow.id="a"+(i-1)+"l";
        answersShow.htmlFor="a"+(i-1);
        answersShow.innerText=l[i];
        answersOfOne.appendChild(answersShow);
        questionForm.appendChild(answersOfOne);
    }
    const btn = document.createElement("button");
    const btnZone= document.createElement("div");
    btn.className="btn";
    btn.type="submit";
    btn.style.backgroundColor="blue";
    btn.style.color="white";
    btn.innerText="submit and next";
    btnZone.appendChild(btn);
    questionForm.appendChild(btnZone);
}

showQA(q1);

let save=[0];
const questionList=[q1,q2,q3,q4,q5,q6,q7];

const form=document.querySelector("form");

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
    if(qusetionNow.type==="radio"){
        if(qusetionNow.rightAnswer===obj.answer){
            save[0]=save[0]+10;
        }else{save[0]=save[0]-5;}
    }else{
        if(qusetionNow.rightAnswer===obj.answer){
            save[0]=save[0]+20;
        }else{
            let sn=0;
            const ras =qusetionNow.rightAnswer;
            for(let b of obj.answer){
                for(let a of ras){
                    if(a===b){
                        sn=sn+15/ras.length;
                    }else{
                        sn=sn-10;
                    }
                }
            }
            if(sn<-30){save[0]=save[0]-30;}else{
                save[0]=save[0]+sn;
            }
        }
    }
//"单选题（用 radio） 答对 10分，答错 -5 分 扣分"
//"多选题 （用 checkbox) 全对 20 分；选错 一个 -10 扣分（错误数 * -10）；最多扣 30分 （-30）；答对单个题分数为： 15 / 对的选项数量 全对 + 5分 （全对 20分）"


    console.log("score: "+save[0]);
    let qusetionNext=questionList[(questionList.indexOf(qusetionNow)+1)];
    showQA(qusetionNext);
    qusetionNow=qusetionNext;
    document.getElementById("show-score-number").innerText = save[0];
})
let q1={
    id:"Q1",
    question:"Which of the following is not JavaScript Data Types?",
    answerOption:{
        A:"Undefined",
        B:"Number",
        C:"Boolean",
        D:"Float",
    },
    rightAnswer:{
        optionKey:["D"],
        optionValue:["Float"],
    },
    type:"radio",
};

let q2={
    id:"Q2",
    question:"When a user views a page containing a JavaScript program, which machine actually executes the script?",
    answerOption:{
        A:"The User’s machine running a Web browser",
        B:"The Web server",
        C:"A central machine deep within Netscape’s corporate offices",
        D:"None of the above",
    },
    rightAnswer:{
        optionKey:["A"],
        optionValue:["The User’s machine running a Web browser"],
    },
    type:"radio",
};

let q3={
    id:"Q3",
    question:"Inside which HTML element do we put the JavaScript?",
    answerOption:{
        A:"<js>",
        B:"<scripting>",
        C:"<script>",
        D:"<javascript>",
    },
    rightAnswer:{
        optionKey:["C"],
        optionValue:["<script>"],
    },
    type:"radio",
};

let q4={
    id:"Q4",
    question:"Which is the correct way to write a JavaScript array?",
    answerOption:{
        A:"var txt = new Array(1:”tim”,2:”kim”,3:”jim”)",
        B:"var txt = new Array:1=(“tim”)2=(“kim”)3=(“jim”)",
        C:"var txt = new Array(“tim”,”kim”,”jim”)",
        D:"var txt = new Array=”tim”,”kim”,”jim”",
    },
    rightAnswer:{
        optionKey:["C"],
        optionValue:["var txt = new Array(“tim”,”kim”,”jim”)"],
    },
    type:"radio",
};

let q5={
    id:"Q5",
    question:"Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",
    answerOption:{
        A:"onfocus",
        B:"onblur",
        C:"onclick",
        D:"ondblclick",
    },
    rightAnswer:{
        optionKey:["B"],
        optionValue:["onblur"],
    },
    type:"radio",
};

let q6={
    id:"Q6",
    question:"Which of the following is the structure of an if statement?",
    answerOption:{
        A:"if (conditional expression is true) thenexecute this codeend if",
        B:"if (conditional expression is true)execute this codeend if",
        C:"if (conditional expression is true) {then execute this code>->}",
        D:"if (conditional expression is true) then {execute this code}",
    },
    rightAnswer:{
        optionKey:["C"],
        optionValue:["if (conditional expression is true) {then execute this code>->}"],
    },
    type:"radio",
};

let q7={
    id:"Q7",
    question:"What are JavaScript primitive data types:",
    answerOption:{
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
    },
    rightAnswer:{
        optionKey:["A","C","D","K","L","M"],
        optionValue:["string","number","bigint","boolean","undefined","symbol"],
    },
    type:"checkbox",
};

const questionList=[q1,q2,q3,q4,q5,q6,q7];

const mainPaper = document.getElementById("main-paper");

for(const qn of questionList){
    const questionAndAnswer = document.createElement("div");
    questionAndAnswer.className="question-and-answer";

    const questionZone = document.createElement("div");
    const questionNumber = document.createElement("div");
    const questionContent = document.createElement("div");
    questionZone.className="question-zone";
    questionNumber.innerText=qn.id+":";
    questionNumber.className="question-number";
    questionContent.innerText=qn.question;
    questionContent.className="question-content";
    questionZone.appendChild(questionNumber);
    questionZone.appendChild(questionContent);
    questionAndAnswer.appendChild(questionZone);

    const answerZone = document.createElement("div");
    answerZone.className="answer-zone";
    for(let [k,v] of Object.entries(qn.answerOption)){
        const answersOfOne=document.createElement("div");
        const answerschoose=document.createElement("input");
        const answersShow=document.createElement("label");
        answersOfOne.className="answers";
        answerschoose.type=qn.type;
        answerschoose.name=qn.id;
        answerschoose.id=`a${qn.id}${k}`;
        answerschoose.value=k;
        //answerschoose.className="select-style";
        answersOfOne.appendChild(answerschoose);
        //answersShow.id="al"+qn.id+k;
        //answersShow.className="select-style";
        answersShow.htmlFor=`a${qn.id}${k}`;
        answersShow.innerText=`${k}:${v}`;
        answersOfOne.appendChild(answersShow);
        answerZone.appendChild(answersOfOne);
    }
    questionAndAnswer.appendChild(answerZone);
    mainPaper.appendChild(questionAndAnswer);
}

let save=[0];
const mainForm = document.querySelector("form");

mainForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    new FormData(mainForm);
});

mainForm.addEventListener("formdata",(e)=>{
    const userAnswer = Object.fromEntries(e.formData);
    const uAMap=e.formData;

    save.push(userAnswer);
    
//    let rightAnswerQ={};
    const rAMap=new Map();
    for(const qn of questionList){
        rAMap.set(qn.id,qn.rightAnswer);
    }
//    rightAnswerQ=Object.fromEntries(rAMap);

    let questionsAndScore="";

    for(let [rk,rv] of rAMap){
        let sn=0;
        if(rk!=="Q7"){
            for(let [uk,uv] of uAMap){
                if(rk===uk){
                    if(rv===uv){
                        sn=10;
                    }else{
                        sn=-5;
                    }
                    save[0]=save[0]+sn;
                    questionsAndScore=questionsAndScore+rk+":full score 10,yourscore"+sn+";\n";
                }
            }
            //"单选题（用 radio） 答对 10分，答错 -5 分 扣分"
        }else{
            for(let [uk,uv] of uAMap){
                if(uk==="Q7"){
                    for(let b of uv){
                        if(rv.includes(b)){
                            sn=sn+15/rv.length;
                        }else{
                            sn=sn-10;
                        }
                        if(sn===15){
                            sn=20;
                        }
                    }
                }
            }
            if(sn<-30){
                sn=-30;
            }else{
                sn=sn;
            }
            save[0]=save[0]+sn;
            questionsAndScore=questionsAndScore+"Q7"+":full score 20,yourscore"+sn+";\n";
            //"多选题 （用 checkbox) 全对 20 分；选错 一个 -10 扣分（错误数 * -10）；最多扣 30分 （-30）；答对单个题分数为： 15 / 对的选项数量 全对 + 5分 （全对 20分）"
        }
    }
    
    document.getElementById("show-paper").style.display="none";
    document.getElementById("show-score").style.display="flex";
    document.getElementById("show-score-text").style.fontSize="2rem";
    document.getElementById("show-score-text").style.color="white";
    document.getElementById("show-score-text").innerText="Congratulations!\n All the questions has be finshed!\n your final score is";
    document.getElementById("show-score-number").style.fontSize="4rem";
    document.getElementById("show-score-number").innerText = save[0];
    document.getElementById("questions-and-score").innerText = questionsAndScore;
})
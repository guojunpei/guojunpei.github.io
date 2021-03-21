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
        optionScore:{
            right:10,
            wrong:-5,
            includeEquipartition:0,
            min:0,
            notInclude:0,
        },
        optionScoreRule:"答对 10分，答错 -5 分 扣分",
        optionKey:["D"],
        optionValue:["Float"],
    },
    type:"radio",
    score:0,
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
        optionScore:{
            right:10,
            wrong:-5,
            includeEquipartition:0,
            min:0,
            notInclude:0,
        },
        optionScoreRule:"答对 10分，答错 -5 分 扣分",
        optionKey:["A"],
        optionValue:["The User’s machine running a Web browser"],
    },
    type:"radio",
    score:0,
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
        optionScore:{
            right:10,
            wrong:-5,
            includeEquipartition:0,
            min:0,
            notInclude:0,
        },
        optionScoreRule:"答对 10分，答错 -5 分 扣分",
        optionKey:["C"],
        optionValue:["<script>"],
    },
    type:"radio",
    score:0,
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
        optionScore:{
            right:10,
            wrong:-5,
            includeEquipartition:0,
            min:0,
            notInclude:0,
        },
        optionScoreRule:"答对 10分，答错 -5 分 扣分",
        optionKey:["C"],
        optionValue:["var txt = new Array(“tim”,”kim”,”jim”)"],
    },
    type:"radio",
    score:0,
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
        optionScore:{
            right:10,
            wrong:-5,
            includeEquipartition:0,
            min:0,
            notInclude:0,
        },
        optionScoreRule:"答对 10分，答错 -5 分 扣分",
        optionKey:["B"],
        optionValue:["onblur"],
    },
    type:"radio",
    score:0,
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
        optionScore:{
            right:10,
            wrong:-5,
            includeEquipartition:0,
            min:0,
            notInclude:0,
        },
        optionScoreRule:"答对 10分，答错 -5 分 扣分",
        optionKey:["C"],
        optionValue:["if (conditional expression is true) {then execute this code>->}"],
    },
    type:"radio",
    score:0,
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
        optionScore:{
            right:20,
            wrong:0,
            includeEquipartition:15,
            min:-30,
            notInclude:-10,
        },
        optionScoreRule:"全对 20 分；选错 一个 -10 扣分（错误数 * -10）；最多扣 30分 （-30）；答对单个题分数为： 15 / 对的选项数量 全对 + 5分 （全对 20分）",
        optionKey:["A","C","D","K","L","M"],
        optionValue:["string","number","bigint","boolean","undefined","symbol"],
    },
    type:"checkbox",
    score:0,
};

const questionList=[q1,q2,q3,q4,q5,q6,q7];

document.getElementById("tip-number-all").innerText=`${questionList.length}`;

const mainPaper = document.getElementById("main-paper");

for(const qn of questionList){
    const questionWrapper = document.createElement("div");
    questionWrapper.className="question-and-answer";

    const questionContainer = document.createElement("div");
    const questionLabel = document.createElement("div");
    const questionContent = document.createElement("div");
    questionContainer.className="question-zone";
    questionLabel.innerText=qn.id+":";
    questionLabel.className="question-number";
    questionContent.innerText=qn.question;
    questionContent.className="question-content";
    questionContainer.appendChild(questionLabel);
    questionContainer.appendChild(questionContent);
    questionWrapper.appendChild(questionContainer);

    const optionWrapper = document.createElement("div");
    optionWrapper.className="answer-zone";
    for(let [k,v] of Object.entries(qn.answerOption)){
        const optionContainer=document.createElement("div");
        const option=document.createElement("input");
        const label=document.createElement("label");
        optionContainer.className="answers";
        option.type=qn.type;
        option.name=JSON.stringify(qn);
        option.id=`a${qn.id}${k}`;
        option.value=k;
        optionContainer.appendChild(option);
        label.htmlFor=`a${qn.id}${k}`;
        label.innerText=`${k}:${v}`;
        optionContainer.appendChild(label);
        optionWrapper.appendChild(optionContainer);
    }
    questionWrapper.appendChild(optionWrapper);
    mainPaper.appendChild(questionWrapper);
}

let save=[0];
const mainForm = document.querySelector("form");

function formCheck(){
    let lossQnArry=[];
    let doneQnArry=[];
    let lossQnString="";
    for(const qn of questionList){
        for(let k of Object.keys(qn.answerOption)){
            if(document.getElementById(`a${qn.id}${k}`).checked){
                doneQnArry.push(qn.id);
            }
        }
    }
    for(const qn of questionList){
        if(!doneQnArry.includes(qn.id)){
            lossQnArry.push(qn.id);
            lossQnString+=qn.id+",";
        }
    }
    document.getElementById("tip-number-done").innerText=`${doneQnArry.length}`;
    document.getElementById("tip-number-lose").innerText=`${lossQnArry.length}`;
    
    if(lossQnString!==""){
        if(window.confirm(`Do you want to loss ${lossQnString}?`)){
            return true;
        }else{
            if(lossQnString!==""){
                mainForm.elements[0].setCustomValidity(
                    "Don't loss any one !"
                )
            }
        }
    }
}


//mainForm.addEventListener("keyup",formCheck());

mainForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    new FormData(mainForm);
});

mainForm.addEventListener("formdata",(e)=>{
    const userAnswer = Object.fromEntries(e.formData);

    save.push(userAnswer);

    for(let [k,v] of e.formData){
        let sn=0;
        let rightAnswerObj = JSON.parse(k);
        let rs=rightAnswerObj.rightAnswer.optionScore;
        let rk=rightAnswerObj.rightAnswer.optionKey;
        if(rightAnswerObj.type==="radio"){
            if(rk.includes(v)){
                sn=rs.right;
            }else{
                sn=rs.wrong;
            }
        }else{
            if(rk.includes(v)){
                sn=rs.includeEquipartition/rk.length;
            }else{
                sn=rs.notInclude;
            }
        }

        for(let qn of questionList){
            if(qn.id===rightAnswerObj.id){
                qn.score+=sn;
                if(qn.type==="checkbox" && qn.score===qn.rightAnswer.optionScore.includeEquipartition){
                    qn.score=qn.rightAnswer.optionScore.right;
                }
            }
        }
    }

    const scoreWrapper = document.getElementById("score-detail");
    scoreWrapper.innerText = "";
    const scoreTable = document.createElement("table");
    const tableThead = document.createElement("thead");
    const tableTrHead = document.createElement("tr");
    const tableThHead = document.createElement("th");
    tableThHead.innerText="Score detail";
    tableThHead.colSpan="3";
    tableTrHead.appendChild(tableThHead);
    tableThead.appendChild(tableTrHead);
    scoreTable.appendChild(tableThead);
    const tableTrTh = document.createElement("tr");
    const tableThQ = document.createElement("th");
    const tableThFs = document.createElement("th");
    const tableThYs = document.createElement("th");
    tableThQ.innerText="Qn";
    tableTrTh.appendChild(tableThQ);
    tableThFs.innerText="Full";
    tableTrTh.appendChild(tableThFs);
    tableThYs.innerText="Your";
    tableTrTh.appendChild(tableThYs);
    scoreTable.appendChild(tableTrTh);
    for(let qn of questionList){
        save[0]=save[0]+qn.score;
        
        const tableTrTd = document.createElement("tr");
        const tableTdQn = document.createElement("td");
        const tableTdQnS = document.createElement("td");
        const tableTdQnY = document.createElement("td");
        tableTdQn.innerText=qn.id;
        tableTrTd.appendChild(tableTdQn);
        tableTdQnS.innerText=qn.rightAnswer.optionScore.right;
        tableTrTd.appendChild(tableTdQnS);
        tableTdQnY.innerText=qn.score;
        tableTrTd.appendChild(tableTdQnY);
        scoreTable.appendChild(tableTrTd);
    }
    scoreWrapper.appendChild(scoreTable);

    document.getElementById("show-paper").style.display="none";
    document.getElementById("show-score").style.display="flex";
    document.getElementById("show-score-text").style.fontSize="2rem";
    document.getElementById("show-score-text").style.color="white";
    document.getElementById("show-score-text").innerText="Congratulations!\n All the questions has be finshed!\n your final score is";
    document.getElementById("show-score-number").style.fontSize="4rem";
    document.getElementById("show-score-number").innerText = save[0];
})
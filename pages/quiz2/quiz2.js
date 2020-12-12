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
        //option.className="select-style";
        optionContainer.appendChild(option);
        //label.id="al"+qn.id+k;
        //label.className="select-style";
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

document.querySelector("button").addEventListener("click",(e)=>{
    let lossQn="";
    let lqn=[];
    for(const qn of questionList){
        for(let k of Object.keys(qn.answerOption)){
            if(document.getElementById(`a${qn.id}${k}`).checked){
                lqn.push(qn.id);
            }
        }
    }
    for(const qn of questionList){
        if(!lqn.includes(qn.id)){
            lossQn+=qn.id+",";
        }
    }
    if(lossQn!==""){
        if(window.confirm(`Do you want to loss ${lossQn}?`)){
            return true;
        }else{
            return false;
        }
    }
})

mainForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    new FormData(mainForm);
});

mainForm.addEventListener("formdata",(e)=>{
    const userAnswer = Object.fromEntries(e.formData);
    //const uAMap=e.formData;

    save.push(userAnswer);

    //let questionsAndScore="";

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

    
/*
    let rightAnswerQ={};//
    const rAMap=new Map();
    for(const qn of questionList){
        rAMap.set(qn.id,qn.rightAnswer.optionKey);
    }
    rightAnswerQ=Object.fromEntries(rAMap);//

    for(let [rk,rv] of rAMap){
        let sn=0;
        if(rk!=="Q7"){
            for(let [uk,uv] of uAMap){
                if(rk===uk){
                    if(rv[0]===uv){
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
    */

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
        //questionsAndScore=questionsAndScore+`${qn.id}:full score ${qn.rightAnswer.optionScore.right},your score ${qn.score};\n`;
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

    /*
<table>
  <tr>
    <th>Qn</th>
    <th>Full score</th>
    <th>Your score</th>
  </tr>
  <tr>
    <td>Q1</td>
    <td>10</td>
    <td>10</td>
  </tr>
</table>
    */

    document.getElementById("show-paper").style.display="none";
    document.getElementById("show-score").style.display="flex";
    document.getElementById("show-score-text").style.fontSize="2rem";
    document.getElementById("show-score-text").style.color="white";
    document.getElementById("show-score-text").innerText="Congratulations!\n All the questions has be finshed!\n your final score is";
    document.getElementById("show-score-number").style.fontSize="4rem";
    document.getElementById("show-score-number").innerText = save[0];
    //document.getElementById("score-detail").innerText = questionsAndScore;
})
/*
document.querySelector("button").addEventListener("click",(e)=>{
        let lossQn="";
    let lqn=[];
    for(const qn of questionList){
        for(let k of Object.keys(qn.answerOption)){
            if(document.getElementById(`a${qn.id}${k}`).checked){
                lqn.push(qn.id);
            }
        }
    }
    for(const qn of questionList){
        if(!lqn.includes(qn.id)){
            lossQn+=qn.id+",";
        }
    }
    if(lossQn!==""){
        if(confirm(`Do you want to loss ${lossQn}?`)){
            return true;
        }else{
            return false;
        }
    }
})
*/
/*
>document.getElementById("aQ1B").name===document.getElementById("aQ1A").name
<true
*/
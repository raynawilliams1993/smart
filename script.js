//variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questions = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var submit =document.getElementById("submit");
var scoreDiv = document.getElementById("scoreContainer");
var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;
var questionTime= 15;
var gaugeWidth= 150;
var count= 0;
var gaugeProgressUnit= gaugeWidth/questionTime;


//functions


function renderQuestion() {
    var q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
function renderProgress() {
    for(var qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML += "<div class = 'prog' id="+ qIndex +"></div>";
    }
}
function answerIsCorrect() {
    document.getElementById(runningQuestionIndex).style.backgroundColor= "green";
}
function answerIsWrong() {
    document.getElementById(runningQuestionIndex).style.backgroundColor= "red";
}
function counterRender() {
    if(count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width= gaugeProgressUnit * count + "px";
        count ++;
    }else{
       count= 0;
       answerIsWrong();
       
    }
}




//buttons
start.addEventListener("click", startQuiz);


//quiz
start.style.display= "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();
renderCounter();
TIMER = setInterval(renderCounter,1500);
var lastQuestion = questions.length - 1;
var runningQuestion = 0;

var questions = [{

    question: "What does HTML stand for?",
    answers: {
        choiceA: "Hyper Training Marking Language",
        choiceB: "Hyper Text Marketing Language",
        choiceC: "Hyper Text Markup Language",
        choiceD: "None of the above",
    },
    correctAnswer: "C",
},
{

    question: "What is an array?",
    answers: {
        choiceA: "list",
        choiceB: "paragraph",
        choiceC: "both of the above",
        choiceD: "none of the above",
    },
    correctAnswer: "A",
},
{

    question: "What does CSS stand for?",
    answers: {
        choiceA: "Creating Style Sheet",
        choiceB: "Creating Sheet Style",
        choiceC: "Canvasing Style Sheet",
        choiceD: "Cascading Style Sheet",
    },
    correctAnswer: "D",
},
{

    question: "Objects contain many ___?",
    answers: {
        choiceA: "Subjects",
        choiceB: "Values",
        choiceC: "Variables",
        choiceD: "Both B & C",
    },
    correctAnswer: "D",
},
{

    question: "___ is a free and open-source CSS framework directed at responsive, mobile-first-front-end web development?",
    answers: {
        choiceA: "Barnstrap CSS",
        choiceB: "Bootstrap CSS",
        choiceC: "Bootstar CSS",
        choiceD: "None of the above",
    },
    correctAnswer: "B",
},


]
// render a question
function renderQuestion() {
    var q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
start.style.display = "none";
renderQuestion();
quiz.style.display="block"

function renderProgress() {
    for(let qIndex = 0; qIndex <= lastQuestion.length; qIndex ++) {
        progress.innerHTML += "<div class ='prog'></div>";
    }
}
//variables
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startButton = document.getElementById("start")
var sec = 15;
var time = setInterval(myTimer, 1000);


//functions
startButton.addEventListener('click', myTimer);


function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
    }
}
function buildQuiz() {
    var output = [];
}
//for each question
myQuestions.forEach(
    ()
)

function showResults() { }

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
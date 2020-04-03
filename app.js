function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    
};

// create questions
var questions = [
    new Question("Which of the following type of class allows only one object of it to be created?", ["Virtual Class", "Abstract Class","Singleton Class", "Friend Class"], "Singleton Class"),
    new Question("Which of the following is not a type of constructor?", ["Copy constructor", "Friend constructor", "Default constructor", "Parameterized cons."], "Friend constructor"),
    new Question("Which of the following concepts means determining at runtime what method to invoke?", ["Data Hinding", "Dynamic Typing","Dynamic Binding", "Dynamic Loading"], "Dynamic Binding"),
    new Question("Which of the following term is used for a function defined inside a class?", ["Member Variable", "Member Function", "Class Function", "Classic Function"], "Memeber Function"),
    new Question("How many instances of an abstract class can be created?", ["1", "5", "13", "0"], "0")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();






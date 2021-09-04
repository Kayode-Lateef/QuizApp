// Create a Quiz class

class Quiz {
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer){
        if(this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a question Class

class Question {
    constructor (text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice){
        return this.answer === choice;
    }
}


// Display Question 
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // Show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // Show options
        let choices = quiz.getQuestionIndex().choices;
        
        for(let i = 0; i < choices.length; i++){
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};


// Guess Function 
function guess (id, guess) {
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        displayQuestion();
    }
}

// Show Quiz Progress 
function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = 
    `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// Show Score
function showScores () {
    let quizEndHTML = 
    `
        <h1>Quiz Completed</h1>
        <h2 id="score">You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
        <div class="quiz-repeat">
            <a href="index.html">Take Quiz Again</a>
        </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
}

// Create Quiz Questions
let questions = [
    new Question("Correct HTML tag for the largest heading is", ["&lt;head&gt;","&lt;H6&gt;", "&lt;H1&gt;", "&lt;H&gt;"], "&lt;H1&gt;"),
    new Question("HTML is considered as _________ language.", ["Higher Level Language","Markup Language", "Programming Language", "OOP Language"], "Markup Language"),
    new Question("Hyper Text Markup Language stands For?", ["JQUERY", "XHTML", "CSS", "HTML"], "HTML"),
    new Question("Cascading Style sheet stands for?", ["HTML","JQuery", "CSS", "XML"], "CSS"),
    new Question("HTML program is saved using ____________ extension.", ["hml","html", "hnl", "htnl"], "html"),
    new Question("JavaScript is a ___ -side programming language.", ["Client"," Server", "Both", "None"], "Client"),
    new Question("Which are the correct “if” statements to execute certain code if “x” is equal to 2?", ["if(x 2)"," if(x = 2)", " if(x == 2)", "if(x != 2 )"], "if(x == 2)"),
    new Question("Which type of language is Javascript?", ["Programming","Scripting", "Markup", "None of the above"], "Programming"),
    new Question("If we want to wrap a block of text around an image, which css property will we use ?", ["wrap","push", "float", "align"], "float"),
    new Question("Which is a Javascript Framework?", ["React","Laravel", "Django", "Sass"], "React"),
    new Question("Which is a Backend Language?", ["PHP","HTML", "React", "All"], "PHP"),
    new Question("Which is the best for Artificial intelligence", ["React","Laravel", "Python", "Sass"], "Python"),
    new Question("Which of the following will write the message “Hello KaytechiT!” in an alert box?", ["alertBox(“Hello KaytechiT!”);","alert(Hello KaytechiT!);", "msgAlert(“Hello KaytechiT!”);", "msgAlert(“Hello KaytechiT!”);"], "msgAlert(“Hello KaytechiT!”);"),
    new Question("If we want to show an Arrow as cursor, then which value we will use?", ["pointer","default", "arrow", "arr"], "pointer"),
    new Question("How can we write comment along with CSS code?", ["/* a comment */","// a comment //", "/ a comment /", "<' a comment'>"], "/* a comment */")
    
];

let quiz = new Quiz(questions);

// Display Questions
displayQuestion();


// Add a count down
let time = 5;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountDown() {
    let quizTimer = setInterval(function(){
        if(quizTime <= 0){
            clearInterval(quizTimer);
            showScores
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000)
}

startCountDown();
const questions = [
    {
        question: "Which planet in the solar system is known as the “Red Planet?",
        answers: [
            { text: "Venus", correct: false},
            { text: "Earth", correct: false},
            { text: "Mars", correct: true},
            { text: "jupiter", correct: false},
        ]
    },
    {
        question: "Which river is the longest in the world?",
        answers: [
            { text: "Amazon", correct: false},
            { text: "Mississippi", correct: false},
            { text: "Nile", correct: true},
            { text: "Yangtze", correct: false},
        ]
    },
    {
        question: "What gas is used to extinguish fires?",
        answers: [
            { text: "Oxygen", correct: false},
            { text: "Nitrogen", correct: true},
            { text: "Carbon dioxide", correct: false},
            { text: "Hydrogen", correct: false},
        ]
    },
    {
        question: "Which is the largest island?",
        answers: [
            { text: "New Guinea", correct: false},
            { text: "Andaman Nicobar", correct: false},
            { text: "Greenland", correct: true},
            { text: "Hawaii", correct: false},
        ]
    },
    {
        question: "What animal is the national symbol of Australia?",
        answers: [
            { text: "Kangaroo", correct: true},
            { text: "Koala", correct: false},
            { text: "Emu", correct: false},
            { text: "Crocodile", correct: false},
        ]
    },
    {
        question: "How many bones are in the body of an adult human?",
        answers: [
            { text: "330", correct: false},
            { text: "210", correct: false},
            { text: "250", correct: false},
            { text: "206", correct: true},
        ]
    },
    {
        question: "When the humans use more facial muscles?",
        answers: [
            { text: "While Sleeping", correct: false},
            { text: "While Smiling", correct: true},
            { text: "While taking", correct: false},
            { text: "While Frowning", correct: false},
        ]
    },
    {
        question: "Who wrote “Crime and Punishment”?",
        answers: [
            { text: "Leo Tolstoy", correct: false},
            { text: "Fyodor Dostoevsk", correct: true},
            { text: "Anton Chekho", correct: false},
            { text: "Ivan Turgenev", correct: false},
        ]
    },
    {
        question: "Which city is called the “City of Winds”?",
        answers: [
            { text: "Chicago", correct: true},
            { text: "Seattle", correct: false},
            { text: "Washington", correct: false},
            { text: "Veliky Novgorod", correct: false},
        ]
    },
    {
        question: "Which organ in the human body is responsible for the secretion of bile?",
        answers: [
            { text: "Kidneys", correct: false},
            { text: "Spleen", correct: false},
            { text: "Stomach", correct: false},
            { text: "Liver", correct: true},
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){ 
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `you score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "submit";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",() => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
});


startQuiz();
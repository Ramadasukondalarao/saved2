const questions = {
    History: Array.from({ length: 20 }, (_, i) => ({
        question: `History Question ${i + 1}?`,
        options: [`Option A`, `Option B`, `Option C`, `Option D`],
        answer: Math.floor(Math.random() * 4)
    })),
    Geography: Array.from({ length: 20 }, (_, i) => ({
        question: `Geography Question ${i + 1}?`,
        options: [`Option A`, `Option B`, `Option C`, `Option D`],
        answer: Math.floor(Math.random() * 4)
    })),
    // Add other subjects in the same structure...
};

let currentQuestionIndex = 0;
let currentSubject = "";
let userAnswers = Array(20).fill(null);

function loadQuiz() {
    const urlParams = new URLSearchParams(window.location.search);
    currentSubject = urlParams.get("subject");

    if (!questions[currentSubject]) {
        document.getElementById("quiz-title").innerText = "Invalid Subject";
        return;
    }

    document.getElementById("quiz-title").innerText = `${currentSubject} Quiz`;
    showQuestion();
}

function showQuestion() {
    const subjectQuestions = questions[currentSubject];
    const questionData = subjectQuestions[currentQuestionIndex];

    document.getElementById("question-number").innerText = `Question ${currentQuestionIndex + 1} of ${subjectQuestions.length}`;
    document.getElementById("question-text").innerText = questionData.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Clear previous options

    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement("label");
        optionElement.innerHTML = `
            <input type="radio" name="option" value="${index}" ${userAnswers[currentQuestionIndex] === index ? "checked" : ""}>
            ${option}
        `;
        optionsContainer.appendChild(optionElement);
    });

    document.getElementById("previous-btn").disabled = currentQuestionIndex === 0;
    document.getElementById("next-btn").innerText = currentQuestionIndex === subjectQuestions.length - 1 ? "Submit" : "Next";
}

function nextQuestion() {
    saveAnswer();

    const subjectQuestions = questions[currentSubject];
    if (currentQuestionIndex < subjectQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        submitQuiz();
    }
}

function previousQuestion() {
    saveAnswer();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function saveAnswer() {
    const selectedOption = document.querySelector("input[name='option']:checked");
    userAnswers[currentQuestionIndex] = selectedOption ? parseInt(selectedOption.value) : null;
}

function submitQuiz() {
    const subjectQuestions = questions[currentSubject];
    let score = 0;

    subjectQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) score++;
    });

    document.getElementById("quiz-container").innerHTML = `
        <p>Quiz Complete!</p>
        <p>Your Score: ${score}/${subjectQuestions.length}</p>
    `;
}

window.onload = loadQuiz;



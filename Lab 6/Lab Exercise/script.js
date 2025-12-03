// using array
const quiz = [
    {
        question: "What is the primary material a Creeper drops when defeated without being killed by a charged Creeper?",
        options: ["Gunpowder", "Slimeball"],
        answer: "Gunpowder"
    },
    {
        question: "Which tool is required to mine an Obsidian block and collect it as an item?",
        options: ["Diamond Pickaxe", "Iron Pickaxe"],
        answer: "Diamond Pickaxe"
    }, 
    {
        question: "Which dimension is accessed by building a portal frame out of Obsidian and lighting it with a Flint and Steel?",
        options: ["The Nether", "The End"],
        answer: "The Nether"
    }, 
    {
        question: "Which of these passive mobs provides Wool when sheared?",
        options: ["Sheep", "Llama"],
        answer: "Sheep"
    }, 
    {
        question: "What is the primary raw ingredient used to craft a Piston?",
        options: ["Cobblestone", "Iron Ingot"],
        answer: "Iron Ingot"
    }
]

let currentQuestionIndex = 0;
let score = 0;
let totalQuestion = quiz.length;

// HTML component
let feedbackLabel = null;

// initialize function
// loading while all html structure done loading
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
});

function initializeQuiz() {
    feedbackLabel = document.getElementById("feedback");
    feedbackLabel.innerText = "Start answering the quiz to see the feedback..";

    shuffleQuestions();
    displayQuestions();
}

function displayQuestions() {
    // load the question from the list and generate the option
    const currentQuestion = quiz[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    // get the container of option and create option
    const optionContainer = document.getElementById("options");
    optionContainer.innerHTML = "";  // clear previous questions

    // loop every elemnent insite options to create radio button
    currentQuestion.options.forEach ( option => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" id="answer" value="${option}">${option}`;
        optionContainer.appendChild(label);
    });
}

// Rnadom shuffle the questions
// loop trought the list and swap the question sequence with the 
// random index
function shuffleQuestions() {
    let currentIndex = 0, randomIndex = 0;
    
    while(currentIndex != (totalQuestion - 1)) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        // shuffle the array
        [quiz[currentIndex], quiz[randomIndex]] = 
            [quiz[randomIndex], quiz[currentIndex]];
        
        currentIndex++;
    }
}

// load next question
function nextQuestion() {
    if (currentQuestionIndex == 5 || currentQuestionIndex >= 4) {
        alert("Quiz compete!");
    } else {
        currentQuestionIndex++;
        displayQuestions();
    }
}

function checkAnswer() {
    // compare the value of the radio button and the value of
    // the answer
    // using document.querySelector to get the radio button
    // checked gain the radio button that has been ticked only
    let userAnswer = document.querySelector("input[name='answer']:checked");

    if (userAnswer) {
        if (userAnswer.value === quiz[currentQuestionIndex].answer) {
            feedbackLabel.innerText = "Congrats! Correct Answer!";
            nextQuestion();
        } else {
            feedbackLabel.innerText = "Unforunally, it is not the correct ansewr.";
            nextQuestion();
        }
    }
}

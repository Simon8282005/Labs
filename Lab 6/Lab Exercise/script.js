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

// Global variable
let currentQuestionIndex = 0;
let score = 0;
let totalQuestion = quiz.length;
let totalScore = 0;

// HTML component
let feedbackLabel = null;
let timerText = null;
let scoreText = null;

// JavaScript component
let timer = null;

// initialize function
// loading while all html structure done loading
document.addEventListener('DOMContentLoaded', function() {
    startQuiz();
});

function startQuiz() {
    feedbackLabel = document.getElementById("feedback");
    feedbackLabel.innerText = "Start answering the quiz to see the feedback..";

    timerText = document.getElementById("time");

    scoreText = document.getElementById("score");
    scoreText.innerText = "0";

    shuffleQuestions();
    displayQuestions();
}

function displayQuestions() {
    // Start the timer
    startTimer(10);

    // load the question from the list and generate the option
    const currentQuestion = quiz[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    // get the container of option and create option
    const optionContainer = document.getElementById("options");
    optionContainer.innerHTML = "";  // clear previous questions

    // loop every elemnent insite options to create radio button
    currentQuestion.options.forEach ( option => {
        const label = document.createElement('label');
        //label.innerHTML = `<input type="radio" name="answer" id="answer" value="${option}">${option}`;
        label.innerHTML = `
        <label name="options-card" id="options-card" class="options-card">${option}
            <input type="radio" class="answer" name="answer" id="answer" value="${option}" >
        </label>`;
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
        stopTimer();
        alert(`Quiz compete! Total score are: ${totalScore}/${totalQuestion}`);
    } else if (totalScore === totalQuestion) {
        alert("Congrats ! Every question are correct !");
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
        console.log(`Answer: ${userAnswer.value}`);
        if (userAnswer.value === quiz[currentQuestionIndex].answer) {
            feedbackLabel.innerText = "Congrats! Correct Answer!";
            totalScore++;
            scoreText.innerText = totalScore;
            nextQuestion();
        } else {
            feedbackLabel.innerText = "Unforunally, it is not the correct ansewr.";
            nextQuestion();
        }
    }
}

// TODO: change the text of the total score

function startTimer(duration) {
    let count = duration;

    stopTimer();

    timer = setInterval(function() {
        count--;
        timerText.innerText = count;

        if (count <= 0) {
            clearInterval(timer);
            timerText.innerText = "10";
            feedbackLabel.innerHTML = "Time is out. Go to next question.";
        }
    }, 1000);  // 1000 miliseconds = 1 sec
}

function stopTimer() {
    if (timer != null) { clearInterval(timer); timerText.innerText = "10"; }
}
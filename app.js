const questions = [
    {
        question: "What is the capital of Pakistan?",
        choices: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
        answer: "Islamabad"
    },
    {
        question: "Which language is used to style web pages?",
        choices: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "CSS"
    },
    {
        question: "How many provinces does Pakistan have?",
        choices: [3, 4, 5, 6],
        answer: 4
    },
    {
        question: "Which method removes duplicates from an array in JS?",
        choices: ["filter", "map", "Set", "reduce"],
        answer: "Set"
    },
    {
        question: "What does HTML stand for?",
        choices: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "None of these"
        ],
        answer: "Hyper Text Markup Language"
    }
];

let currentIndex = 0;
let score = 0;
const scoreDisplay = document.getElementById('score')
const questionInput = document.getElementById('questionText')
const selectChoices = document.getElementById('choices')
const nextButton = document.getElementById('nextBtn')

function showQuestion(){
    const q =  questions[currentIndex]
    questionInput.textContent = q.question
    selectChoices.innerHTML = ""
    nextButton.disabled = true;
    for (let i = 0; i<q.choices.length; i++){
        const ch = q.choices[i]
        const btn = document.createElement('button')
        btn.textContent = ch;
        btn.onclick = function(){
            if (ch == q.answer){
                score += 1;
                scoreDisplay.textContent = `Score : ${score}`
                btn.classList.add('correct')
            } else {
                btn.classList.add('wrong')
            }
            nextButton.disabled = false;
            const allButtons = selectChoices.querySelectorAll('button')
            allButtons.forEach(b => b.disabled = true);
        }
        selectChoices.appendChild(btn)
        
    }
}

nextButton.addEventListener ('click', function(){
    currentIndex += 1;
    if(currentIndex < questions.length){
        showQuestion();
    } else {
        questionInput.textContent = `Quiz finished! Your score is ${score}`
        const restartBtn = document.createElement('button')
        restartBtn.textContent = 'Restart'
        restartBtn.onclick = function(){
            currentIndex = 0;
            score = 0;
            scoreDisplay.textContent = 'Score: 0';
            showQuestion();
        }
        selectChoices.innerHTML = "";
        selectChoices.appendChild(restartBtn)
    }
})

showQuestion();


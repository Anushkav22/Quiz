const questionContainer = document.getElementById('questionContainer');
const feedbackContainer = document.getElementById('feedbackContainer');
const nextButton = document.getElementById('nextButton');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: 'Who was the first President of India?',
    options: ['Jawaharlal Nehru', 'Narendra Modi', 'Apj Abdul Kalam', 'Dr. Rajendra Prasad'],
    correctAnswer: 'Dr. Rajendra Prasad'
  },
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Fastest animal on earth is?',
    options: ['Tiger', 'Camel', 'Cheetah', 'Rabbit'],
    correctAnswer: 'Cheetah'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars'
  },
  // Add more questions here
];

function showQuestion() {
  const question = questions[currentQuestionIndex];
  const optionsHtml = question.options.map(option => `
    <div class="option" onclick="checkAnswer('${option}')">${option}</div>
  `).join('');

  questionContainer.innerHTML = `
    <p>${question.question}</p>
    <div class="options">${optionsHtml}</div>
  `;

  feedbackContainer.textContent = '';
  nextButton.disabled = true;
}

function checkAnswer(selectedAnswer) {
  const question = questions[currentQuestionIndex];
  if (selectedAnswer === question.correctAnswer) {
    feedbackContainer.textContent = 'Correct!';
    score++;
  } else {
    feedbackContainer.textContent = 'Incorrect!';
  }
  nextButton.disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionContainer.innerHTML = '<p>Quiz completed. Your score: ' + score + '/' + questions.length + '</p>';
    feedbackContainer.textContent = '';
    // Remove the next button from the feedback container
    nextButton.parentNode.removeChild(nextButton);
  
  }
}

nextButton.addEventListener('click', nextQuestion);

// Start the quiz
showQuestion();

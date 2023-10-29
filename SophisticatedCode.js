// Filename: SophisticatedCode.js

/*
  This script demonstrates a sophisticated and complex implementation 
  of a web-based quiz application using JavaScript.
  It includes features like: dynamic question generation, scoring system, 
  timer, and user-friendly interface.

  Note: This code is a simplified version and does not cover all possible edge cases.

  Author: AssistantAI
*/

// Quiz Object - Holds all the questions, answers, and scoring logic
let quiz = {
  currentQuestion: 0,
  questions: [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      correctAnswer: 0,
      score: 5
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Mercury", "Earth"],
      correctAnswer: 0,
      score: 10
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      correctAnswer: 0,
      score: 7
    },
    // Add more questions here...
  ],
  totalScore: 0,
  userAnswers: [],

  displayQuestion: function () {
    const currentQuestion = this.questions[this.currentQuestion];
    console.log(`Question ${this.currentQuestion + 1}: ${currentQuestion.question}`);

    for (let i = 0; i < currentQuestion.options.length; i++) {
      console.log(`${i + 1}. ${currentQuestion.options[i]}`);
    }
  },

  displayScore: function () {
    console.log(`Your final score: ${this.totalScore}`);
  },

  recordAnswer: function (answer) {
    this.userAnswers.push(answer);
    this.currentQuestion++;

    if (this.currentQuestion === this.questions.length) {
      this.calculateScore();
      this.displayScore();
    } else {
      this.displayQuestion();
    }
  },

  calculateScore: function () {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.userAnswers[i] === this.questions[i].correctAnswer) {
        this.totalScore += this.questions[i].score;
      }
    }
  },
};

// View Object - Handles the UI interactions
let view = {
  startQuiz: function () {
    console.log("Welcome to the Quiz!");
    quiz.displayQuestion();
    this.setupEventListener();
    this.startTimer();
  },

  setupEventListener: function () {
    const options = document.querySelectorAll('.option');
    for (let i = 0; i < options.length; i++) {
      options[i].addEventListener('click', function () {
        quiz.recordAnswer(i);
      });
    }
  },

  startTimer: function () {
    let timeRemaining = 60; // 60 seconds
    const timerElement = document.getElementById('timer');

    const timerInterval = setInterval(function () {
      timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;

      if (timeRemaining === 0) {
        quiz.calculateScore();
        quiz.displayScore();
        clearInterval(timerInterval);
      }

      timeRemaining--;
    }, 1000);
  }
};

// Start the Quiz
view.startQuiz();
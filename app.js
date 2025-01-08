const questions = [
  {
    question: "1. What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: 0,
  },
  {
    question: "2. Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    correctAnswer: 2,
  },
  {
    question: "3. Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
  },
  {
    question: "4. What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    correctAnswer: 1,
  },
  {
    question: "5. What is the chemical symbol for water?",
    options: ["O", "H2", "H2O", "HO2"],
    correctAnswer: 2,
  },
  // {
  //   question: "6. Who painted the Mona Lisa?",
  //   options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
  //   correctAnswer: 0,
  // },
  // {
  //   question: "7. What is the smallest prime number?",
  //   options: ["0", "1", "2", "3"],
  //   correctAnswer: 2,
  // },
  // {
  //   question: "8. What is the speed of light in a vacuum?",
  //   options: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "500,000 km/s"],
  //   correctAnswer: 0,
  // },
  // {
  //   question: "9. Which gas is most abundant in Earth's atmosphere?",
  //   options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  //   correctAnswer: 1,
  // },
  // {
  //   question: "10. What is the square root of 64?",
  //   options: ["6", "8", "10", "12"],
  //   correctAnswer: 1,
  // },
];



//   Question bank

const question = document.querySelector(".question");
const optionList = document.querySelector(".options");
const button = document.querySelector(".submit-btn");
const quiz = document.querySelector(".quiz-content");
const resultContainer = document.querySelector("#question");
let currentQ = 0;
let score = 0;


function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

const startQuiz = () => {

  if (currentQ === questions.length) {
      const h1 = document.createElement("h1");
      h1.textContent = `Your score is :: ${score}`;
      resultContainer.appendChild(h1);
      quiz.style.display = "none";
      button.style.display = "none";

      const restartButton = document.createElement("button");
    restartButton.setAttribute("class", "startAgain");
    restartButton.textContent = "Start Quiz Again";
    resultContainer.appendChild(restartButton);

    restartButton.addEventListener("click", () => {
      currentQ = 0;
      score = 0;
      resultContainer.innerHTML = ""; 
      quiz.style.display = "block"; 
      startQuiz(); 
    });
    return;
  }

  const updateQ = questions[currentQ];
  question.textContent = updateQ.question;

  optionList.innerHTML = "";
  button.disabled = true;
  button.style.display = "none";

  
  updateQ.options.forEach((element, index) => {
      const li = document.createElement("li");

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = index;

      const label = document.createElement("label");
      label.textContent = element;

      li.appendChild(input);
      li.appendChild(label);
      optionList.appendChild(li);

      input.addEventListener("change", () => {
          button.disabled = false;
          button.style.display = "block";
      });
  });

  if(currentQ>=0){
    button.textContent="Next";
  }


  if (currentQ === questions.length - 1) {
      button.textContent = "Submit"; 
      
  }

  button.onclick = () => {
      const SelectedOption = document.querySelector('input[name="answer"]:checked');

      if (parseInt(SelectedOption.value) === updateQ.correctAnswer) {
          score++;
      }

      currentQ += 1;

      startQuiz();
  };

  quiz.style.display = "block";
};


document.querySelector(".startAgain").addEventListener("click" ,()=>{
  currentQ=0;
  score=0;
  startQuiz();
})
// startQuiz(); // Start quiz on page load

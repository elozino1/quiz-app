//array of hard-coded questions 
let questions = [
	{
		"name": "Question 1",
		"question": "Who is the President of Nigeria?",
		"answer": "Muhammadu Buhari",
		"options":
					{
						"option1": "Goodluck Jonathan",
						"option2": "Olusegun Obasanjo",
						"option3": "Sani Abacha",
						"option4": "Muhammadu Buhari"
					}
	},

	{
		"name": "Question 2",
		"question": "In what year did Nigeria gain independence?",
		"answer": "1960",
		"options":
					{
						"option1": "1960",
						"option2": "1961",
						"option3": "1962",
						"option4": "1963"
					}
	},

	{
		"name": "Question 3",
		"question": "Who is the Governor of Lagos State?",
		"answer": "Babajide Sanwo-Olu",
		"options":
					{
						"option1": "Bola Ahmed Tinubu",
						"option2": "Babajide Sanwo-Olu",
						"option3": "Babatunde Fashola",
						"option4": "Akinwumi Ambode"
					}
	},

	{
		"name": "Question 4",
		"question": "What is the capital of Angola?",
		"answer": "Luanda",
		"options":
					{
						"option1": "Lusaka",
						"option2": "Conakry",
						"option3": "Luanda",
						"option4": "Kampala"
					}
	},

	{
		"name": "Question 5",
		"question": "Where is Andela incorporated?",
		"answer": "USA",
		"options":
					{
						"option1": "Nigeria",
						"option2": "Kenya",
						"option3": "USA",
						"option4": "United Kingdom"
					}
	},

	{
		"name": "Question 6",
		"question": "What is the parent company of Google?",
		"answer": "Alphabet",
		"options":
					{
						"option1": "Alphabet",
						"option2": "Middon",
						"option3": "Switch",
						"option4": "Tetters"
					}
	},

	{
		"name": "Question 7",
		"question": "Who is Nigeria's senate president?",
		"answer": "Sen. Ahmed Lawan",
		"options":
					{
						"option1": "Sen. David Mark",
						"option2": "Sen. Abba Morro",
						"option3": "Sen. Ike Ekweremadu",
						"option4": "Sen. Ahmed Lawan"
					}
	}
];

//fetch questions

//variables
let allOptions = Array.from(document.querySelectorAll('.option'));	//reference to options div
let questionNumber = document.querySelector('.question-header');		//reference to question number div
let progressBar = document.querySelector('#progress-bar');					//reference to progress bar div
let question = document.querySelector('.question');									//reference to question div
let gameEnded;
let currentQuestion;
let totalQuestions;
let totalScore = 0;
let overallScore = 10 * questions.length;

//initializes variables and gets first question
const startGame = () => {
  gameEnded = false;
  currentQuestion = 0;
  totalQuestions = questions.length;
  nextQuestion();
}

//shows the scores page after game concludes
const endGame = () => {
	return window.location.assign('end.html');
}

//
const nextQuestion = () => {
	//checks if questions have been exhausted
	if (currentQuestion === questions.length) {
		localStorage.setItem('lastScore', totalScore);		//saves players score to local storage
		localStorage.setItem('overall', overallScore);		//saves the overall obtainable score to local storage
		endGame();
	}

//sets the current question number
	questionNumber.innerText = `${questions[currentQuestion].name} of ${questions.length}`;

//updates the progress bar
	progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100 }%`

//sets the current question
  question.innerText = questions[currentQuestion].question;
  allOptions.forEach(choice => {
		let number = choice.dataset.number;
    choice.innerText = questions[currentQuestion].options['option'+number];
  });
}

//event listener
allOptions.forEach(choice => {
	choice.addEventListener('click', () => {
    let number = choice.dataset.number;
		//check if player clicked correct option
    if (choice.innerText === questions[currentQuestion].answer) {
			totalScore += 10;
			choice.classList.add('correct');
			//800ms delay before next question loads up
      setTimeout(function() {
        choice.classList.remove('correct');
        currentQuestion++;
        nextQuestion();
      }, 800);
    }
		//user clicked wrong option
    else {
      choice.classList.add('wrong');
			setTimeout(function() {
        choice.classList.remove('wrong');
        currentQuestion++;
        nextQuestion();
      }, 800);
    }
  });
});

//starts the game
startGame();

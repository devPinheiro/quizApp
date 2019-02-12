
  // show question
  let showQuestion = document.getElementById("showQuestion");

  // show choices
  let showChoices = document.getElementById("display");

   let stopQuiz = document.getElementById('app')

  

  function populate() {
    if (startQuiz.isEnded()) {
        showScore();
    } else {
      // show question
      showQuestion.innerHTML = startQuiz.getQuestionIndex().question;

      //show choices
      let choices = startQuiz.getQuestionIndex().choices;
      choices.forEach(choice => {
          showChoices.appendChild(
            document.createElement('div')).innerHTML = `<p id="choice">${choice}</p>`;              
      });
    }
      showProgress();
  }


showChoices.addEventListener('click', (e) => {
    startQuiz.guess(e.target.innerHTML);
    // clear and go to next question
    showChoices.innerHTML = '';
    populate();
})

  function showProgress(){
      let currentQ = startQuiz.questionIndex + 1;
      let progress = document.getElementById('progress')
      progress.innerHTML = `Question ${currentQ} of ${startQuiz.questions.length}`;
  }

  function showScore(){    
      stopQuiz.innerHTML = `<h1>Your result is:</h1><h3>${startQuiz.score}</h3>
      <a href="${window.location}"> Restart here</a>
      `;

  }

  let questions = [
    new Quiz(
      "What is the planet that is earth's twin called?",
      ["Moon", "Jupiter", "Mars", "Earth"],
      "Mars"
    ),
    new Quiz(
      "Which of the following is true?",
      [
        "APC would win this election",
        "PDP would win this election",
        "None",
        "No election will be held"
      ],
      "APC would win this election"
    ),
    new Quiz(
      "How many colour does the Nigeria flag has?",
      ["2", "3", "4", "1"],
      "2"
    ),
    new Quiz(
      "What is the name of this company?",
      ["Multiskills", "Multi", "Skils", "TechSkills"],
      "Multiskills"
    ),
    new Quiz(
      "What is the planet that is earth's twin called?",
      ["Moon", "Jupiter", "Mars", "Earth"],
      "Mars"
    )
  ];

  let startQuiz = new getQuiz(questions);


populate();
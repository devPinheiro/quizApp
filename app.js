

  // show question
  let showQuestion = document.getElementById("showQuestion");

  // show choices
  let showChoices = document.getElementById("display");

  // show question
  let next = document.getElementById("next");

  let stopQuiz = document.getElementById('app')

  

  function populate() {
    if (startQuiz.isQuestionEnded()) {
        // clear up
      showQuestion.innerHTML = '';
        //get user email a
        getUserCred();
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
    let position = startQuiz
      .getQuestionIndex()
      .choices.indexOf(e.target.innerHTML); 
    let score = startQuiz.getQuestionIndex().score[position]; 
    
    //highlight user's choice
    e.target.parentElement.style.backgroundColor = "#c0c0c0";

    // add up scores
    startQuiz.trackGuess(score);
      
    // listen for an event
    next.addEventListener('click', (e)=>{
      // clear choices
      showChoices.innerHTML = '';
      populate();
    });
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
     
      let result = Result.getResult(); 
    
      // start chart
      new Morris.Line({
        element: "app",
        data: result,
        xkey: "question",
        ykeys: ["score"],
        labels: ['Value']
      })
      
  }

  function getUserCred(){
    showChoices.innerHTML = `
    <h4>You have done well so far!</h4>
    <form id="signup-form">
      <div>
        <label for="First Name">First Name</label>
        <input type="text" id="fname" class="u-full-width">
      </div>
  
      <div>
        <label for="Last Name">Last Name</label>
        <input type="text" id="lname" class="u-full-width">
      </div>
  
      <div>
        <label for="Email">Email</label>
        <input type="email" id="s_email" class="u-full-width">
      </div>
      <div>
        <input type="submit" value="Submit" class="u-full-width">
      </div>
      </form`
      document.getElementById('signup-form').addEventListener('submit', (e)=>{
         showScore();
      });
  }

  let questions = [
    new Quiz(
      "What is the planet that is earth's twin called?",
      ["Moon", "Jupiter", "Mars"],
      [10, 30, 100]
    ),

      new Quiz(
          "How the planet that is earth's twin called?",
          ["Moon", "Jupiter", "Mars"],
          [50, 30, 100]
      ),

      new Quiz(
          "What is the planet that is earth's twin called?",
          ["Moon", "Jupiter", "Mars"],
          [10, 30, 100]
      ),
   

  ];

  let startQuiz = new QuizController(questions);


populate();




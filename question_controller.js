class QuizController {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    // get users response
    this.userAnswers = [];
  }

   getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

   isQuestionEnded() {
    return this.questions.length === this.questionIndex;
  }

   trackGuess(score) {
    //add user's score  
    if (isFinite(score)) {
        this.score += score;
    }
      
    this.userAnswers.push({
      question: this.questionIndex + 1,
      score: score
    });

     // store it to localstorage
     localStorage.setItem("UserResponse", JSON.stringify(this.userAnswers));

    // go to the next question
       this.questionIndex++;
  }
}


class Result {
  static getResult(){
    let result;
    if (localStorage.getItem("UserResponse") === null) {
      result = [];
    } else {
      result = JSON.parse(localStorage.getItem("UserResponse"));
    }
    
    return result;
    
  }
}
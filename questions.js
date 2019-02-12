// Populate the UI with questions

function Quiz(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
}

Quiz.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
}
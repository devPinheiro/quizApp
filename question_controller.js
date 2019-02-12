function getQuiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;

    getQuiz.prototype.getQuestionIndex = function () {
        return this.questions[this.questionIndex];
    }

    getQuiz.prototype.isEnded = function () {
        return this.questions.length === this.questionIndex;
    }

    getQuiz.prototype.guess = function (answer) {
       
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }

        this.questionIndex++;
    }
}
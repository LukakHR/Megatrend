import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quiz } from '../../models/Quiz';
import { stringify } from 'querystring';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input('quiz') quiz:Quiz;
  @Output() quizCompleted = new EventEmitter;
  correctAnswers:number;
  numOfQuestions:number;
  i:number;
  answerResponse:string;

  constructor() { 

  }
  //Postavlja sve vrijednosti na početne na početku kviza
  ngOnInit(): void {
    this.correctAnswers = 0;
    this.numOfQuestions = this.quiz.questions.length;
    this.i = 0;
    this.answerResponse = '';
  }

  //Reagira na točnost odgovora i postavlja sljedece pitanje povecanjem brojaca 'i' za 1
  nextQuestion(answer) {
    if(answer === 'correct'){
      this.correctAnswers++;
      this.answerResponse = 'CORRECT🎉'
    } else {
      this.answerResponse = 'WRONG👎'
    }
    if(this.i < this.numOfQuestions - 1) {
      this.i++;
    } else {
      this.quizCompleted.emit(this.correctAnswers + "/" + this.numOfQuestions);
    }
  }
}

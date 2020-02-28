import { Component, OnInit, Input, Output } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input("questionAsked") questionAsked:Question;
  @Output() questionAnswered = new EventEmitter;


  constructor() { }

  ngOnInit(): void {
  }
  //Provjera tocnosti odgovora te slanje prikladnog signala
  checkIfCorrect(attempt:number) {
    if(attempt === this.questionAsked.correctAnswer) {
      this.questionAnswered.emit('correct');
    } else {
      this.questionAnswered.emit('wrong');
    }
  }
}

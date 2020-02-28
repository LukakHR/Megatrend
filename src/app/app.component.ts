import { Component, OnInit } from '@angular/core';
import { Quiz } from './models/Quiz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  page: string;
  selectedQuiz: Quiz;
  score: string;

  ngOnInit(): void {
    this.page = 'main';
  }

  startTheQuiz(quiz) {
    this.page = 'quiz';
    this.selectedQuiz = quiz;
  }

  endQuiz(score) {
    this.score = score;
    this.page = 'result';
  }

  goHome() {
    this.page = '';
  }
}

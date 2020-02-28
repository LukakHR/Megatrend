import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input('score') score:string;
  @Output() backToHome = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  //Vraca se na glavnu stranicu
  endQuiz() {
    this.backToHome.emit(' ');
  }
}

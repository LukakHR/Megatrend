import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quiz } from '../../models/Quiz'
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

@Component({
  selector: 'app-quizes',
  styleUrls: ['./quizes.component.css'],
  templateUrl: './quizes.component.html'
})

export class QuizesComponent implements OnInit {
  @Output() startNewQuiz = new EventEmitter();
  quizes: Quiz[];

  constructor() {
  }

  ngOnInit(): void {
    this.quizes = [
      {
        name: 'Countries of the World',
        questions: [
          {
            question: 'Which is the biggest country in the world?',
            answer0: 'China',
            answer1: 'USA',
            answer2: 'Russia',
            answer3: 'India',
            correctAnswer: 2,
          },
          {
            question: 'Which is the smallest country in the world?',
            answer0: 'Vatican',
            answer1: 'Monaco',
            answer2: 'Nauru',
            answer3: 'Tuvalu',
            correctAnswer: 0,
          },
          {
            question: 'Which is the most populated country in the world?',
            answer0: 'China',
            answer1: 'USA',
            answer2: 'Philippines',
            answer3: 'India',
            correctAnswer: 0,
          },
          {
            question: 'Which is the least populated country in the world?',
            answer0: 'Vatican',
            answer1: 'Monaco',
            answer2: 'Nauru',
            answer3: 'Tuvalu',
            correctAnswer: 0,
          },
          {
            question: 'Which is the most densely populated country in the world?',
            answer0: 'Singapore',
            answer1: 'Monaco',
            answer2: 'Macau',
            answer3: 'Hong Kong',
            correctAnswer: 2,
          },
          {
            question: 'Which is the least densely populated country in the world?',
            answer0: 'Australia',
            answer1: 'Iceland',
            answer2: 'Namibia',
            answer3: 'Mongolia',
            correctAnswer: 3,
          }
        ]
      },
      {
        name: 'Capitals of the World',
        questions: [
          {
            question: 'What is the capital of Croatia?',
            answer0: 'Belgrade',
            answer1: 'Ljubljana',
            answer2: 'Osijek',
            answer3: 'Zagreb',
            correctAnswer: 3,
          },
          {
            question: 'What is the capital of USA?',
            answer0: 'New York',
            answer1: 'Los Angeles',
            answer2: 'Washington',
            answer3: 'San Francisco',
            correctAnswer: 2,
          },
          {
            question: 'What is the capital of Australia?',
            answer0: 'Sydney',
            answer1: 'Canberra',
            answer2: 'Perth',
            answer3: 'Melbourne',
            correctAnswer: 1,
          },
          {
            question: 'What is the capital of Canada?',
            answer0: 'Ottawa',
            answer1: 'Toronto',
            answer2: 'Vancouver',
            answer3: 'Montreal',
            correctAnswer: 0,
          },
          {
            question: 'What is the capital of Brazil?',
            answer0: 'Sao Paulo',
            answer1: 'Brasilia',
            answer2: 'Rio de Janeiro',
            answer3: 'Salvador',
            correctAnswer: 1,
          },
          {
            question: 'What is the capital of China?',
            answer0: 'Shanghai',
            answer1: 'Wuhan',
            answer2: 'Hangzhou',
            answer3: 'Beijing',
            correctAnswer: 3,
          }
        ]
      },
      {
        name: 'World Economy',
        questions: [
          {
            question: 'Which country has the largest GDP?',
            answer0: 'China',
            answer1: 'USA',
            answer2: 'Russia',
            answer3: 'Japan',
            correctAnswer: 1,
          },
          {
            question: 'Which country has the smallest GDP?',
            answer0: 'Tuvalu',
            answer1: 'Kiribati',
            answer2: 'Micronesia',
            answer3: 'Tonga',
            correctAnswer: 0,
          },
          {
            question: 'Which country has the largest GDP per capita?',
            answer0: 'Norway',
            answer1: 'Qatar',
            answer2: 'Switzerland',
            answer3: 'Luxembourg',
            correctAnswer: 3,
          },
          {
            question: 'Which country has the smallest GDP per capita?',
            answer0: 'Burundi',
            answer1: 'Malawi',
            answer2: 'Burundi',
            answer3: 'South Sudan',
            correctAnswer: 3,
          },
        ]
      },
    ]
  }

  //Zapocinje novi kviz
  startQuiz(quiz:Quiz) {
    this.startNewQuiz.emit(quiz);
  }
}
;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  questions: any = [];
  constructor() { }

  ngOnInit() {
    this.addQuestion('What is Zero Waste?', '[Answer 1]');
    this.addQuestion('What is this website?', 'This website was built to support the Zero Waste community by providing a general place to find stores that sell zero waste products. If you know a store that sells zero waste products and its not on the website then add it!');
    //this.addQuestion('', '')
  }

  addQuestion(question, answer){
    this.questions.push({
      'question': question,
      'answer': answer
    })
  }

}

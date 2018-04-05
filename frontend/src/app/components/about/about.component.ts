import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  questions: any = [];

  ngOnInit() {
    this.addQuestion('The Zero Waste Philosophy', 'Zero Waste is a philosophy. Zero Waste maximizes recycling, minimizes waste, reduces consumption and ensures that products are made to be reused, repaired or recycled back into nature or the marketplace.');
    this.addQuestion('Purpose of this website', 'This website was built to support the Zero Waste community by providing a general place to find stores that sell zero waste products. If you know a store that sells zero waste products and its not on the website then add it!');
  }

  addQuestion(question, answer){
    this.questions.push({
      'question': question,
      'answer': answer
    })
  }

}

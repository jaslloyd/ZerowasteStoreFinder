import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: String;
  email: String;
  subject: String;
  message: String;
  subjects = ["Choose one", "Feature Suggestion", "Bug Report", "Support", "Other"];
  @ViewChild('modelCloseButton') modelCloseButton:ElementRef;

  constructor(
    private flashMessage: FlashMessagesService,
    private backendService: BackendService,
    private router: Router) {
      this.subject = this.subjects[0];
    }

  ngOnInit() {

  }

  onContactSubmit(){
    const message = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    }

    this.backendService.addMessage(message).subscribe(data => {
      if(data.success){
        this.modelCloseButton.nativeElement.click();
        this.flashMessage.show(data.msg, {cssClass:'alert-success', timeout: 5000});
        this.router.navigate(['/']);
      }else{
        this.flashMessage.show(data.msg, {cssClass:'alert-danger', timeout: 3000});
      }
    });
  }

}

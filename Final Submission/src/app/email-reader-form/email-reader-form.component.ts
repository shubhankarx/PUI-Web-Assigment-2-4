import { Component, OnInit, ViewChild} from '@angular/core';
import { Email } from '../Interfaces/email';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css']
})
export class EmailReaderFormComponent implements OnInit {
  
  email: Email;
  emailList?: Email[];
  @ViewChild('emailForm') emailForm: any;
  
  constructor(private router: Router) {
    this.email = { From: "", To: "", Subject: "", Body: "" };
    this.emailList = [
     
  ]

  }

  ngOnInit(): void {
  }
  sendForm (): void {
    window.alert('The Email ' + this.email.Subject  + " has been sent to:" +this.email.To);
        this.emailList?.push({From: this.email.From, To: this.email.To, Subject: this.email.Subject, Body: this.email.Body}); 
        console.log(this.emailList)
        this.clear();
        this.emailForm.reset();
        /*
        this.email.From=""
        this.email.To=""
        this.email.Subject=""
        this.email.Body=""
        */
        
        //this.clear()
   
  }
  clear(): void {
    this.emailForm.reset();
  }
  
  send(): void {
    window.alert("Email received " + this.email.From + " " + this.email.To + " " + this.email.Subject + " "+ this.email.Body);
  }
  showList(): void {
    this.emailForm.reset();
    
  }
}

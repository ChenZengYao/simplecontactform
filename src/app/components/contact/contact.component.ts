import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faAngleRight, faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  //icons
  faAngleRight = faAngleRight;
  faCheck = faCheck;
  faExclamationTriangle = faExclamationTriangle;

  //title
  title: string = "Contact Me";

  //subtitle
  subtitle: string = "We are always happy to find out what's on your mind!";

  contactme!: FormGroup;
  
  //form variables
  name!: string;
  email!: string;
  message!: string;
  successmsg!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.successmsg = false;
  }

  onSubmit(){
    const data={
      name: this.name,
      email: this.email,
      message:this.message,
    };
    console.log(data);
    this.successmsg = true;
    setInterval(() => {
      this.successmsg = false;
    }, 3000);
    return;
  }
}

import { Component, OnInit } from '@angular/core';
import { faAngleRight, faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

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
  
  //form variables
  name!: string;
  email!: string;
  message!: string;
  successmsg!: boolean;
  result!: string;
  url: string = "https://62f4bd57ac59075124c2c928.mockapi.io/url";
  newUrl!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.successmsg = false;
  }


  displayMessage(){
    this.getURL();
  }

  //fetch url
  getURL(){
    this.http.get<any>(this.url).subscribe(response=>{
      this.newUrl = response.url;
      console.log(this.url);
      this.updateURL();
    })
  }

  //fetch new url
  updateURL(){
    this.http.get<any>(this.newUrl).subscribe(response=>{
      this.result = response.message;
      console.log(this.result);
    })
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

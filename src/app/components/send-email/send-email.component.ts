import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrl: './send-email.component.less',
})
export class SendEmailComponent implements OnInit {
  email = {
    to: ['syedzebi9@gmail.com'],
    subject: 'subject',
    body: 'body'
  };
  data={
    total:0,
    bounce:0,
    open:0,
    clicked:0,
    unsubscribe:0,
    complaints:0,
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.getStats()
  }

  sendEmail() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('http://localhost:3000/api/send-email', this.email, { headers: headers })
      .subscribe(response => {
        console.log(response);
        alert('Email sent successfully!');
        this.getStats()
      }, error => {
        console.error(error);
        alert('Error sending email!');
      });
  }

  getStats(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.get('http://localhost:3000/api/get-statistics', { headers: headers })
      .subscribe((response:any) => {
        this.data=response
        console.log(response);
      }, error => {
        console.error(error);
        alert('Error getting email data!');
      });

  }
}

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  sendEmail() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('http://localhost:3000/api/send-email', this.email, { headers: headers })
      .subscribe(response => {
        console.log(response);
        alert('Email sent successfully!');
      }, error => {
        console.error(error);
        alert('Error sending email!');
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { RouterModule } from '@angular/router';
declare var toastr: any;

interface ContactForm {
  name: string;
  mobileNo: string;
  email: string;
  inquiryType: string;
  query: string;
}

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './contactus.html',
  styleUrls: ['./contactus.css']
})
export class Contactus implements OnInit {
  constructor(private http: HttpClient) {}

  contactform = {
    name: '',
    mobileNo: '',
    email: '',
    inquiryType: '',
    message: ''
  };

  ngOnInit(): void {
    if (typeof toastr !== 'undefined') {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        positionClass: 'toast-top-right',
        timeOut: 5000
      };
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Data:', this.contactform); // Debug: check data being sent
      this.http.post(`${environment.apiUrl}/api/Contact/submit`, this.contactform).subscribe({
        next: (res) => {
          console.log('Response:', res);
          alert('Thank you for contacting us! We will get back to you soon.');
          form.resetForm();
        },
        error: () => {
          toastr.error('There was an error submitting your form. Please try again.');
        }
      });
    } else {
      toastr.warning('Please fill in all required fields.');
    }
  }
}


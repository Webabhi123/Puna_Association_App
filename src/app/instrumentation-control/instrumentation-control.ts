import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
interface EnquiryForm {
  name: string;
  phonenumber: string;
  email: string;
  message: string;
}
@Component({
  selector: 'app-instrumentation-control',
  imports: [FormsModule,CommonModule ],
  templateUrl: './instrumentation-control.html',
  styleUrl: './instrumentation-control.css'
})
export class InstrumentationControl {
  showEnquiryForm=false;

  enquiryform: EnquiryForm = {
    name: '',
    phonenumber: '',
    email: '',
    message: '',

  };
  constructor(private http: HttpClient) {}
  
       // Open the enquiry modal
  openEnquiryModal(): void {
    const modal = document.getElementById('enquiryModal');
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
  }
      closeEnquiryModal(): void {
        const modal = document.getElementById('enquiryModal') as HTMLElement | null;
        if (modal) modal.style.display = 'none';
      }
      onSubmit(form: NgForm): void {
        if (form.valid) {
          console.log('Form Data:', this.enquiryform); // Debug: check data being sent
          this.http.post(`${environment.apiUrl}/api/enquiry/submit`, this.enquiryform).subscribe({
            next: (res) => {
              alert('Thank you for contacting us! We will get back to you soon.');
              form.resetForm();
            },
            error: () => {
              alert('There was an error submitting your form. Please try again.');
            }
          });
        } else {
          alert('Please fill in all required fields.');
        }
      }

}

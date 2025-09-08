import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
declare var toastr: any;
interface ContactForm {
  name: string;
  phone: string;
  email: string;
  position: string;
  objective: string;
  resume: string;
}

@Component({
  selector: 'app-download',
  imports: [CommonModule,FormsModule],
  templateUrl: './download.html',
  styleUrl: './download.css'
})
export class Download implements AfterViewInit {
  @ViewChild('jobFormRef') jobFormRef!: NgForm;
  @ViewChild('fileInput') fileInput!: ElementRef;
  
  constructor(private http: HttpClient) {}
  
  jobForm: ContactForm = {
    name: '',
    phone: '',
    email: '',
    position: '',
    objective: '',
    resume: ''
  };
  
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.jobForm.resume = file.name;
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('name', this.jobForm.name);
      formData.append('phone', this.jobForm.phone);
      formData.append('email', this.jobForm.email);
      formData.append('position', this.jobForm.position);
      formData.append('objective', this.jobForm.objective);
      formData.append('resume', this.selectedFile, this.selectedFile.name);

      // Replace with your actual API endpoint
      this.http.post(`${environment.apiUrl}/api/Career/submit`, formData).subscribe({
        next: (response) => {
          //toastr.success('Application submitted successfully!');
          alert('Application submitted successfully!');
          form.resetForm();
          this.fileInput.nativeElement.value = '';
          this.selectedFile = null;
          this.jobForm.resume = ''; 
        },
        error: (error) => {
          console.error('Error submitting application:', error);
          alert('Failed to submit application. Please try again.');
        }
      });
    }
  }

  ngAfterViewInit(): void {
    document.querySelectorAll<HTMLButtonElement>('.sub-accordion').forEach((btn) => {
      btn.addEventListener('click', function (this: HTMLButtonElement) {
        this.classList.toggle('active');

        const panel = this.nextElementSibling as HTMLElement | null;
        const span = this.querySelector('span');

        if (panel) {
          if (panel.style.display === 'block') {
            panel.style.display = 'none';
            if (span) span.innerHTML = '&#9660;';
          } else {
            panel.style.display = 'block';
            if (span) span.innerHTML = '&#9650;';
          }
        }
    });
  });
}


}

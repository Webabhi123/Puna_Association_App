import { AfterViewInit, Component } from '@angular/core';
import { After } from 'v8';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
  interface MembershipForm {
  companyname: string;
  personname: string;
  phonenumber: string;
  email: string;
}

@Component({
  selector: 'app-becomemember',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './becomemember.html',
  styleUrl: './becomemember.css'
})
export class Becomemember implements AfterViewInit {
  
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}
  
  membershipform: MembershipForm = {
    companyname: '',
    personname: '',
    phonenumber: '',
    email: ''
  };

  ngOnInit() {
    // First, scroll to top when component loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Then handle fragment navigation if any
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            // Calculate the position to scroll to (accounting for fixed header if any)
            const yOffset = -100; // Reduced offset for better visibility
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 300); // Increased delay to ensure smooth scrolling after page load
      }
    });
  }
  ngAfterViewInit(): void {
document.querySelectorAll('a[href="#"]').forEach(link => {
      if (link.textContent?.trim().toLowerCase().includes('online application for membership')) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const modal = document.getElementById('membershipModal') as HTMLElement | null;
          if (modal) modal.style.display = 'flex';
        });
      }
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Data:', this.membershipform); // Debug: check data being sent
      this.http.post(`${environment.apiUrl}/api/membership/submit`, this.membershipform).subscribe({
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
